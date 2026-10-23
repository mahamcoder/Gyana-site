import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import prerender from '@prerenderer/rollup-plugin';
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer';
import { articles, frameworks } from './src/data/research.js';

function getChromeExecutablePath() {
  if (process.env.PUPPETEER_EXECUTABLE_PATH) {
    return process.env.PUPPETEER_EXECUTABLE_PATH;
  }
  const candidatePaths = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium',
  ];
  for (const p of candidatePaths) {
    if (fs.existsSync(p)) return p;
  }
  return undefined;
}

const mainRoutes = [
  '/',
  '/about',
  '/analytics',
  '/ai-lab',
  '/alpha',
  '/research',
  '/contact',
];

const articleRoutes = articles.map((a) => `/research/articles/${a.slug}`);
const frameworkRoutes = frameworks.map((f) => `/research/frameworks/${f.slug}`);
const allRoutes = [...mainRoutes, ...articleRoutes, ...frameworkRoutes];

// Captured prerendered HTML map to ensure root index.html and any others are reliably written to disk
const renderedMap = new Map();

/**
 * Plugin to flatten any folder-based index.html files (e.g. dist/about/index.html -> dist/about.html),
 * ensure index.html for root is written with prerendered content, and ensure .htaccess is in dist.
 */
function flattenAndVerifyDistPlugin() {
  return {
    name: 'flatten-and-verify-dist',
    closeBundle() {
      const distDir = path.resolve(process.cwd(), 'dist');
      if (!fs.existsSync(distDir)) return;

      // Ensure root index.html is written with prerendered HTML
      if (renderedMap.has('/')) {
        fs.writeFileSync(path.join(distDir, 'index.html'), renderedMap.get('/').trim(), 'utf8');
      }

      // Ensure .htaccess copied
      const htaccessSrc = path.resolve(process.cwd(), 'public/.htaccess');
      const htaccessDest = path.resolve(distDir, '.htaccess');
      if (fs.existsSync(htaccessSrc) && !fs.existsSync(htaccessDest)) {
        fs.copyFileSync(htaccessSrc, htaccessDest);
      }

      // Recursively find and flatten index.html in subdirectories
      function flattenDir(dir) {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            flattenDir(fullPath);
            // Check if directory has index.html
            const nestedIndex = path.join(fullPath, 'index.html');
            if (fs.existsSync(nestedIndex)) {
              const flatTarget = `${fullPath}.html`;
              fs.copyFileSync(nestedIndex, flatTarget);
              fs.unlinkSync(nestedIndex);
            }
            // Remove dir if empty
            try {
              if (fs.readdirSync(fullPath).length === 0) {
                fs.rmdirSync(fullPath);
              }
            } catch {
              // ignore
            }
          }
        }
      }

      flattenDir(distDir);
    },
  };
}

export default defineConfig(({ command }) => {
  const isBuild = command === 'build';
  const chromePath = getChromeExecutablePath();

  const plugins = [
    react(),
    tailwindcss(),
  ];

  if (isBuild) {
    plugins.push(
      prerender({
        routes: allRoutes,
        renderer: new PuppeteerRenderer({
          headless: true,
          renderAfterTime: 500,
          maxConcurrentRoutes: 4,
          skipThirdPartyRequests: true,
          launchOptions: {
            executablePath: chromePath,
            protocolTimeout: 180000,
            args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
          },
        }),
        postProcess(renderedRoute) {
          renderedMap.set(renderedRoute.route, renderedRoute.html);
          if (renderedRoute.route === '/') {
            renderedRoute.outputPath = 'index.html';
          } else {
            const trimmed = renderedRoute.route.replace(/^\/+|\/+$/g, '');
            renderedRoute.outputPath = `${trimmed}.html`;
          }
        },
      }),
      flattenAndVerifyDistPlugin(),
    );
  }

  return {
    plugins,
  };
});
