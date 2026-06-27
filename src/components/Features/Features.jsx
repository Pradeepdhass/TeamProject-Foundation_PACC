import React from 'react';
import './Features.css';

export default function Features() {
  const featureData = [
    {
      title: "Reads any standards stack",
      desc: "Owner codes, international standards (ASME, API, NACE, ISO), project specs, and addenda, all ingested as a project-aware corpus. Knows when an addendum overrides the parent standard.",
      icon: <i className="bi bi-book text-[1.2rem]"></i>
    },
    {
      title: "Reasons clause-by-clause",
      desc: "Parses each clause as an obligation, checking intent, thresholds, exceptions, and cross-references. Catches the negation, paraphrase, and override logic that vector similarity always misses.",
      icon: <i className="bi bi-cpu text-[1.2rem]"></i>
    },
    {
      title: "Cites the clause, every time",
      desc: "Every verdict links to its source clause and source quote. Confidence reported separately from verdict, so reviewers know when to approve, when to escalate, and when to override.",
      icon: <i className="bi bi-bookmark-check text-[1.2rem]"></i>
    },
    {
      title: "Engineering documents, not paragraphs",
      desc: "Datasheets, P&IDs, BODs, drawings, and specifications, handled as engineering objects with tag numbers, dimensions, and material specs. Not as text to be searched.",
      icon: <i className="bi bi-file-earmark-ruled text-[1.2rem]"></i>
    },
    {
      title: "Severity-classified findings",
      desc: "Critical, Major, Minor, or Observation. Every finding paired with the supporting clause, the engineering rationale, and the recommended corrective action.",
      icon: <i className="bi bi-exclamation-triangle text-[1.2rem]"></i>
    },
    {
      title: "Reviewer in command",
      desc: "Reviewers approve, override, or escalate every finding. Every decision is logged. Every override teaches the system. Compliance stays human-controlled, end-to-end.",
      icon: <i className="bi bi-person-check text-[1.2rem]"></i>
    }
  ];

  return (
    <section id="features" className="px-6-pct py-20 bg-white">

      <div className="text-center mb-12">
        <p className="text-[0.87rem] font-bold tracking-[0.12em] uppercase mb-[0.7rem] text-burg">
          What The Platform Does
        </p>
        <h2 className="font-display font-extrabold tracking-tight leading-tight text-black mb-3 text-3xl sm:text-4xl">
          Read. Reason. Cite.
        </h2>
        <p className="text-g600 text-[0.95rem] leading-[1.7] max-w-[560px] mx-auto">
          Three things compliance search can't do, and the only three that matter when your finding has to survive a PMC review.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.1rem]">
        {featureData.map((feat, index) => (
          <div key={index} className="feature-card-wrapper animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="feature-card border border-g200 rounded-[13px] p-5 sm:p-7 relative overflow-hidden group text-start bg-white h-100">
              
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-burg to-keppel opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              
              <div className="w-10 h-10 rounded-[10px] bg-burg/6 text-burg flex items-center justify-center mb-4">
                {feat.icon}
              </div>
              <h3 className="font-display font-semibold text-[0.93rem] text-black mb-[0.45rem]">
                {feat.title}
              </h3>
              
              <p className="text-[0.8rem] text-g600 leading-[1.62] mb-0">
                {feat.desc}
              </p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
