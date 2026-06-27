import React from 'react';
import './Comparison.css';

export default function Comparison() {
  const comparisonRows = [
    { capability: 'Real-time monitoring', platform: '✓', legacy: '✗' },
    { capability: 'AI document review', platform: '✓', legacy: '✗' },
    { capability: 'Automated NCR generation', platform: '✓', legacy: '✗' },
    { capability: 'Multi-standard engine', platform: '✓', legacy: 'Partial' },
    { capability: 'Decision-level audit trail', platform: '✓', legacy: 'Partial' },
    { capability: 'Human-in-the-loop gates', platform: '✓', legacy: '✗' },
    { capability: 'On-premise deployment', platform: '✓', legacy: '✗' },
    { capability: 'Cross-vertical platform', platform: '✓', legacy: '✗' }
  ];

  return (
    <section className="bg-prussian px-6-pct py-20 text-start" id="comparison">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-[4.5rem] items-center">
        
        <div>
          <p className="text-[0.87rem] font-bold tracking-[0.12em] uppercase mb-[0.7rem] text-keppel">
            Side by Side
          </p>
          <h2 className="font-display font-extrabold tracking-tight leading-tight text-white mb-3 text-3xl sm:text-4xl">
            Where similarity engines fail. The Platform reasons.
          </h2>
          <p className="text-white/50 text-[0.95rem] leading-[1.7] mb-6">
            Generic AI looks plausible. Reads paragraphs. Misses thresholds and negation. The Platform reasons clause-by-clause and cites the source every time.
          </p>

          <div className="flex flex-col gap-[0.85rem]">
       
            <div className="flex gap-[0.9rem] items-start p-4 rounded-[11px] border border-white/7 bg-white/3 hover:bg-white/6 hover:border-burg/35 transition-colors duration-200 cursor-default">
              <div className="w-9 h-9 rounded-[9px] bg-burg/20 text-keppel flex items-center justify-center flex-shrink-0">
                <i className="bi bi-diagram-3 text-[1.1rem]"></i>
              </div>
              <div>
                <div className="font-display font-semibold text-[0.86rem] text-white mb-[0.22rem]">
                  Reasoning, not retrieval
                </div>
                <div className="text-[0.76rem] text-white/40 leading-snug">
                  Clause-level obligation parsing. Catches the negation, thresholds, and paraphrase that vector similarity misses.
                </div>
              </div>
            </div>

            <div className="flex gap-[0.9rem] items-start p-4 rounded-[11px] border border-white/7 bg-white/3 hover:bg-white/6 hover:border-burg/35 transition-colors duration-200 cursor-default">
              <div className="w-9 h-9 rounded-[9px] bg-burg/20 text-keppel flex items-center justify-center flex-shrink-0">
                <i className="bi bi-stack text-[1.1rem]"></i>
              </div>
              <div>
                <div className="font-display font-semibold text-[0.86rem] text-white mb-[0.22rem]">
                  Standards-aware ingestion
                </div>
                <div className="text-[0.76rem] text-white/40 leading-snug">
                  Owner codes, international standards, project specs, and addenda, held together as a project-aware corpus, not a search index.
                </div>
              </div>
            </div>

            <div className="flex gap-[0.9rem] items-start p-4 rounded-[11px] border border-white/7 bg-white/3 hover:bg-white/6 hover:border-burg/35 transition-colors duration-200 cursor-default">
              <div className="w-9 h-9 rounded-[9px] bg-burg/20 text-keppel flex items-center justify-center flex-shrink-0">
                <i className="bi bi-quote text-[1.1rem]"></i>
              </div>
              <div>
                <div className="font-display font-semibold text-[0.86rem] text-white mb-[0.22rem]">
                  Citation-first output
                </div>
                <div className="text-[0.76rem] text-white/40 leading-snug">
                  Every finding ships with its source clause and source quote. Confidence reported separately from verdict. Defensible to PMC, auditor, and regulator.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-fade-in">
          <div className="bg-white/4 border border-white/8 rounded-[13px] overflow-hidden">
            
            <div className="grid grid-cols-[2fr_1fr_1fr] px-4 py-3 bg-white/5 border-b border-white/5 text-[0.66rem] font-display font-bold uppercase tracking-[0.05em] text-white/35">
              <span>Capability</span>
              <span className="text-center">The Platform</span>
              <span className="text-center">Legacy / Manual</span>
            </div>

            {comparisonRows.map((row, idx) => (
              <div 
                key={idx} 
                className={`grid grid-cols-[2fr_1fr_1fr] px-4 py-[0.75rem] text-[0.74rem] items-center transition-colors duration-150 hover:bg-white/5 ${
                  idx !== comparisonRows.length - 1 ? 'border-b border-white/5' : ''
                }`}
              >
                <span className="text-white/65">{row.capability}</span>
                <span className="text-center font-display font-extrabold text-keppel text-[1rem]">{row.platform}</span>
                <span className={`text-center font-medium ${
                  row.legacy === '✗' ? 'text-white/20' : 'text-white/45'
                }`}>
                  {row.legacy}
                </span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
