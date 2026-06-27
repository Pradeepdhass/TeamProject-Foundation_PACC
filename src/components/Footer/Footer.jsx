import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <>
      <nav aria-label="Site map" className="bg-black text-white/30 px-6-pct pt-14 pb-10 text-start border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          
          <div>
            <p className="text-[0.66rem] font-display font-bold tracking-[0.14em] uppercase text-white/55 mb-4">The Platform</p>
            <ul className="flex flex-col gap-2.5 list-unstyled ps-0 mb-0">
              <li><a className="text-[0.84rem] text-white/55 hover:text-white transition-colors text-decoration-none" href="#platform-overview">Overview</a></li>
              <li><a className="text-[0.84rem] text-white/55 hover:text-white transition-colors text-decoration-none" href="#solutions">Use Cases</a></li>
              <li><a className="text-[0.84rem] text-white/55 hover:text-white transition-colors text-decoration-none" href="#platform-overview">Security</a></li>
              <li><a className="text-[0.84rem] text-white/55 hover:text-white transition-colors text-decoration-none" href="#platform-overview">Integrations</a></li>
              <li><a className="text-[0.84rem] text-white/55 hover:text-white transition-colors text-decoration-none" href="#comparison">Compare</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[0.66rem] font-display font-bold tracking-[0.14em] uppercase text-white/55 mb-4">Industries</p>
            <ul className="flex flex-col gap-2.5 list-unstyled ps-0 mb-0">
              <li><a className="text-[0.84rem] text-white/55 hover:text-white transition-colors text-decoration-none" href="#solutions">Oil &amp; Gas</a></li>
              <li><a className="text-[0.84rem] text-white/55 hover:text-white transition-colors text-decoration-none" href="#solutions">EPC</a></li>
              <li><a className="text-[0.84rem] text-white/55 hover:text-white transition-colors text-decoration-none" href="#solutions">Aerospace &amp; Defense</a></li>
              <li><a className="text-[0.84rem] text-white/55 hover:text-white transition-colors text-decoration-none" href="#solutions">Power &amp; Utilities</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[0.66rem] font-display font-bold tracking-[0.14em] uppercase text-white/55 mb-4">Use Cases</p>
            <ul className="flex flex-col gap-2.5 list-unstyled ps-0 mb-0">
              <li><a className="text-[0.84rem] text-white/55 hover:text-white transition-colors text-decoration-none" href="#platform-overview">AI Compliance</a></li>
              <li><a className="text-[0.84rem] text-white/55 hover:text-white transition-colors text-decoration-none" href="#services">AI-Led Services</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[0.66rem] font-display font-bold tracking-[0.14em] uppercase text-white/55 mb-4">Company</p>
            <ul className="flex flex-col gap-2.5 list-unstyled ps-0 mb-0">
              <li><a className="text-[0.84rem] text-white/55 hover:text-white transition-colors text-decoration-none" href="#about">About</a></li>
              <li><a className="text-[0.84rem] text-white/55 hover:text-white transition-colors text-decoration-none" href="#careers">Careers</a></li>
              <li><a className="text-[0.84rem] text-white/55 hover:text-white transition-colors text-decoration-none" href="#resources">Resource Library</a></li>
              <li><a className="text-[0.84rem] text-white/55 hover:text-white transition-colors text-decoration-none" href="#stories">Customer Stories</a></li>
              <li><a className="text-[0.84rem] text-white/55 hover:text-white transition-colors text-decoration-none" href="#cta">Get a Demo</a></li>
              <li><a className="text-[0.84rem] text-white/55 hover:text-white transition-colors text-decoration-none" href="#contact">Contact</a></li>
            </ul>
          </div>

        </div>
      </nav>

      <footer className="bg-black text-white/30 border-t border-white/10 px-6-pct py-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-[0.76rem] align-items-center">
        
        <a className="hover:opacity-80 transition-opacity d-flex align-items-center text-decoration-none" href="#">
          <svg width="100" height="30" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="brightness-0 invert">
            <text x="0" y="22" fontFamily="var(--font-display)" fontSize="20" fontWeight="800" fill="var(--color-black)">payoda</text>
            <circle cx="70" cy="18" r="3" fill="var(--color-burg)" />
          </svg>
        </a>

      
        <div className="flex flex-wrap gap-6 justify-content-center">
          <a className="hover:text-white/70 transition-colors text-white/30 text-decoration-none" href="#privacy">Privacy Policy</a>
          <a className="hover:text-white/70 transition-colors text-white/30 text-decoration-none" href="#terms">Terms of Service</a>
        </div>

        <span>© 2026 Payoda Technology Inc.</span>
      </footer>
    </>
  );
}
