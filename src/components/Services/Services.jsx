import React from 'react';
import './Services.css';

export default function Services() {
  const services = [
    {
      title: "Legacy Modernization",
      desc: "Transform legacy infrastructure and outdated code bases into high-performing, maintainable platforms. Our AI agents reason through complex legacy logic, converting applications with structured safety constraints.",
      icon: <i className="bi bi-arrow-repeat text-[1.4rem]"></i>
    },
    {
      title: "Data Modernization",
      desc: "Convert massive volumes of unstructured engineering PDFs, drawing specs, P&IDs, and manuals into structured, queryable data schemas. Fuel your enterprise compliance engine with ready, clean data.",
      icon: <i className="bi bi-database-check text-[1.4rem]"></i>
    },
    {
      title: "AI-Led Product Engineering",
      desc: "Build next-generation enterprise applications embedded with autonomous agents, compliance reasoning gates, and adaptive intelligence, boosting user throughput by 10x.",
      icon: <i className="bi bi-cpu-fill text-[1.4rem]"></i>
    }
  ];

  return (
    <section className="bg-g100 px-6-pct py-20 border-t border-b border-g200" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[0.87rem] font-bold tracking-[0.12em] uppercase mb-[0.7rem] text-burg">
            Enterprise Services
          </p>
          <h2 className="font-display font-extrabold tracking-tight text-black mb-3 text-3xl sm:text-4xl">
            Scale AI Innovation Across the Enterprise
          </h2>
          <p className="text-g600 text-[0.95rem] leading-[1.7] max-w-[560px] mx-auto">
            Deep domain expertise matched with agentic intelligence to modernize your engineering and business systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((svc, idx) => (
            <div key={idx} className="bg-white border border-g200 rounded-[12px] p-5 sm:p-7 shadow-hover text-start h-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-[10px] bg-burg/6 text-burg flex items-center justify-center mb-4">
                  {svc.icon}
                </div>
                <h3 className="font-display font-bold text-[1.1rem] text-black mb-2">
                  {svc.title}
                </h3>
                <p className="text-[0.82rem] text-g600 leading-[1.65] mb-0">
                  {svc.desc}
                </p>
              </div>
              <div className="pt-4">
                <a className="text-[0.82rem] font-display font-bold text-burg hover:underline text-decoration-none" href="#cta">
                  Explore Services →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
