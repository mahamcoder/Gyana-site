import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { CalendarDays, ShieldCheck, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';

const TOPIC_MAP = {
  'modeling': 'Real Estate Financial Modeling',
  'ai-lab': 'Agentic AI and Automation (AI Lab)',
  'alpha': 'Private AI Model (Proprietary Alpha)',
  'research': 'Research and Frameworks',
};

export const Contact = () => {
  const [searchParams] = useSearchParams();
  const topicParam = searchParams.get('topic');

  const queryMandate = (topicParam && TOPIC_MAP[topicParam]) ? TOPIC_MAP[topicParam] : '';
  const [selectedMandate, setSelectedMandate] = useState(queryMandate);
  const [prevTopic, setPrevTopic] = useState(topicParam);

  if (topicParam !== prevTopic) {
    setPrevTopic(topicParam);
    setSelectedMandate(queryMandate);
  }

  const [result, setResult] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    document.title = 'Contact Gyanasarathi | Book a Modeling or AI Strategy Call';

    let descMeta = document.querySelector('meta[name="description"]');
    const prevDesc = descMeta ? descMeta.getAttribute('content') : '';
    if (descMeta) {
      descMeta.setAttribute(
        'content',
        'Share your mandate and a specialist replies within two business hours. Confidential by default, for modeling, due diligence and AI projects.'
      );
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalLink ? canonicalLink.getAttribute('href') : '';
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://gyanasarathi.com/contact');

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
    };
  }, []);

  const contactSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': 'https://gyanasarathi.com/contact#contactpage',
        'url': 'https://gyanasarathi.com/contact',
        'name': 'Contact Gyanasarathi | Book a Modeling or AI Strategy Call',
        'description':
          'To engage Gyanasarathi for financial modeling, due diligence, agentic AI or a private AI model, share your mandate through the contact form or by email. A specialist replies within two business hours, confidentiality applies from the first message, and work starts after a scoped onboarding session.',
        'isPartOf': {
          '@id': 'https://gyanasarathi.com/#website',
        },
        'about': {
          '@id': 'https://gyanasarathi.com/#organization',
        },
      },
      {
        '@type': 'Organization',
        '@id': 'https://gyanasarathi.com/#organization',
        'name': 'Gyanasarathi',
        'url': 'https://gyanasarathi.com/',
        'contactPoint': {
          '@type': 'ContactPoint',
          'contactType': 'sales',
          'email': 'contact@gyanasarathi.com',
          'areaServed': 'Worldwide',
          'availableLanguage': 'English',
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
            'name': 'Contact',
            'item': 'https://gyanasarathi.com/contact',
          },
        ],
      },
    ],
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    setIsSuccess(false);
    const formElement = event.target;
    const formData = new FormData(formElement);

    // Fallback if env variable isn't loaded properly for any reason, but env should work in Vite.
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'c07036ff-dfc4-4fd5-a37e-924e9857f4c1';
    formData.append('access_key', accessKey);

    // Enhance Web3Forms Email Details
    formData.append('subject', `New Strategy Request: ${formData.get('organization')} - ${formData.get('first_name')} ${formData.get('last_name')}`);
    formData.append('from_name', 'Gyanasarathi Platform');
    if (formData.get('email')) formData.append('replyto', formData.get('email'));

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setIsSuccess(true);
        setResult('Your strategy request has been sent successfully.');
        formElement.reset();
        setSelectedMandate('');
      } else {
        setIsSuccess(false);
        setResult('Something went wrong. Please try again.');
      }
    } catch {
      setIsSuccess(false);
      setResult('Error submitting form. Please check your connection.');
    }
  };

  return (
    <div className="w-full overflow-hidden bg-blue-50/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* HERO */}
      <section className="relative min-h-[40vh] flex flex-col justify-center px-6 pt-40 pb-24 bg-blue-50/20 overflow-hidden z-10 border-b border-black/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black/[0.04] via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-6 inline-block">START A CONVERSATION</span>
            {/* Exactly one <h1> on the page */}
            <h1 className="text-4xl md:text-[4rem] font-medium tracking-tighter text-black leading-[1.05] mb-6">
              Your Mandate Deserves a <br /> Purpose-Built Response. <br className="hidden md:block" />
              <span className="text-gray-400">Not a Generic Reply.</span>
            </h1>
            {/* TODO(confirm: two business hours response time) */}
            {/* TODO(confirm: time zone and working days: Monday to Friday, IST) */}
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              At Gyanasarathi, every inquiry goes straight to a specialist, with a substantive reply within two business hours (Monday to Friday, IST). No sales scripts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-24 md:py-32 bg-white relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* LEFT — FORM */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc] p-10 md:p-14 rounded-[2.5rem] shadow-sm">
                <h2 className="text-3xl md:text-[2.5rem] font-medium tracking-tighter text-black leading-none mb-3">
                  Book Your Strategy Call
                </h2>
                <p className="text-gray-500 font-medium mb-10">
                  Share your mandate and a specialist will reply within two business hours. Every inquiry is confidential.
                </p>

                <form className="space-y-6" onSubmit={onSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest pl-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        required
                        className="w-full bg-white border border-black/5 rounded-2xl px-5 py-4 text-black placeholder:text-gray-300 focus:outline-none focus:border-black/20 focus:shadow-sm transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest pl-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        required
                        className="w-full bg-white border border-black/5 rounded-2xl px-5 py-4 text-black placeholder:text-gray-300 focus:outline-none focus:border-black/20 focus:shadow-sm transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest pl-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-white border border-black/5 rounded-2xl px-5 py-4 text-black placeholder:text-gray-300 focus:outline-none focus:border-black/20 focus:shadow-sm transition-all"
                      placeholder="executive@firm.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest pl-1">
                      Organization or Fund Name
                    </label>
                    <input
                      type="text"
                      name="organization"
                      required
                      className="w-full bg-white border border-black/5 rounded-2xl px-5 py-4 text-black placeholder:text-gray-300 focus:outline-none focus:border-black/20 focus:shadow-sm transition-all"
                      placeholder="Your firm or institution"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest pl-1">
                      Primary Mandate (Select One)
                    </label>
                    <div className="relative">
                      <select
                        name="mandate"
                        required
                        value={selectedMandate}
                        onChange={(e) => setSelectedMandate(e.target.value)}
                        className="w-full bg-white border border-black/5 rounded-2xl px-5 py-4 text-black focus:outline-none focus:border-black/20 appearance-none cursor-pointer transition-all"
                      >
                        <option value="">Select a service area</option>
                        <option value="Real Estate Financial Modeling">Real Estate Financial Modeling</option>
                        <option value="Valuation (DCF, LBO, Comps)">Valuation (DCF, LBO, Comps)</option>
                        <option value="M&A Due Diligence">M&A Due Diligence</option>
                        <option value="Agentic AI and Automation (AI Lab)">Agentic AI and Automation (AI Lab)</option>
                        <option value="Private AI Model (Proprietary Alpha)">Private AI Model (Proprietary Alpha)</option>
                        <option value="Research and Frameworks">Research and Frameworks</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-sm">▼</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest pl-1">
                      Describe Your Current Challenge or Objective
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="w-full bg-white border border-black/5 rounded-2xl px-5 py-4 text-black placeholder:text-gray-300 focus:outline-none focus:border-black/20 focus:shadow-sm transition-all resize-none"
                      placeholder="Describe your mandate or inquiry..."
                    />
                  </div>

                  <div className="pt-2">
                    <Button type="submit" variant="secondary" className="w-full py-4 text-base relative">
                      Send My Strategy Request
                    </Button>
                  </div>
                  {result && (
                    <div className="text-center text-sm font-semibold text-gray-800 mt-4 space-y-2">
                      <div>{result}</div>
                      {isSuccess && (
                        <div>
                          <Link to="/research" className="text-black font-bold underline hover:text-black/70 transition-colors">
                            While you wait, read our frameworks
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* RIGHT — INFO */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex flex-col gap-8 lg:pt-4"
            >
              <div>
                <h2 className="text-3xl md:text-[2.5rem] font-medium tracking-tighter text-black leading-none mb-6">
                  Why Investment Teams <br /><span className="text-gray-400">Choose Gyanasarathi</span>
                </h2>
                <p className="text-lg text-gray-600 font-medium leading-relaxed">
                  To engage Gyanasarathi for financial modeling, due diligence, agentic AI or a private AI model, share your mandate through the contact form or by email. A specialist replies within two business hours, confidentiality applies from the first message, and work starts after a scoped onboarding session.
                </p>
              </div>

              {/* Info blocks */}
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc] rounded-2xl p-6 flex items-start gap-5 hover:-translate-y-0.5 transition-transform shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-black border border-black shadow-sm flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-1 tracking-tight text-base">Two-Business-Hour Response</h3>
                    <p className="text-black/70 font-medium text-sm leading-relaxed">
                      Every inquiry gets a direct reply from a specialist within two business hours. No auto-responders.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc] rounded-2xl p-6 flex items-start gap-5 hover:-translate-y-0.5 transition-transform shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-black border border-black shadow-sm flex items-center justify-center shrink-0">
                    <ShieldCheck size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-1 tracking-tight text-base">Institutional Confidentiality by Default</h3>
                    <p className="text-black/70 font-medium text-sm leading-relaxed">
                      Every inquiry is confidential from the first message, and we sign an NDA before any detailed discussion.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white via-[#92d5d8] to-[#4db9dc] rounded-2xl p-6 flex items-start gap-5 hover:-translate-y-0.5 transition-transform shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-black border border-black shadow-sm flex items-center justify-center shrink-0">
                    <CalendarDays size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-1 tracking-tight text-base">Mandate-Scoped Onboarding Session</h3>
                    <p className="text-black/70 font-medium text-sm leading-relaxed">
                      Every engagement begins with a structured session to define scope, map your mandate, and align on the framework before work starts.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact details */}
              <div className="bg-sapforce-dark rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden shadow-xl border border-white/5">
                <div className="absolute top-0 right-0 w-40 h-40 bg-sapforce-accent blur-[80px] opacity-20 pointer-events-none"></div>
                <h3 className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-6">Strategic Inquiries</h3>
                <div className="space-y-5 relative z-10">
                  {/* TODO(confirm: monitored mailbox) */}
                  <a href="mailto:contact@gyanasarathi.com" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/5 group-hover:bg-white/20 transition-colors">
                      <Mail size={16} className="text-sapforce-accent" />
                    </div>
                    <span className="text-white font-semibold group-hover:text-sapforce-accent transition-colors">contact@gyanasarathi.com</span>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/5 shrink-0">
                      <MapPin size={16} className="text-sapforce-accent" />
                    </div>
                    <span className="text-white/90 text-sm font-medium pt-1">
                      Hybrid team with hubs in India, serving clients worldwide across time zones.
                    </span>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};
