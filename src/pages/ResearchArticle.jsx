import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowLeft, Calendar, Tag, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { articles } from '../data/research';

export const ResearchArticle = () => {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);

  useEffect(() => {
    if (!article) {
      document.title = 'Article Not Found | Gyanasarathi';
      return;
    }

    document.title = `${article.title} | Gyanasarathi`;

    // Meta description
    let descMeta = document.querySelector('meta[name="description"]');
    const prevDesc = descMeta ? descMeta.getAttribute('content') : '';
    if (descMeta) {
      descMeta.setAttribute('content', article.summary);
    }

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalLink ? canonicalLink.getAttribute('href') : '';
    const currentCanonical = `https://gyanasarathi.com/research/articles/${slug}`;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentCanonical);

    // Robots meta: noindex, follow while page is a placeholder
    // TODO(remove noindex when real content is published)
    let robotsMeta = document.querySelector('meta[name="robots"]');
    const createdRobots = !robotsMeta;
    const prevRobots = robotsMeta ? robotsMeta.getAttribute('content') : null;
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', 'noindex, follow');

    return () => {
      if (descMeta && prevDesc) {
        descMeta.setAttribute('content', prevDesc);
      }
      if (canonicalLink) {
        if (prevCanonical) {
          canonicalLink.setAttribute('href', prevCanonical);
        } else {
          canonicalLink.remove();
        }
      }
      if (robotsMeta) {
        if (createdRobots) {
          robotsMeta.remove();
        } else if (prevRobots !== null) {
          robotsMeta.setAttribute('content', prevRobots);
        } else {
          robotsMeta.remove();
        }
      }
    };
  }, [article, slug]);

  if (!article) {
    return (
      <div className="w-full min-h-[70vh] flex items-center justify-center py-20 px-6">
        <div className="max-w-md text-center">
          <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">404 Error</p>
          <h1 className="text-3xl font-bold tracking-tight text-black mb-4">Article Not Found</h1>
          <p className="text-gray-500 mb-8 leading-relaxed">
            The research article you are looking for does not exist or may have been moved.
          </p>
          <Link to="/research">
            <Button variant="primary">Back to Research</Button>
          </Link>
        </div>
      </div>
    );
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `https://gyanasarathi.com/research/articles/${article.slug}#article`,
        'url': `https://gyanasarathi.com/research/articles/${article.slug}`,
        'headline': article.title,
        'description': article.summary,
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
            'name': article.title,
            'item': `https://gyanasarathi.com/research/articles/${article.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="w-full bg-[#f8fafc] text-black min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
            <span className="text-black truncate max-w-xs sm:max-w-md">{article.title}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category and Date tags */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white text-[11px] font-black uppercase tracking-widest rounded-md">
                <Tag size={12} />
                {article.category}
              </span>
              {article.date && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/5 text-gray-700 text-xs font-semibold rounded-md border border-black/5">
                  <Calendar size={12} className="text-gray-500" />
                  {article.date}
                </span>
              )}
            </div>

            {/* Exactly one <h1> on the page */}
            <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-black leading-[1.15] mb-6">
              {article.title}
            </h1>

            {/* Article summary */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-normal">
              {article.summary}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notice Section: Full article coming soon */}
      {/* TODO(content: client must provide the full article text for each slug) */}
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
              <Clock size={24} />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black mb-4">
              Full article coming soon.
            </h2>
            <p className="text-black/80 max-w-xl mx-auto text-base md:text-lg mb-8 leading-relaxed">
              We are finalizing the institutional publication and accompanying data exhibits for this research piece.
              In the meantime, connect with our investment advisory team to discuss findings and methodologies.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="primary" className="w-full sm:w-auto px-8 py-3.5">
                  Book a Strategy Call
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
