import React, { useState } from 'react';
import './Platform.css';

export default function Platform() {
  const [selectedLLM, setSelectedLLM] = useState('GPT-4o');
  const [isDeployed, setIsDeployed] = useState(false);

  return (
    <div id="platform-overview">
  
      <section className="px-6-pct py-20 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
      
          <div className="text-start">
            <p className="text-[0.87rem] font-bold tracking-[0.12em] uppercase mb-[0.7rem] text-burg">
              A different category of AI
            </p>
            <h2 className="font-display font-extrabold tracking-tight leading-tight text-black mb-4 text-3xl sm:text-4xl">
              Reads like a senior engineer. Scales like a platform.
            </h2>
            <p className="text-g600 text-[0.95rem] leading-[1.75] mb-8">
              Senior engineers don't search documents. They reason about them. The Platform applies that judgment at scale. Reads like an expert. Weighs addenda like a project lead. Cites every verdict like an auditor will demand.
            </p>
            <a className="inline-flex items-center gap-2 border border-black/15 hover:border-black/30 text-g800 font-display font-bold text-[0.88rem] px-6 py-3 rounded-[10px] text-decoration-none transition-colors min-h-[44px]" href="#how-it-works">
              See platform architecture →
            </a>
          </div>


          <div className="animate-fade-in">
            <div className="bg-g100 border border-g200 rounded-[14px] overflow-hidden shadow-premium">
           
              <div className="flex items-center justify-between bg-g50 px-4 py-3 border-b border-g200">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                  </div>
                  <span className="text-[0.72rem] text-g400 font-display font-semibold">Agent Builder · ASME Drawing Compliance</span>
                </div>
              </div>

              <div className="p-3 flex flex-col gap-2.5 text-start bg-[#fafafa]">
                
           
                <div className="flex items-center justify-between px-1">
                  <span className="text-[0.6rem] font-display font-bold uppercase tracking-[0.1em] text-g400">Configuration</span>
                  <span className={`flex items-center gap-1.5 text-[0.62rem] font-display font-semibold px-2 py-0.5 rounded-full ${
                    isDeployed 
                      ? 'text-green-700 bg-green-500/10' 
                      : 'text-burg bg-burg/5'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${isDeployed ? 'bg-green-500' : 'bg-burg animate-pulse'}`}></span>
                    {isDeployed ? 'Active & Deployed' : 'Changes Staged'}
                  </span>
                </div>

        
                <div className="bg-white border border-g100 rounded-[8px] p-2.5">
                  <div className="text-[0.58rem] font-bold uppercase tracking-[0.09em] text-g400 mb-1.5">LLM Engine</div>
                  <div className="flex gap-1.5">
                    {['GPT-4o', 'Claude 3.5', 'Gemini'].map((engine) => (
                      <span 
                        key={engine}
                        className={`text-[0.62rem] font-display font-semibold px-2 py-0.5 rounded-[5px] cursor-pointer transition-colors ${
                          selectedLLM === engine 
                            ? 'bg-burg text-white' 
                            : 'bg-g100 text-g500 hover:bg-g200'
                        }`}
                        onClick={() => setSelectedLLM(engine)}
                      >
                        {engine}
                      </span>
                    ))}
                  </div>
                </div>

       
                <div className="bg-white border border-g100 rounded-[8px] p-2.5">
                  <div className="text-[0.58rem] font-bold uppercase tracking-[0.09em] text-g400 mb-1">Persona</div>
                  <p className="text-[0.64rem] text-g700 leading-snug mb-0 font-medium">Senior ASME/API Compliance Engineer with P&amp;ID expertise</p>
                </div>

              
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white border border-g100 rounded-[8px] p-2.5">
                    <div className="text-[0.58rem] font-bold uppercase tracking-[0.09em] text-g400 mb-1.5">Knowledge Sources</div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        <span className="text-[0.6rem] text-g700 font-medium">📐 ASME B31.3</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        <span className="text-[0.6rem] text-g700 font-medium">🔩 API 650</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-g300"></span>
                        <span className="text-[0.6rem] text-g400 font-medium">ISO 9001</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-g100 rounded-[8px] p-2.5">
                    <div className="text-[0.58rem] font-bold uppercase tracking-[0.09em] text-g400 mb-1.5">Tools &amp; MCPs</div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-denim"></span>
                        <span className="text-[0.6rem] text-g700 font-medium">📁 Drawing Vault</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-denim"></span>
                        <span className="text-[0.6rem] text-g700 font-medium">📋 Spec Library</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-g300"></span>
                        <span className="text-[0.6rem] text-g400 font-medium">Aconex</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white border border-g100 rounded-[8px] p-2.5">
                    <div className="text-[0.58rem] font-bold uppercase tracking-[0.09em] text-g400 mb-1.5">Policies</div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-warning"></span>
                        <span className="text-[0.6rem] text-g700 font-medium">🛡️ Audit All</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-warning"></span>
                        <span className="text-[0.6rem] text-g700 font-medium">Human Gate</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-g100 rounded-[8px] p-2.5">
                    <div className="text-[0.58rem] font-bold uppercase tracking-[0.09em] text-g400 mb-1.5">Memory Types</div>
                    <div className="flex flex-wrap gap-1">
                      <span className="text-[0.58rem] font-display font-semibold px-1.5 py-0.5 rounded-[4px] bg-keppel/15 text-keppel">NCR History</span>
                      <span className="text-[0.58rem] font-display font-semibold px-1.5 py-0.5 rounded-[4px] bg-keppel/15 text-keppel">Audit Log</span>
                      <span className="text-[0.58rem] font-display font-semibold px-1.5 py-0.5 rounded-[4px] bg-keppel/15 text-keppel font-medium">Standards Cache</span>
                    </div>
                  </div>
                </div>

          
                <div className="bg-white border border-g100 rounded-[8px] p-2.5 flex flex-col gap-1.5">
                  <div className="text-[0.58rem] font-bold uppercase tracking-[0.09em] text-g400 mb-0.5">Agent Preview ({selectedLLM})</div>
                  <div className="align-self-end bg-burg/8 rounded-[7px] px-2.5 py-1.5 max-w-[85%]">
                    <p className="text-[0.63rem] text-g800 leading-snug mb-0">Check drawing PID-2204-Rev3 against ASME B31.3 pressure ratings.</p>
                  </div>
                  <div className="align-self-start bg-g100 rounded-[7px] px-2.5 py-1.5 max-w-[90%]">
                    <p className="text-[0.63rem] text-g700 leading-snug mb-0">
                      Reviewed 47 clauses. 3 non-conformances flagged: nozzle spacing (§304.3.2), weld class (§328.5), insulation spec (§310). NCR report attached.
                    </p>
                  </div>
                </div>

              
                <div className="flex items-center justify-between pt-0.5">
                  <span className="text-[0.6rem] text-g400">8 building blocks configured · Human review gate active</span>
                  <button 
                    className={`text-[0.64rem] font-display font-bold px-3 py-1.5 rounded-[6px] border-0 text-white transition-colors ${
                      isDeployed ? 'bg-green-600 hover:bg-green-700' : 'bg-burg hover:bg-sang'
                    }`}
                    onClick={() => setIsDeployed(!isDeployed)}
                  >
                    {isDeployed ? 'Deployed ✓' : 'Deploy Agent →'}
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      
      <section id="how-it-works" className="bg-g50 px-6-pct py-20 border-t border-g200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="text-start">
            <p className="text-[0.87rem] font-bold tracking-[0.12em] uppercase mb-[0.7rem] text-burg">
              How It Works
            </p>
            <h2 className="font-display font-extrabold tracking-tight leading-tight text-black mb-4 text-3xl sm:text-4xl">
              Six steps. Senior-engineer logic. Audit-ready output.
            </h2>
            <p className="text-g600 text-[0.95rem] leading-[1.75] mb-8">
              Ingest → Index → Retrieve → Reason → Classify → Report. The walk a senior engineer makes, automated end-to-end, with reviewer gates wherever you want them.
            </p>
            <a className="inline-flex items-center gap-2 border border-black/15 hover:border-black/30 text-g800 font-display font-bold text-[0.88rem] px-6 py-3 text-decoration-none rounded-[10px] transition-colors min-h-[44px]" href="#cta">
              See Full Platform →
            </a>
          </div>

      
          <div>
            <div className="bg-g100 border border-g200 rounded-[14px] overflow-hidden shadow-premium">
              
              <div className="flex items-center gap-2 px-4 py-3 border-b border-g200 bg-g50 justify-content-start">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                </div>
                <span className="text-[0.72rem] text-g400 font-display font-medium">Engineering Drawing Review · Running</span>
              </div>

              <div className="p-4 text-start bg-white">
                <div className="flex items-center justify-between mb-3 px-0.5">
                  <span className="flex items-center gap-1.5 text-[0.62rem] font-display font-semibold text-green-700 bg-green-500/10 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>Live
                  </span>
                  <span className="text-[0.6rem] text-g400 font-display font-medium">Progress, Step 3 of 5 · Manual equivalent: 4 to 40 hours per document</span>
                </div>

                <div className="flex flex-col gap-0">
             
                  <div>
                    <div className="flex items-center gap-3 p-3 rounded-[9px] bg-green-500/4">
                      <div className="w-8 h-8 rounded-[8px] bg-g100 text-g700 flex items-center justify-center flex-shrink-0">
                        <i className="bi bi-download text-[1rem]"></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-g800 text-[0.74rem] font-display font-semibold">Intake Agent</div>
                        <div className="text-g400 text-[0.62rem] leading-snug">Document ingested, classified · ASME B31.3</div>
                      </div>
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        <span className="text-[0.6rem] font-display font-bold px-2 py-0.5 rounded-full bg-green-500/10 text-green-700">✓ Done</span>
                      </div>
                    </div>
                    <div className="ml-7 w-px h-3 bg-g200"></div>
                  </div>

                 
                  <div>
                    <div className="flex items-center gap-3 p-3 rounded-[9px] bg-green-500/4">
                      <div className="w-8 h-8 rounded-[8px] bg-g100 text-g700 flex items-center justify-center flex-shrink-0">
                        <i className="bi bi-journals text-[1rem]"></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-g800 text-[0.74rem] font-display font-semibold">Standards Lookup Agent</div>
                        <div className="text-g400 text-[0.62rem] leading-snug">47 applicable clauses mapped</div>
                      </div>
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        <span className="text-[0.6rem] font-display font-bold px-2 py-0.5 rounded-full bg-green-500/10 text-green-700">✓ Done</span>
                      </div>
                    </div>
                    <div className="ml-7 w-px h-3 bg-g200"></div>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 p-3 rounded-[9px] bg-denim/5 border border-denim/20">
                      <div className="w-8 h-8 rounded-[8px] bg-g100 text-g700 flex items-center justify-center flex-shrink-0">
                        <i className="bi bi-search-heart text-[1rem]"></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-g800 text-[0.74rem] font-display font-semibold">Compliance Check Agent</div>
                        <div className="text-g400 text-[0.62rem] leading-snug">Gap analysis running against mapped clauses</div>
                      </div>
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-denim animate-pulse"></span>
                        <span className="text-[0.6rem] font-display font-bold px-2 py-0.5 rounded-full bg-denim/10 text-denim">● Running</span>
                      </div>
                    </div>
                    <div className="ml-7 w-px h-3 bg-g200"></div>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 p-3 rounded-[9px] bg-white">
                      <div className="w-8 h-8 rounded-[8px] bg-g100 text-g700 flex items-center justify-center flex-shrink-0">
                        <i className="bi bi-person-badge text-[1rem]"></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-g800 text-[0.74rem] font-display font-semibold">Human Review Gate</div>
                        <div className="text-g400 text-[0.62rem] leading-snug">Expert validates flagged findings</div>
                      </div>
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-g300"></span>
                        <span className="text-[0.6rem] font-display font-bold px-2 py-0.5 rounded-full bg-g100 text-g400 font-medium">Queued</span>
                      </div>
                    </div>
                    <div className="ml-7 w-px h-3 bg-g200"></div>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 p-3 rounded-[9px] bg-white">
                      <div className="w-8 h-8 rounded-[8px] bg-g100 text-g700 flex items-center justify-center flex-shrink-0">
                        <i className="bi bi-bar-chart-line text-[1rem]"></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-g800 text-[0.74rem] font-display font-semibold">Audit Report Agent</div>
                        <div className="text-g400 text-[0.62rem] leading-snug">Full NCR report with citations</div>
                      </div>
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-g300"></span>
                        <span className="text-[0.6rem] font-display font-bold px-2 py-0.5 rounded-full bg-g100 text-g400 font-medium">Queued</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
