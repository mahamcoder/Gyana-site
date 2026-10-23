import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowLeft, FileSpreadsheet, Download, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { usePageMeta } from '../lib/seo';
import { frameworks } from '../data/research';

export const ResearchFramework = () => {
  const { slug } = useParams();
  const framework = frameworks.find((item) => item.slug === slug);

  // TODO(remove noindex when real content is published)
  usePageMeta({
    title: framework ? `${framework.title} | Gyanasarathi` : 'Framework Not Found | Gyanasarathi',
    description: framework ? framework.summary : 'The institutional framework you are looking for does not exist.',
    path: `/research/frameworks/${slug}`,
    noindex: true,
  });

  if (!framework) {
    return (
      <div className="w-full min-h-[70vh] flex items-center justify-center py-20 px-6">
        <div className="max-w-md text-center">
          <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">404 Error</p>
          <h1 className="text-3xl font-bold tracking-tight text-black mb-4">Framework Not Found</h1>
          <p className="text-gray-500 mb-8 leading-relaxed">
            The institutional framework you are looking for does not exist or may have been moved.
          </p>
          <Link to="/research">
            <Button variant="primary">Back to Research</Button>
          </Link>
        </div>
      </div>
    );
  }

  const frameworkSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        '@id': `https://gyanasarathi.com/research/frameworks/${framework.slug}#creativework`,
        'url': `https://gyanasarathi.com/research/frameworks/${framework.slug}`,
        'name': framework.title,
        'description': framework.summary,
        'fileFormat': framework.badge || 'XLSX',
        'isPartOf': {
          '@id': 'https://gyanasarathi.com/#website',
        },
        'author': {
          '@type': 'Person',
          '@id': 'https://gyanasarathi.com/about#founder',
          'name': 'Gyan [surname]',
        },
        'publisher': {
          '@id': 'https://gyanasarathi.com/#organization',
        },
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://gyanasarathi.com/',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Research and Insights',
            'item': 'https://gyanasarathi.com/research',
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': framework.title,
            'item': `https://gyanasarathi.com/research/frameworks/${framework.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="w-full bg-[#f8fafc] text-black min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(frameworkSchema) }}
      />

      {/* Hero / Header Section */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 border-b border-black/5 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black/[0.03] via-transparent to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          {/* Breadcrumb: Home > Research and Insights > <title> */}
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs font-semibold text-gray-500 mb-8">
            <Link to="/" className="hover:text-black transition-colors">Home</Link>
            <ChevronRight size={12} className="text-gray-400" />
            <Link to="/research" className="hover:text-black transition-colors">Research and Insights</Link>
            <ChevronRight size={12} className="text-gray-400" />
            <span className="text-black truncate max-w-xs sm:max-w-md">{framework.title}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category and Badge (File Format) */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white text-[11px] font-black uppercase tracking-widest rounded-md">
                <FileSpreadsheet size={12} />
                {framework.category}
              </span>
              <span className="px-3 py-1 bg-black/5 text-gray-700 text-xs font-bold uppercase tracking-wider rounded-md border border-black/5">
                Format: {framework.badge || 'XLSX'}
              </span>
            </div>

            {/* Exactly one <h1> on the page */}
            <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-black leading-[1.15] mb-6">
              {framework.title}
            </h1>

            {/* Framework summary */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-normal">
              {framework.summary}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Framework Request / Access Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-10 md:p-14 text-center relative overflow-hidden border border-black/10 shadow-lg"
            style={{ background: 'linear-gradient(to bottom right, #ffffff, #92d5d8, #4db9dc)' }}
          >
            <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center text-white mx-auto mb-6 shadow-md">
              <Download size={24} />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm text-xs font-semibold text-gray-800 mb-4 border border-black/5">
              <ShieldCheck size={14} className="text-teal-700" />
              Verified Institutional Template
            </div>

            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black mb-4">
              Request Direct Access to This Framework
            </h2>
            <p className="text-black/80 max-w-xl mx-auto text-base md:text-lg mb-8 leading-relaxed">
              This institutional financial framework is distributed to accredited allocators, GPs, and underwriting teams.
              Contact our team to receive direct spreadsheet delivery and implementation guidance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* TODO(content: client must provide the real downloadable file for each framework, then replace this button with a download link) */}
              <Link to="/contact?topic=research">
                <Button variant="primary" className="w-full sm:w-auto px-8 py-3.5">
                  Request this framework
                </Button>
              </Link>
              <Link
                to="/research"
                className="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-black/70 px-4 py-3 transition-colors"
              >
                <ArrowLeft size={16} />
                Back to Research
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
