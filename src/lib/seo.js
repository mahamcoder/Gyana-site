/**
 * usePageMeta – shared hook for per-page head tags.
 *
 * Sets document.title, meta description, canonical URL, and Open Graph tags.
 * Cleans up (restores previous values) on unmount so tags never leak between pages.
 *
 * Usage:
 *   usePageMeta({
 *     title: 'About Gyanasarathi | CRE Modeling Meets Agentic AI',
 *     description: 'Meet the founder …',
 *     path: '/about',                    // canonical path (no domain)
 *     noindex: false,                    // default false; true for placeholder pages
 *   });
 *
 * Does NOT touch the JSON-LD script tag – each page manages its own schema.
 */
import { useEffect } from 'react';

const SITE_URL = 'https://gyanasarathi.com';
const SITE_NAME = 'Gyanasarathi';

function getOrCreateMeta(attr, value) {
  let el = document.querySelector(`meta[${attr}="${value}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr.replace(/^property$/, 'property').replace(/^name$/, 'name'), value);
    if (attr === 'property') el.setAttribute('property', value);
    else el.setAttribute('name', value);
    document.head.appendChild(el);
    return { el, created: true, prev: null };
  }
  return { el, created: false, prev: el.getAttribute('content') };
}

function getOrCreateLink(rel) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
    return { el, created: true, prev: null };
  }
  return { el, created: false, prev: el.getAttribute('href') };
}

export function usePageMeta({ title, description, path, noindex = false }) {
  useEffect(() => {
    const canonicalUrl = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;

    // Title
    const prevTitle = document.title;
    document.title = title;

    // Meta description
    const desc = getOrCreateMeta('name', 'description');
    desc.el.setAttribute('content', description);

    // Canonical
    const canon = getOrCreateLink('canonical');
    canon.el.setAttribute('href', canonicalUrl);

    // Open Graph
    const ogTitle = getOrCreateMeta('property', 'og:title');
    ogTitle.el.setAttribute('content', title);

    const ogDesc = getOrCreateMeta('property', 'og:description');
    ogDesc.el.setAttribute('content', description);

    const ogUrl = getOrCreateMeta('property', 'og:url');
    ogUrl.el.setAttribute('content', canonicalUrl);

    const ogType = getOrCreateMeta('property', 'og:type');
    ogType.el.setAttribute('content', 'website');

    const ogSiteName = getOrCreateMeta('property', 'og:site_name');
    ogSiteName.el.setAttribute('content', SITE_NAME);

    // Robots (noindex for placeholder pages only)
    let robotsInfo = null;
    if (noindex) {
      robotsInfo = getOrCreateMeta('name', 'robots');
      robotsInfo.el.setAttribute('content', 'noindex, follow');
    } else {
      // Make sure there's no leftover noindex from a previous page
      const existingRobots = document.querySelector('meta[name="robots"]');
      if (existingRobots) {
        robotsInfo = { el: existingRobots, created: false, prev: existingRobots.getAttribute('content') };
        existingRobots.remove();
        robotsInfo = { ...robotsInfo, removed: true };
      }
    }

    return () => {
      // Restore title
      document.title = prevTitle;

      // Restore or remove meta description
      if (desc.created) desc.el.remove();
      else if (desc.prev !== null) desc.el.setAttribute('content', desc.prev);

      // Restore or remove canonical
      if (canon.created) canon.el.remove();
      else if (canon.prev !== null) canon.el.setAttribute('href', canon.prev);

      // Restore or remove OG tags
      [ogTitle, ogDesc, ogUrl, ogType, ogSiteName].forEach((og) => {
        if (og.created) og.el.remove();
        else if (og.prev !== null) og.el.setAttribute('content', og.prev);
      });

      // Restore robots if it was there before
      if (noindex && robotsInfo) {
        if (robotsInfo.created) robotsInfo.el.remove();
        else if (robotsInfo.prev !== null) robotsInfo.el.setAttribute('content', robotsInfo.prev);
      }
      if (!noindex && robotsInfo && robotsInfo.removed) {
        // Re-add the robots tag we removed (if a page previously set it)
        const restored = document.createElement('meta');
        restored.setAttribute('name', 'robots');
        restored.setAttribute('content', robotsInfo.prev || '');
        document.head.appendChild(restored);
      }
    };
  }, [title, description, path, noindex]);
}
