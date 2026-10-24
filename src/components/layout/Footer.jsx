import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { contactDetails } from '../../data/contact';

export const Footer = () => {
  return (
    <footer className="relative bg-sapforce-dark text-white overflow-hidden pt-32 pb-12 font-sans w-full rounded-t-[3rem] md:rounded-t-[4.5rem]">

      {/* Smooth Edge Fade from Above Section */}
      <div className="absolute top-0 left-0 w-full h-24 md:h-32 bg-gradient-to-b from-gray-100/80 via-transparent to-transparent pointer-events-none z-10"></div>

      {/* BACKGROUND GLOW */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[250%] md:w-[150%] h-[1200px] z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 15%, #ffffff 0%, #ffffff 25%, #4db9dc 45%, #0a1a1f 70%, transparent 100%)',
          transform: 'translateY(-15%)'
        }}
      ></div>

      {/* SVG Curve Line */}
      <svg className="absolute top-[25%] md:top-[30%] left-0 w-full h-[400px] md:h-[500px] pointer-events-none z-0" viewBox="0 0 1440 400" preserveAspectRatio="none">
        <path d="M-100,50 C400,350 1040,350 1540,50" stroke="rgba(255,255,255,0.25)" fill="none" strokeWidth="1" />
        <circle cx="1150" cy="180" r="2.5" fill="#ffffff" className="hidden md:block shadow-[0_0_8px_rgba(255,255,255,1)]" />
      </svg>

      {/* PRE-FOOTER CTA */}
      <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center mb-32 mt-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f1f5f9] text-[#0f172a] text-[9px] font-bold uppercase tracking-widest mb-10 shadow-sm">
          <span>Get</span>
          <span className="opacity-60 text-[10px]">✦</span>
          <span>Started</span>
        </div>

        <h2 className="text-5xl md:text-[5.5rem] font-bold tracking-tighter text-black mb-6 leading-[0.95]">
          Model the Deal.<br className="hidden md:block" /> Automate the Analysis.
        </h2>

        <p className="text-gray-700 font-medium text-lg md:text-xl max-w-xl mx-auto mb-10 leading-snug">
          Underwriting models and<br className="hidden md:block" /> agentic AI for real estate and capital markets.
        </p>

        <Link to="/contact">
          <button className="px-8 py-4 mt-2 rounded-full bg-[#0F161E] text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black transition-all shadow-xl inline-flex items-center justify-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></span>
            Book a Strategy Call
          </button>
        </Link>
      </div>

      {/* FOOTER MAIN CONTENT */}
      <div className="flex flex-col lg:flex-row justify-between container mx-auto px-6 lg:px-12 max-w-[1400px] relative z-10 w-full">

        {/* Left: Logo */}
        <div className="mb-16 lg:mb-0 lg:w-1/4">
          <Link to="/" className="inline-block">
            <img
              src="/logo-white.png"
              alt="Gyanasarathi"
              width="1280"
              height="234"
              className="h-10 md:h-12 w-auto object-contain"
            />
            <p className="text-sm text-gray-400 font-medium mt-3 max-w-[280px] leading-relaxed">
              Gyanasarathi is an India-based financial modeling and agentic AI firm.
            </p>
          </Link>
        </div>

        {/* Right: Links & Locs Wrapper */}
        <div className="flex flex-col lg:w-3/4 lg:pl-10">

          {/* Links Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

            {/* Col 1 */}
            <div className="flex flex-col gap-6">
              <h4 className="text-white text-base md:text-lg font-bold tracking-wide">Navigation</h4>
              <ul className="flex flex-col gap-3.5 text-sm md:text-base font-medium text-[#fdfdfd] tracking-wide">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Col 2 */}
            <div className="flex flex-col gap-6">
              <h4 className="text-white text-base md:text-lg font-bold tracking-wide">Solutions</h4>
              <ul className="flex flex-col gap-3.5 text-sm md:text-base font-medium text-[#fdfdfd] tracking-wide">
                <li><Link to="/analytics" className="hover:text-white transition-colors">Analytics Desk</Link></li>
                <li><Link to="/ai-lab" className="hover:text-white transition-colors">AI Lab</Link></li>
                <li><Link to="/alpha" className="hover:text-white transition-colors">Proprietary Alpha</Link></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="flex flex-col gap-6">
              <h4 className="text-white text-base md:text-lg font-bold tracking-wide">Insights</h4>
              <ul className="flex flex-col gap-3.5 text-sm md:text-base font-medium text-[#fdfdfd] tracking-wide">
                <li><Link to="/research" className="hover:text-white transition-colors">Research Vault</Link></li>
              </ul>
            </div>

          </div>

          {/* Contacts & Offices Section */}
          <div className="mt-12 md:mt-16 pt-10 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

              {/* Col 1: Direct Contact & Social */}
              <div className="flex flex-col gap-4">
                <h4 className="text-white text-xs font-bold uppercase tracking-wider">
                  Contact & Social
                </h4>
                <div className="flex flex-col gap-2.5 text-sm">
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="text-sapforce-accent font-medium hover:text-white flex items-center gap-2.5 transition-colors"
                  >
                    <Mail size={15} className="shrink-0" />
                    <span>{contactDetails.email}</span>
                  </a>
                  <a
                    href={`tel:${contactDetails.phones.us.tel}`}
                    className="text-gray-300 font-medium hover:text-white flex items-center gap-2.5 transition-colors"
                  >
                    <Phone size={15} className="text-sapforce-accent shrink-0" />
                    <span>US: {contactDetails.phones.us.display}</span>
                  </a>
                  <a
                    href={`tel:${contactDetails.phones.india.tel}`}
                    className="text-gray-300 font-medium hover:text-white flex items-center gap-2.5 transition-colors"
                  >
                    <Phone size={15} className="text-sapforce-accent shrink-0" />
                    <span>India: {contactDetails.phones.india.display}</span>
                  </a>
                  <a
                    href={contactDetails.social?.linkedin || "https://www.linkedin.com/in/gyanasarathi/"}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-300 font-medium hover:text-white flex items-center gap-2.5 transition-colors pt-1 group"
                  >
                    <svg className="w-3.5 h-3.5 fill-sapforce-accent group-hover:fill-white transition-colors shrink-0" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span className="text-[11px] font-bold uppercase tracking-wider">LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Col 2: India Office */}
              <div className="flex flex-col gap-4">
                <h4 className="text-white text-xs font-bold uppercase tracking-wider">
                  India Office
                </h4>
                <div className="flex items-start gap-2.5 text-sm text-gray-300 leading-relaxed">
                  <MapPin size={16} className="text-sapforce-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">{contactDetails.addresses.india.street}</p>
                    <p>{contactDetails.addresses.india.city}, {contactDetails.addresses.india.region} {contactDetails.addresses.india.postalCode}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{contactDetails.addresses.india.country}</p>
                  </div>
                </div>
              </div>

              {/* Col 3: US Office */}
              <div className="flex flex-col gap-4">
                <h4 className="text-white text-xs font-bold uppercase tracking-wider">
                  US Office
                </h4>
                <div className="flex items-start gap-2.5 text-sm text-gray-300 leading-relaxed">
                  <MapPin size={16} className="text-sapforce-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">{contactDetails.addresses.us.street}</p>
                    <p>{contactDetails.addresses.us.city}, {contactDetails.addresses.us.region} {contactDetails.addresses.us.postalCode}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{contactDetails.addresses.us.country}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* FOOTER BOTTOM DIVIDER */}
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] relative z-10 w-full mt-24">
        <div className="w-full h-[1px] bg-gradient-to-r from-blue-900/30 via-cyan-400/30 to-sapforce-dark border-none"></div>
      </div>
    </footer>
  );
};

