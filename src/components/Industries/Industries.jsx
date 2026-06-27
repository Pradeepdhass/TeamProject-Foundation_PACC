import React, { useState } from 'react';
import './Industries.css';

export default function Industries() {
  const [activeTab, setActiveTab] = useState('oil-gas');

  const industriesData = {
    'oil-gas': {
      subHeader: 'Oil & Gas / Petrochemical',
      heading: 'The densest standards stack in industry. Read, indexed, reasoned.',
      desc: 'Upstream, midstream, downstream, LNG, refining, and petrochemical operators face owner specifications layered over ASME, API, NACE, and ISO. The Platform reads it all and reasons across project addenda that change clause-by-clause meaning. Built for the operator, EPC, and PMC review chain.',
      metrics: [
        { value: '70-80%', label: 'Cycle time cut' },
        { value: '10×', label: 'Reviewer throughput' },
        { value: '60K+', label: 'Docs per engagement' }
      ],
      checklist: [
        'Standards stack: ASME, API, NACE, ISO 15156, owner specs & addenda',
        'Datasheets, P&IDs, BODs, SPPs, handled as engineering objects',
        'Findings defensible to owner PMC, auditor, and regulator'
      ],
      exploreLink: '#oil-gas'
    },
    'epc': {
      subHeader: 'EPC & Heavy Construction',
      heading: 'Drawing review compressed from months to hours.',
      desc: 'EPC contractors review thousands of datasheets, P&IDs, BODs, and SPPs against owner standards on tight schedules. The Platform compresses review cycle time, frees senior engineers from lookup, and produces audit-ready citations PMC teams accept on first pass.',
      metrics: [
        { value: 'Months → hrs', label: 'Drawing review compressed' },
        { value: 'Every', label: 'Finding cited' },
        { value: '1', label: 'Platform, all docs' }
      ],
      checklist: [
        'Project-aware corpus with addendum override hierarchy enforced automatically',
        'Datasheets, P&IDs, BODs, drawings, specs all on one platform',
        'Cited Excel & PDF reports defensible to PMC review'
      ],
      exploreLink: '#epc'
    },
    'aerospace': {
      subHeader: 'Aerospace & Defense',
      heading: 'Traceability that survives DCMA, FAA, and prime flowdown.',
      desc: 'Aerospace and defense programs run on AS9100, MIL-STD, DO-178, and prime-contractor specifications, with traceability mandates that make every clause citation a deliverable. The Platform produces the audit trail that holds up to regulator and prime scrutiny.',
      metrics: [
        { value: 'Clause', label: 'Level traceability' },
        { value: 'Multi-', label: 'tenant secure' },
        { value: 'SSO', label: 'Enterprise IdP' }
      ],
      checklist: [
        'Standards stack: AS9100, MIL-STD, DO-178, prime-flowdown specs',
        'Severity-classified findings with engineering rationale & remediation',
        'RBAC + tenant isolation for ITAR & controlled-program work'
      ],
      exploreLink: '#aerospace'
    },
    'power': {
      subHeader: 'Power Generation & Utilities',
      heading: 'From nuclear to renewables. Continuous standards review.',
      desc: 'From nuclear to renewables to grid modernization, utilities navigate IEEE, IEC, NERC, and regulator-specific standards across decades-long asset lifecycles. The Platform turns standards review into a continuous capability, not a project-end scramble.',
      metrics: [
        { value: 'Lifecycle', label: 'Standards tracking' },
        { value: 'Audit', label: 'Defensible trail' },
        { value: 'RBAC', label: 'Multi-tenant' }
      ],
      checklist: [
        'Standards stack: IEEE, IEC, NERC, FERC, owner-specific specs',
        'Continuous reasoning across asset lifecycle, not project-end batch',
        'Reviewer approve / override / escalate, with every decision logged'
      ],
      exploreLink: '#power'
    }
  };

  const activeData = industriesData[activeTab];

  return (
    <section className="px-6-pct py-20 bg-white" id="solutions">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-[4.5rem] items-center">
        
        {/* Left selector */}
        <div className="text-start">
          <p className="text-[0.87rem] font-bold tracking-[0.12em] uppercase mb-[0.7rem] text-burg">
            Industries
          </p>
          <h2 className="font-display font-extrabold tracking-tight leading-tight text-black mb-3 text-3xl sm:text-4xl">
            One platform. Any standards stack.
          </h2>
          <p className="text-g600 text-[0.95rem] leading-[1.7] mb-6">
            Same reasoning engine. Different standards stack. The Platform enters new industries by ingesting their standards, then reasoning clause-by-clause against the deliverables.
          </p>
          
          <div className="flex flex-col gap-[0.35rem]">
            <button 
              className={`flex items-center gap-2.5 text-left px-4 py-[0.8rem] rounded-[9px] font-display font-bold text-[0.83rem] border transition-all duration-200 min-h-[44px] ${
                activeTab === 'oil-gas' 
                  ? 'bg-white border-burg text-burg shadow-sm' 
                  : 'bg-transparent border-transparent text-g600 hover:text-black hover:bg-g100'
              }`}
              onClick={() => setActiveTab('oil-gas')}
            >
              <i className="bi bi-droplet-half text-[1.05rem]"></i> Oil &amp; Gas / Petrochemical
            </button>
            
            <button 
              className={`flex items-center gap-2.5 text-left px-4 py-[0.8rem] rounded-[9px] font-display font-bold text-[0.83rem] border transition-all duration-200 min-h-[44px] ${
                activeTab === 'epc' 
                  ? 'bg-white border-burg text-burg shadow-sm' 
                  : 'bg-transparent border-transparent text-g600 hover:text-black hover:bg-g100'
              }`}
              onClick={() => setActiveTab('epc')}
            >
              <i className="bi bi-building text-[1.05rem]"></i> EPC &amp; Heavy Construction
            </button>
            
            <button 
              className={`flex items-center gap-2.5 text-left px-4 py-[0.8rem] rounded-[9px] font-display font-bold text-[0.83rem] border transition-all duration-200 min-h-[44px] ${
                activeTab === 'aerospace' 
                  ? 'bg-white border-burg text-burg shadow-sm' 
                  : 'bg-transparent border-transparent text-g600 hover:text-black hover:bg-g100'
              }`}
              onClick={() => setActiveTab('aerospace')}
            >
              <i className="bi bi-airplane text-[1.05rem]"></i> Aerospace &amp; Defense
            </button>
            
            <button 
              className={`flex items-center gap-2.5 text-left px-4 py-[0.8rem] rounded-[9px] font-display font-bold text-[0.83rem] border transition-all duration-200 min-h-[44px] ${
                activeTab === 'power' 
                  ? 'bg-white border-burg text-burg shadow-sm' 
                  : 'bg-transparent border-transparent text-g600 hover:text-black hover:bg-g100'
              }`}
              onClick={() => setActiveTab('power')}
            >
              <i className="bi bi-lightning-charge text-[1.05rem]"></i> Power &amp; Utilities
            </button>
          </div>
        </div>

        <div className="animate-fade-in" key={activeTab}>
          <div className="bg-white border border-g200 rounded-[15px] p-5 sm:p-7 shadow-premium text-start">
            <p className="text-[0.86rem] font-bold tracking-[0.1em] uppercase text-keppel mb-3">
              {activeData.subHeader}
            </p>
            <h3 className="font-display font-semibold tracking-tight text-black mb-3 text-2xl sm:text-[1.35rem]">
              {activeData.heading}
            </h3>
            <p className="text-g600 text-[0.85rem] leading-[1.68] mb-4">
              {activeData.desc}
            </p>

            <div className="flex gap-[0.65rem] mb-4 flex-wrap flex-md-nowrap">
              {activeData.metrics.map((metric, idx) => (
                <div key={idx} className="flex-fill bg-g100 border border-g200 rounded-[9px] px-[0.8rem] py-[0.55rem] text-center min-w-[120px]">
                  <div className="font-display font-extrabold text-burg text-[1.4rem] leading-none">
                    {metric.value}
                  </div>
                  <div className="text-[0.6rem] text-g400 mt-[0.18rem] font-medium uppercase tracking-wider">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-[0.38rem] mb-5">
              {activeData.checklist.map((item, idx) => (
                <div key={idx} className="flex items-center gap-[0.6rem] text-[0.78rem] font-display font-semibold text-g800">
                  <span className="w-[17px] h-[17px] rounded-full bg-keppel/10 text-keppel flex items-center justify-center text-[0.58rem] flex-shrink-0">
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <a className="text-[0.85rem] font-display font-bold text-burg hover:underline text-decoration-none d-inline-flex align-items-center gap-1" href={activeData.exploreLink}>
              Explore {activeData.subHeader} →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
