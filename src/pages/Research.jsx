import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  DownloadCloud, LineChart, FileText, BrainCircuit,
  ArrowUpRight, Globe2, LayoutTemplate, Layers, ChevronRight, Activity, Cpu
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { frameworks, articles } from '../data/research';

export const Research = () => {
  useEffect(() => {
    document.title = 'Real Estate and Capital Markets Research | Gyanasarathi';
  }, []);

  const researchSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://gyanasarathi.com/research#collectionpage',
        'url': 'https://gyanasarathi.com/research',
        'name': 'Real Estate and Capital Markets Research | Gyanasarathi',
        'description':
          'The Gyanasarathi Research Vault publishes macro reports, real estate cap rate and capital flow analysis, and research on AI in finance for capital allocators. Downloads include a WACC model, a due diligence checklist and infrastructure templates with LP/GP waterfalls. Each piece uses the methods Gyanasarathi applies on live client mandates.',
        'isPartOf': {
          '@id': 'https://gyanasarathi.com/#website',
        },
        'about': {
          '@id': 'https://gyanasarathi.com/#organization',
        },
        'mainEntity': {
          '@type': 'ItemList',
          'itemListElement': articles.map((article, idx) => ({
            '@type': 'ListItem',
            'position': idx + 1,
            'name': article.title,
            'url': `https://gyanasarathi.com/research/articles/${article.slug}`,
          })),
        },
      },
      {
        '@type': 'WebPage',
        '@id': 'https://gyanasarathi.com/research#webpage',
        'url': 'https://gyanasarathi.com/research',
        'name': 'Real Estate and Capital Markets Research | Gyanasarathi',
        'description':
          'The Gyanasarathi Research Vault publishes macro reports, real estate cap rate and capital flow analysis, and research on AI in finance for capital allocators. Downloads include a WACC model, a due diligence checklist and infrastructure templates with LP/GP waterfalls. Each piece uses the methods Gyanasarathi applies on live client mandates.',
        'isPartOf': {
          '@id': 'https://gyanasarathi.com/#website',
        },
        'about': {
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
            'name': 'Research Vault',
            'item': 'https://gyanasarathi.com/research',
          },
        ],
      },
    ],
  };

  const macroReports = articles.filter(
    (a) => a.category !== 'AI in Finance' && a.category !== 'AI Strategy' && a.category !== 'Fintech'
  );
  const aiTopics = articles.filter((a) => a.category === 'AI in Finance');
  const featuredInsights = articles.filter(
    (a) => a.slug === 'from-descriptive-dashboards-to-autonomous-decision-engines' ||
      a.slug === 'capital-constraints-financing-gaps-in-european-real-estate' ||
      a.slug === 'api-architecture-for-high-speed-trading-zero-trust-streams'
  );

  return (
    <div className="w-full overflow-hidden bg-blue-50/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(researchSchema) }}
      />

      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[60vh] flex flex-col justify-center px-6 pt-40 pb-24 bg-blue-50/20 overflow-hidden z-10 border-b border-black/5">
        {/* Subtle Data Grids / Charts */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black/[0.04] via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute inset-x-0 bottom-0 h-[60%] opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(0deg, black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)', backgroundSize: '40px 40px', backgroundPosition: 'center bottom' }}></div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-6 inline-block">RESEARCH AND INSIGHTS</span>
            <h1 className="text-4xl md:text-[4rem] font-medium tracking-tighter text-black leading-[1.05] mb-8">
              Capital Markets Research <br className="hidden md:block" />
              <span className="text-gray-400">for Real Estate Investors.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed mb-10">
              Not a general blog. Structured frameworks, macro deep dives and research reports for capital allocators, built with the same methods we use on client mandates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#vault">
                <Button variant="primary" className="w-full sm:w-auto px-8 py-4">Browse the Research Vault</Button>
              </a>
              <a href="#vault">
                <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-black border-black/10 hover:border-black">Download Institutional Frameworks</Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — CORE VALUE INTRO SECTION */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl md:text-[3.25rem] font-medium tracking-tighter text-black leading-none mb-8">
              This Is Not a Newsletter. This Is an Intelligence System.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium mb-10">
              The Gyanasarathi Research Vault publishes macro reports, real estate cap rate and capital flow analysis, and research on AI in finance for capital allocators. Downloads include a WACC model, a due diligence checklist and infrastructure templates with LP/GP waterfalls. Each piece uses the methods Gyanasarathi applies on live client mandates.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc] p-4 rounded-xl text-sm font-semibold text-gray-800">Modeling Frameworks</div>
              <div className="bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc] p-4 rounded-xl text-sm font-semibold text-gray-800">Macro Research</div>
              <div className="bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc] p-4 rounded-xl text-sm font-semibold text-gray-800">Real Estate Analysis</div>
              <div className="bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc] p-4 rounded-xl text-sm font-semibold text-gray-800">AI in Finance</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — INDUSTRY FRAMEWORKS VAULT */}
      <section id="vault" className="py-24 md:py-32 bg-[#F7F8F9] relative z-10 scroll-mt-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4 inline-block">DOWNLOADABLE FRAMEWORKS</span>
              <h2 className="text-3xl md:text-[3.25rem] font-medium tracking-tighter text-black leading-none">
                Modeling Frameworks Used on Live Mandates
              </h2>
            </div>
            <p className="text-gray-500 font-medium md:mb-2 border-l-2 border-black/10 pl-4 max-w-xs text-sm">
              Templates for valuation, diligence and reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <VaultCard
              title={frameworks[0].title}
              desc={frameworks[0].summary}
              slug={frameworks[0].slug}
              icon={<LayoutTemplate size={20} />}
            />
            <VaultCard
              title={frameworks[1].title}
              desc={frameworks[1].summary}
              slug={frameworks[1].slug}
              icon={<Layers size={20} />}
            />
            <VaultCard
              title={frameworks[2].title}
              desc={
                <span>
                  Templates for long-duration energy and infrastructure assets, with phased{' '}
                  <Link to="/analytics" className="underline hover:text-sapforce-accent transition-colors">
                    LP/GP waterfall
                  </Link>{' '}
                  distributions.
                </span>
              }
              slug={frameworks[2].slug}
              icon={<Globe2 size={20} />}
            />
            <VaultCard
              title={frameworks[3].title}
              desc={frameworks[3].summary}
              slug={frameworks[3].slug}
              icon={<Activity size={20} />}
            />
            <VaultCard
              title={frameworks[4].title}
              desc={frameworks[4].summary}
              slug={frameworks[4].slug}
              icon={<FileText size={20} />}
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 & 5 — MACRO REPORTS & AI INSIGHTS SPLIT */}
      <section id="insights" className="py-24 md:py-32 bg-white relative z-10 border-y border-black/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 xl:gap-24">

            {/* Left Box - Macro and Real Estate Research */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="mb-10">
                <div className="w-12 h-12 rounded-full bg-sapforce-dark flex items-center justify-center text-sapforce-accent mb-6 shadow-md"><LineChart size={20} /></div>
                <h3 className="text-2xl md:text-[2.25rem] font-medium tracking-tighter text-black leading-none mb-4">Macro and Real Estate Research</h3>
                <p className="text-gray-500 font-medium text-lg leading-relaxed max-w-md">Views on capital flows, interest rates and cap rates, written for capital allocators.</p>
              </div>

              <div className="space-y-4">
                {/* TODO(confirm: newest report is dated Q1 2026, client should add a fresh piece or drop the dates) */}
                {macroReports.map((report) => (
                  <Link
                    key={report.slug}
                    to={`/research/articles/${report.slug}`}
                    className="group bg-white border border-black/5 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md hover:border-black/10 transition-all cursor-pointer block"
                  >
                    <div>
                      <div className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2">{report.category}</div>
                      <h4 className="text-lg font-bold text-black tracking-tight">{report.title}</h4>
                    </div>
                    <div className="flex items-center gap-4 shrink-0 mt-2 sm:mt-0">
                      <span className="text-xs font-semibold text-gray-500">{report.date}</span>
                      <div className="w-8 h-8 rounded-full bg-sapforce-bg flex items-center justify-center text-gray-400 group-hover:bg-[#111] group-hover:text-white transition-colors">
                        <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Right Box - At the Crossroads of AI & Finance */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-full">
              <div className="h-full bg-sapforce-dark rounded-[3rem] p-10 md:p-14 relative overflow-hidden text-white shadow-2xl flex flex-col justify-between border border-white/5">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#92d5d8] blur-[100px] opacity-20 pointer-events-none"></div>

                <div className="relative z-10 mb-12">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white mb-6 border border-white/5"><BrainCircuit size={20} /></div>
                  <h3 className="text-2xl md:text-[2.25rem] font-medium tracking-tighter text-white leading-none mb-4">At the Crossroads of <br />AI & Finance</h3>
                  <p className="text-white/60 font-medium text-lg leading-relaxed max-w-sm">Practical research on where AI changes financial analysis, and where it does not.</p>
                </div>

                <div className="space-y-1 relative z-10">
                  {aiTopics.map((topic) => (
                    <Link
                      key={topic.slug}
                      to={`/research/articles/${topic.slug}`}
                      className="flex gap-4 p-4 hover:bg-white/5 rounded-xl transition-colors cursor-pointer group border-b border-white/5 last:border-0 block"
                    >
                      <Cpu size={18} className="text-sapforce-accent shrink-0 mt-1 opacity-80" />
                      <span className="font-semibold text-gray-200 text-lg group-hover:text-white leading-tight">{topic.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 5 — FEATURED INSIGHTS GRID */}
      <section className="py-24 md:py-32 bg-sapforce-bg relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4 inline-block">LATEST RESEARCH</span>
            <h2 className="text-3xl md:text-[3.25rem] font-medium tracking-tighter text-black leading-none">
              Featured Insights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredInsights.map((insight) => (
              <InsightCard
                key={insight.slug}
                tag={insight.category}
                title={insight.title}
                desc={insight.summary}
                slug={insight.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — FINAL CTA / SUBSCRIBE SECTION */}
      <section className="py-24 md:py-32 bg-white relative z-10 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/30"></div>

        {/* Soft Faint Chart Line background */}
        <svg className="absolute inset-x-0 bottom-0 w-full h-[50%] opacity-[0.02] pointer-events-none" viewBox="0 0 1000 300" preserveAspectRatio="none">
          <path d="M0,300 L0,200 Q200,150 400,250 T800,100 L1000,50 L1000,300 Z" fill="black" />
        </svg>

        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[2.5rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl"
            style={{ background: 'linear-gradient(to bottom right, #ffffff, #92d5d8, #4db9dc)' }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-[3.5rem] font-medium text-black mb-6 leading-[1.1] tracking-tighter">
                Stay at the Frontier of <br className="hidden md:block" /><span className="text-gray-600">Real Estate and AI Research</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
                Subscribe for new frameworks, macro reports and AI research, written for institutional decision-makers and capital allocators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact?topic=research">
                  {/* TODO(confirm: subscribe action - links to /contact for now) */}
                  <Button variant="primary" className="w-full sm:w-auto px-8 py-4">Subscribe to Research Updates</Button>
                </Link>
                <Link to="/contact?topic=research">
                  <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-black border-black/10 hover:border-black">Request Full Research Access</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

const VaultCard = ({ title, desc, icon, slug }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc] p-8 rounded-3xl group relative overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full shadow-md"
  >
    <div className="flex items-start justify-between mb-6">
      <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white group-hover:scale-110 transition-transform border border-white/10">
        {icon}
      </div>
      <div className="px-3 py-1 bg-black backdrop-blur-md rounded-md text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">
        XLSX
      </div>
      {/* TODO(confirm: file formats; use PDF for any PDF file) */}
    </div>
    <h3 className="text-xl font-bold mb-3 tracking-tight text-black leading-tight flex-grow">{title}</h3>
    <div className="text-black/70 font-medium text-sm mb-6">{desc}</div>

    <Link to={`/research/frameworks/${slug}`} className="flex items-center text-xs font-bold text-black gap-2 group-hover:gap-3 transition-all relative z-10 w-fit">
      <DownloadCloud size={14} className="text-black/60 group-hover:text-black" /> Download Framework
    </Link>
  </motion.div>
);

const InsightCard = ({ tag, title, desc, slug }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc] p-10 rounded-[2.5rem] group relative overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full shadow-md"
  >
    <div className="text-[10px] font-black uppercase text-black/50 tracking-widest mb-4">{tag}</div>
    <h3 className="text-2xl font-bold mb-4 tracking-tight text-black leading-tight flex-grow">{title}</h3>
    <p className="text-black/70 font-medium leading-relaxed mb-8">{desc}</p>

    <Link to={`/research/articles/${slug}`} className="flex items-center text-sm font-bold text-black gap-2 group-hover:gap-3 transition-all relative z-10 w-fit border-b-2 border-transparent group-hover:border-black pb-1">
      Read Insight <ChevronRight size={16} />
    </Link>
  </motion.div>
);
