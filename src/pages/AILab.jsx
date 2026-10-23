import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain, Activity, Network, Database, Cpu,
  ShieldCheck, CheckCircle2
} from 'lucide-react';
import { Button } from '../components/ui/Button';

export const AILab = () => {
  useEffect(() => {
    document.title = 'Agentic AI for Financial Services | Gyanasarathi AI Lab';
  }, []);

  const aiLabSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://gyanasarathi.com/ai-lab#service',
        'name': 'Agentic AI Development',
        'serviceType': 'Agentic AI for financial services',
        'description':
          "Gyanasarathi's AI Lab builds agentic AI for investment teams. Its AI agents read filings, rent rolls and market data, run valuation and risk checks, and draft analysis for analyst sign-off. It also delivers fine-tuned financial LLMs and valuation APIs, deployed privately so client data stays isolated.",
        'url': 'https://gyanasarathi.com/ai-lab',
        'provider': {
          '@id': 'https://gyanasarathi.com/#organization',
        },
        'areaServed': 'Worldwide',
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'AI Lab products',
          'itemListElement': [
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Agentic Stock Analysis Engine',
              },
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Technical Market Intelligence Agents',
              },
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'End-to-End AI Automation Workflows',
              },
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Valuation and Risk APIs',
              },
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Fine-Tuned Financial LLMs',
              },
            },
          ],
        },
      },
      {
        '@type': 'WebPage',
        '@id': 'https://gyanasarathi.com/ai-lab#webpage',
        'url': 'https://gyanasarathi.com/ai-lab',
        'name': 'Agentic AI for Financial Services | Gyanasarathi AI Lab',
        'description':
          "Gyanasarathi's AI Lab builds agentic AI for investment teams. Its AI agents read filings, rent rolls and market data, run valuation and risk checks, and draft analysis for analyst sign-off. It also delivers fine-tuned financial LLMs and valuation APIs, deployed privately so client data stays isolated.",
        'isPartOf': {
          '@id': 'https://gyanasarathi.com/#website',
        },
        'about': {
          '@id': 'https://gyanasarathi.com/#organization',
        },
        'mainEntity': {
          '@id': 'https://gyanasarathi.com/ai-lab#service',
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
            'name': 'AI Lab',
            'item': 'https://gyanasarathi.com/ai-lab',
          },
        ],
      },
    ],
  };

  return (
    <div className="w-full overflow-hidden bg-blue-50/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiLabSchema) }}
      />

      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[60vh] flex flex-col justify-center px-6 pt-40 pb-24 bg-blue-50/20 overflow-hidden z-10 border-b border-black/5">
        {/* Subtle Neural Network / Data Streams Vis Placeholder */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black/[0.04] via-transparent to-transparent pointer-events-none"></div>
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,20 50,50 T100,50 Q75,80 50,50 T0,50" fill="none" stroke="black" strokeWidth="0.2" />
          <path d="M0,60 Q35,10 50,60 T100,30 Q65,100 50,60 T0,60" fill="none" stroke="black" strokeWidth="0.1" />
        </svg>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-6 inline-block">THE AI LAB</span>
            <h1 className="text-4xl md:text-[4.5rem] font-medium tracking-tighter text-black leading-[1.05] mb-8">
              Agentic AI for Finance. <br className="hidden md:block" />
              <span className="text-gray-400">Built Around Your Data.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed mb-10">
              The AI Lab builds AI agents, fine-tuned LLMs and valuation APIs that automate research, document review and modeling for investment firms. Every output traces back to its source.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#products">
                <Button variant="primary" className="w-full sm:w-auto px-8 py-4">Explore Our AI Products</Button>
              </a>
              <Link to="/contact">
                <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-black border-black/10 hover:border-black">Request a Technical Integration</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — CORE IDEA SECTION (INTRO BLOCK) */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl md:text-[3.25rem] font-medium tracking-tighter text-black leading-none mb-8">
              From Manual Analysis to Agentic Workflows
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium mb-10">
              Gyanasarathi's AI Lab builds agentic AI for investment teams. Its AI agents read filings, rent rolls and market data, run valuation and risk checks, and draft analysis for analyst sign-off. It also delivers fine-tuned financial LLMs and valuation APIs, deployed privately so client data stays isolated.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
              <div className="flex items-center gap-3 bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc] p-4 rounded-xl">
                <CheckCircle2 size={18} className="text-sapforce-accent shrink-0" />
                <span className="font-semibold text-gray-800">Ingest and normalize multi-source financial data automatically</span>
              </div>
              <div className="flex items-center gap-3 bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc] p-4 rounded-xl">
                <CheckCircle2 size={18} className="text-sapforce-accent shrink-0" />
                <span className="font-semibold text-gray-800">Analyze market dynamics and asset fundamentals in real time</span>
              </div>
              <div className="flex items-center gap-3 bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc] p-4 rounded-xl">
                <CheckCircle2 size={18} className="text-sapforce-accent shrink-0" />
                <span className="font-semibold text-gray-800">Generate deterministic valuations calibrated to institutional standards</span>
              </div>
              <div className="flex items-center gap-3 bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc] p-4 rounded-xl">
                <CheckCircle2 size={18} className="text-sapforce-accent shrink-0" />
                <span className="font-semibold text-gray-800">Cut manual hours while analysts keep final sign-off</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — MAIN PRODUCTS GRID */}
      <section id="products" className="py-24 bg-[#F7F8F9] relative z-10 scroll-mt-20 border-y border-black/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center md:text-left mb-16">
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4 inline-block">WHAT WE HAVE BUILT</span>
            <h2 className="text-3xl md:text-[3.25rem] font-medium tracking-tighter text-black leading-none">
              Our AI Products for Investment Teams
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc] p-10 rounded-[2.5rem] group relative overflow-hidden transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col h-full">
              <div className="mb-8 w-14 h-14 rounded-full bg-black flex items-center justify-center text-white group-hover:scale-110 transition-all duration-500 shadow-sm border border-white/10">
                <Brain size={22} className="transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight text-black leading-tight">Agentic Stock Analysis Engine</h3>
              <p className="text-black/70 font-medium leading-relaxed flex-grow mb-6 text-sm">
                Our flagship product. AI agents read SEC filings, earnings calls and macro data, then produce intrinsic valuations with every assumption sourced.
              </p>
              <div className="space-y-2 relative z-10 w-full mb-4">
                <div className="text-[11px] font-bold tracking-widest text-black/40 uppercase">Key Abilities</div>
                <div className="text-[13px] font-semibold text-black/80 pb-1 border-b border-black/5">Fundamental analysis automation</div>
                <div className="text-[13px] font-semibold text-black/80 pb-1 border-b border-black/5">Earnings transcript parsing</div>
                <div className="text-[13px] font-semibold text-black/80">Macro indicator synthesis</div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc] p-10 rounded-[2.5rem] group relative overflow-hidden transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col h-full">
              <div className="mb-8 w-14 h-14 rounded-full bg-black flex items-center justify-center text-white group-hover:scale-110 transition-all duration-500 shadow-sm border border-white/10">
                <Activity size={22} className="transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight text-black leading-tight">Technical Market Intelligence Agents</h3>
              <p className="text-black/70 font-medium leading-relaxed flex-grow mb-6 text-sm">
                Quantitative agents for technical analysis. They detect trends and momentum shifts and write a plain-English read of each signal for your analysts.
              </p>
              <div className="space-y-2 relative z-10 w-full mb-4">
                <div className="text-[11px] font-bold tracking-widest text-black/40 uppercase">Key Abilities</div>
                <div className="text-[13px] font-semibold text-black/80 pb-1 border-b border-black/5">Trend detection</div>
                <div className="text-[13px] font-semibold text-black/80 pb-1 border-b border-black/5">Signal generation</div>
                <div className="text-[13px] font-semibold text-black/80">Market structure mapping</div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc] p-10 rounded-[2.5rem] group relative overflow-hidden transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col h-full">
              <div className="mb-8 w-14 h-14 rounded-full bg-black flex items-center justify-center text-white group-hover:scale-110 transition-all duration-500 shadow-sm border border-white/10">
                <Network size={22} className="transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight text-black leading-tight">End-to-End AI Automation Workflows</h3>
              <p className="text-black/70 font-medium leading-relaxed flex-grow mb-6 text-sm">
                Remove the manual layer from operations. Workflows take documents in, extract the data, build first-pass financials and flag issues for review.
              </p>
              <div className="space-y-2 relative z-10 w-full mb-4">
                <div className="text-[11px] font-bold tracking-widest text-black/40 uppercase">Key Abilities</div>
                <div className="text-[13px] font-semibold text-black/80 pb-1 border-b border-black/5">Document parsing automation</div>
                <div className="text-[13px] font-semibold text-black/80 pb-1 border-b border-black/5">Data normalization</div>
                <div className="text-[13px] font-semibold text-black/80">Financial report generation</div>
              </div>
            </motion.div>

            {/* Row 2 - Centered / Expanded Items */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc] p-10 rounded-[2.5rem] group relative overflow-hidden transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col lg:col-span-1 lg:col-start-1 h-full">
              <div className="mb-8 w-14 h-14 rounded-full bg-black flex items-center justify-center text-white group-hover:scale-110 transition-all duration-500 shadow-sm border border-white/10">
                <Database size={22} className="transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight text-black leading-tight">Valuation and Risk APIs</h3>
              <p className="text-black/70 font-medium leading-relaxed flex-grow mb-6 text-sm">
                Plug our valuation and risk models into your own platforms through secure, versioned APIs, so your systems call the same logic your analysts trust.
              </p>
              <div className="space-y-2 relative z-10 w-full mb-4">
                <div className="text-[11px] font-bold tracking-widest text-black/40 uppercase">Key Abilities</div>
                <div className="text-[13px] font-semibold text-black/80 pb-1 border-b border-black/5">Secure API endpoints</div>
                <div className="text-[13px] font-semibold text-black/80 pb-1 border-b border-black/5">Scalable model access</div>
                <div className="text-[13px] font-semibold text-black/80">Integration-ready architecture</div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc] p-10 rounded-[2.5rem] group relative overflow-hidden transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col lg:col-span-2 h-full">
              <div className="flex flex-col md:flex-row gap-8 h-full">
                <div className="flex-1">
                  <div className="mb-8 w-14 h-14 rounded-full bg-black flex items-center justify-center text-white group-hover:scale-110 transition-all duration-500 shadow-sm border border-white/10">
                    <Cpu size={22} className="transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 tracking-tight text-black leading-tight">Fine-Tuned Financial LLMs</h3>
                  <p className="text-black/70 font-medium leading-relaxed flex-grow mb-6 text-sm">
                    Language models fine-tuned on financial documents. They read diligence files, underwriting packages and loan covenants and return structured data inside a private, isolated environment.
                  </p>
                </div>
                <div className="flex-1 flex flex-col justify-end">
                  <div className="space-y-2 relative z-10 w-full mb-4 bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-sm">
                    <div className="text-[11px] font-bold tracking-widest text-black/60 uppercase mb-3">Core Pillars</div>
                    <div className="flex items-center gap-3 pb-2 border-b border-black/10">
                      <CheckCircle2 size={16} className="text-black" />
                      <span className="text-[13px] font-semibold text-black/90">
                        <Link to="/alpha" className="underline hover:text-sapforce-accent transition-colors">
                          Private model training
                        </Link>
                      </span>
                    </div>
                    <div className="flex items-center gap-3 pb-2 border-b border-black/10 mt-2">
                      <CheckCircle2 size={16} className="text-black" />
                      <span className="text-[13px] font-semibold text-black/90">Domain-specific tuning</span>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <CheckCircle2 size={16} className="text-black" />
                      <span className="text-[13px] font-semibold text-black/90">Secure knowledge isolation</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — HOW IT WORKS SECTION (PROCESS FLOW) */}
      <section className="py-24 md:py-32 bg-white relative z-10 border-b border-black/5">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-20">
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4 inline-block">PROCESS</span>
            <h2 className="text-3xl md:text-[3.25rem] font-medium tracking-tighter text-black leading-none">
              How the AI Lab Works
            </h2>
          </motion.div>

          <div className="w-full bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc] rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-inner">
            <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-4 items-center md:items-start max-w-5xl mx-auto">
              {[
                { num: '01', title: 'Data Ingestion' },
                { num: '02', title: 'Model Training' },
                { num: '03', title: 'Agent Analysis' },
                { num: '04', title: 'Human Review' },
                { num: '05', title: 'Secure Delivery' }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center relative group w-full">
                  {/* Connecting line for desktop */}
                  {idx !== 4 && (
                    <div className="hidden md:block absolute top-6 left-[60%] w-full h-[1px] bg-black transition-colors group-hover:bg-sapforce-accent"></div>
                  )}

                  <div className="w-12 h-12 rounded-full border border-black/10 bg-black flex items-center justify-center text-sm font-black text-white relative z-10 mb-6 group-hover:border-sapforce-accent group-hover:scale-110 group-hover:bg-sapforce-accent transition-all shadow-sm">
                    {step.num}
                  </div>

                  <h4 className="text-black font-semibold text-sm tracking-tight px-2 leading-tight">
                    {step.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — DIFFERENTIATION SECTION */}
      <section className="py-24 bg-[#F7F8F9] relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4 inline-block">WHY CHOOSE THE AI LAB</span>
              <h2 className="text-3xl md:text-[3.25rem] font-medium tracking-tighter text-black leading-none mb-12">
                Not a Generic AI Tool. <br />
                <span className="text-gray-400">Purpose-Built for Financial Analysis.</span>
              </h2>

              <div className="space-y-4">
                {[
                  'Built on underwriting and valuation logic, not retrofitted from a general chatbot',
                  'Every output traceable to its source data, for a full audit trail',
                  "Focused on the analytical work that takes most of an analyst's week",
                  (
                    <span key="tile-4">
                      Runs on the same models our{' '}
                      <Link to="/analytics" className="underline hover:text-sapforce-accent transition-colors">
                        Analytics Desk
                      </Link>{' '}
                      delivers to clients
                    </span>
                  ),
                  'Private deployment and isolated client data from day one'
                ].map((item, i) => (
                  <div key={i} className="bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc] rounded-2xl p-6 flex items-center gap-5 shadow-lg hover:-translate-y-1 transition-transform">
                    <div className="w-10 h-10 rounded-full bg-black flex flex-shrink-0 items-center justify-center shadow-sm">
                      <ShieldCheck size={18} className="text-white" />
                    </div>
                    <span className="text-black font-semibold text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-full min-h-[400px] w-full rounded-[2.5rem] bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc] relative overflow-hidden shadow-xl p-12 flex flex-col justify-center items-center text-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
              <div className="w-24 h-24 rounded-full bg-black flex flex-shrink-0 items-center justify-center text-white shadow-[0_10px_40px_rgba(255,255,255,0.1)] relative z-10 mb-8 border border-white/20">
                <Cpu size={36} />
              </div>
              <h3 className="text-2xl font-bold tracking-tighter text-black mb-4 relative z-10">Human-Led, AI-Scaled</h3>
              <p className="text-black font-medium relative z-10 max-w-sm">
                Analysts set the logic and sign off; AI agents do the repetitive work at scale.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FINAL CTA SECTION */}
      <section className="py-24 md:py-32 bg-white relative z-10 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/30"></div>

        {/* Abstract subtle data mesh */}
        <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

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
                Ready to Build Intelligence <br className="hidden md:block" /><span className="text-gray-400">Into Your Financial Systems?</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
                Whether you need a custom AI agent, a fine-tuned LLM or an API integration, start with a technical discovery session. We map your data, workflow and success metrics first.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="secondary" className="w-full sm:w-auto px-8 py-4">Book a Technical Discovery Session</Button>
                </Link>
                {/* TODO(confirm: developer portal exists?): Hidden button until developer portal exists */}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};
