import React from 'react';
import './CTA.css';

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-cta-gradient text-center py-20 px-6-pct" id="cta">
   
      <div className="pointer-events-none absolute inset-0 bg-cta-radials"></div>
      
      <div className="relative z-10">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.8rem] font-extrabold text-white tracking-tight leading-tight mb-3 animate-fade-in">
          Try it on your standards.
        </h2>
        <p className="text-white/65 text-[0.93rem] leading-relaxed max-w-md mx-auto mb-7 animate-fade-in">
          Bring one standard. A handful of documents. We will show you reasoning, citations, and severity-classified findings on your real content, not a demo deck.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a className="inline-flex items-center gap-[0.4rem] min-h-[44px] cursor-pointer select-none bg-white text-burg hover:shadow-xl hover-translate-y-half font-display font-semibold text-[0.87rem] px-8 py-3 text-decoration-none rounded-[7px] transition-all duration-150" href="Contact">
            Talk to engineering
            <i className="bi bi-arrow-right text-[0.85rem]"></i>
          </a>
          <a className="inline-flex items-center gap-[0.4rem] min-h-[44px] cursor-pointer select-none bg-transparent text-white/80 border-[1.5px] border-white/30 hover:border-white/70 hover:text-white font-display font-bold text-[0.87rem] px-8 py-3 text-decoration-none rounded-[7px] transition-colors duration-200" href="#platform-overview">
            Explore the Platform
            <i className="bi bi-arrow-right text-[0.85rem]"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
