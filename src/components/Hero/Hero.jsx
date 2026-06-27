import React from 'react';
import './Hero.css';


export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6-pct pt-10 lg:pt-14 pb-16 overflow-hidden hero-section">
    
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-0 bg-radial-theme"></div>
      <div className="pointer-events-none absolute inset-0 bg-grid-theme"></div>
      
      <div className="relative z-10 flex flex-col items-center w-full">
        
        <h1 className="hero-title font-display animate-fade-up"
          style={{ animationDelay: '0.1s' }}
        >
          Set the Pace.<br />
          <em className="not-italic text-burg">Win at the Speed of AI.</em>
        </h1>
        
        <p 
          className="text-g600 max-w-[920px] leading-[1.6] mb-6 sm:mb-9 text-[clamp(0.9rem,0.65rem+0.6vw,1.25rem)] text-balance animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          Transforming Enterprise Functions through Agentic AI and Adaptive Intelligence.
        </p>
        
        <div 
          className="flex flex-wrap gap-3 justify-center animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          <a className="inline-flex items-center gap-[0.4rem] min-h-[44px] cursor-pointer select-none bg-burg text-white hover:bg-sang font-display font-bold text-[0.85rem] px-7 py-3 rounded-[7px] text-decoration-none transition-colors duration-200" href="#cta">
            Talk to Us
            <i className="bi bi-arrow-right"></i>
          </a>
          <a className="inline-flex items-center gap-[0.4rem] min-h-[44px] cursor-pointer select-none bg-transparent text-g800 border border-black/15 hover:border-burg hover:text-burg font-display font-semibold text-[0.85rem] px-7 py-3 text-decoration-none rounded-[7px] transition-colors duration-200" href="#platform-overview">
            See how it works
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>

        <div 
          className="mt-14 w-full max-w-[1020px] xl:max-w-[1140px] animate-fade-up"
          style={{ animationDelay: '0.45s' }}
        >
          <div className="origin-top scale-wrapper">
            <div className="bg-white border border-g200 rounded-2xl shadow-premium overflow-hidden text-start">
              
              <div className="flex flex-wrap items-center justify-between bg-[#fafafa] border-b border-g200 px-[1.1rem] py-[0.65rem] gap-2">
                <div className="flex gap-[0.38rem]">
                  <div className="w-[11px] h-[11px] rounded-full" style={{ background: '#ff5f57' }}></div>
                  <div className="w-[11px] h-[11px] rounded-full" style={{ background: '#febc2e' }}></div>
                  <div className="w-[11px] h-[11px] rounded-full" style={{ background: '#28c840' }}></div>
                </div>
                <div className="flex gap-[0.1rem] bg-g100 rounded-[6px] p-[0.2rem]">
                  <span className="font-display text-[0.67rem] font-semibold px-[0.65rem] py-[0.28rem] rounded-[5px] bg-white text-g800 shadow-sm cursor-pointer">Active Reviews</span>
                  <span className="font-display text-[0.67rem] font-semibold px-[0.65rem] py-[0.28rem] rounded-[5px] text-g400 cursor-pointer">Standards</span>
                  <span className="font-display text-[0.67rem] font-semibold px-[0.65rem] py-[0.28rem] rounded-[5px] text-g400 cursor-pointer">Audit Trail</span>
                  <span className="font-display text-[0.67rem] font-semibold px-[0.65rem] py-[0.28rem] rounded-[5px] text-g400 cursor-pointer">Reports</span>
                  <span className="font-display text-[0.67rem] font-semibold px-[0.65rem] py-[0.28rem] rounded-[5px] text-g400 cursor-pointer">Governance</span>
                </div>
                <span className="font-display text-[0.7rem] font-bold text-g400 hidden sm:block">The Platform · Compliance</span>
              </div>

              <div className="dashboard-grid min-h-[370px]">
                
                <div className="bg-[#fafafa] border-end border-g200 p-[0.9rem] text-[0.7rem]">
                  <div className="flex items-center gap-[0.45rem] pb-[0.8rem] border-b border-g200 mb-[0.5rem]">
                    <div className="w-6 h-6 bg-burg rounded-[5px] flex items-center justify-center text-white text-[0.65rem] font-extrabold">P</div>
                    <span className="font-display font-semibold text-[0.8rem] text-g800">The Platform</span>
                  </div>
                  
                  <div>
                    <div className="text-[0.58rem] font-bold tracking-[0.09em] uppercase text-g400 px-[0.45rem] py-[0.28rem] mt-[0.3rem]">Compliance</div>
                    <div className="flex items-center px-[0.5rem] py-[0.38rem] rounded-[7px] font-poppins text-[0.7rem] font-medium bg-burg/7 text-burg cursor-pointer">
                      📋 Active Reviews
                      <span className="ml-auto text-white text-[0.54rem] font-bold px-[0.32rem] py-[0.08rem] rounded-[10px] bg-burg">9</span>
                    </div>
                    <div className="flex items-center px-[0.5rem] py-[0.38rem] rounded-[7px] font-poppins text-[0.7rem] font-medium text-g600 cursor-pointer">
                      ⚡ Agents Running
                      <span className="ml-auto text-white text-[0.54rem] font-bold px-[0.32rem] py-[0.08rem] rounded-[10px] bg-green-500">4</span>
                    </div>
                    <div className="flex items-center px-[0.5rem] py-[0.38rem] rounded-[7px] font-poppins text-[0.7rem] font-medium text-g600 cursor-pointer">
                      ⚠️ NCRs Flagged
                      <span className="ml-auto text-white text-[0.54rem] font-bold px-[0.32rem] py-[0.08rem] rounded-[10px] bg-burg">23</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-[0.58rem] font-bold tracking-[0.09em] uppercase text-g400 px-[0.45rem] py-[0.28rem] mt-[0.3rem]">Standards</div>
                    <div className="flex items-center px-[0.5rem] py-[0.38rem] rounded-[7px] font-poppins text-[0.7rem] font-medium text-g600 cursor-pointer">📐 ASME / API / NACE</div>
                    <div className="flex items-center px-[0.5rem] py-[0.38rem] rounded-[7px] font-poppins text-[0.7rem] font-medium text-g600 cursor-pointer">🌐 ISO / IEC / IEEE</div>
                  </div>

                  <div>
                    <div className="text-[0.58rem] font-bold tracking-[0.09em] uppercase text-g400 px-[0.45rem] py-[0.28rem] mt-[0.3rem]">Governance</div>
                    <div className="flex items-center px-[0.5rem] py-[0.38rem] rounded-[7px] font-poppins text-[0.7rem] font-medium text-g600 cursor-pointer">🛡️ OPA Policies</div>
                    <div className="flex items-center px-[0.5rem] py-[0.38rem] rounded-[7px] font-poppins text-[0.7rem] font-medium text-g600 cursor-pointer">📋 Audit Log</div>
                  </div>
                </div>

                <div className="p-[1.1rem] min-w-0 overflow-hidden flex-fill">
                  <div className="flex flex-wrap items-start justify-between mb-4 gap-2">
                    <div>
                      <div className="font-display font-semibold text-[0.9rem] text-g800">Active Reviews · Findings · Audit Trail</div>
                      <div className="text-[0.65rem] text-g400 mt-[0.08rem]">9 reviews active · 23 NCRs flagged · 4 agents running</div>
                    </div>
                    <div className="flex gap-[0.35rem]">
                      <button className="text-[0.66rem] font-bold px-[0.65rem] py-[0.28rem] rounded-[5px] bg-g100 text-g800 border border-g200 min-h-[30px] font-display">Filter</button>
                      <button className="text-[0.66rem] font-bold px-[0.65rem] py-[0.28rem] rounded-[5px] bg-burg text-white border-0 min-h-[30px] font-display">+ New Review</button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-[0.55rem] mb-4">
                    <div className="bg-g100 border border-g200 rounded-[9px] px-[0.5rem] py-[0.5rem] min-w-0">
                      <div className="text-[0.52rem] font-semibold text-g400 uppercase tracking-[0.05em] mb-[0.15rem] truncate">Docs Reviewed</div>
                      <div className="font-display font-semibold text-[0.85rem] text-g800 leading-none truncate">2,841</div>
                      <div className="text-[0.52rem] font-semibold mt-[0.15rem] truncate text-green-500">↑ 18% today</div>
                    </div>
                    <div className="bg-g100 border border-g200 rounded-[9px] px-[0.5rem] py-[0.5rem] min-w-0">
                      <div className="text-[0.52rem] font-semibold text-g400 uppercase tracking-[0.05em] mb-[0.15rem] truncate">NCRs Flagged</div>
                      <div className="font-display font-semibold text-[0.85rem] text-g800 leading-none truncate">23</div>
                      <div className="text-[0.52rem] font-semibold mt-[0.15rem] truncate text-burg">↑ 3 new</div>
                    </div>
                    <div className="bg-g100 border border-g200 rounded-[9px] px-[0.5rem] py-[0.5rem] min-w-0">
                      <div className="text-[0.52rem] font-semibold text-g400 uppercase tracking-[0.05em] mb-[0.15rem] truncate">Miss Rate</div>
                      <div className="font-display font-semibold text-[0.85rem] text-g800 leading-none truncate">0%</div>
                      <div className="text-[0.52rem] font-semibold mt-[0.15rem] truncate text-green-500">vs 18% manual</div>
                    </div>
                    <div className="bg-g100 border border-g200 rounded-[9px] px-[0.5rem] py-[0.5rem] min-w-0">
                      <div className="text-[0.52rem] font-semibold text-g400 uppercase tracking-[0.05em] mb-[0.15rem] truncate">Audit Ready</div>
                      <div className="font-display font-semibold text-[0.85rem] text-g800 leading-none truncate">100%</div>
                      <div className="text-[0.52rem] font-semibold mt-[0.15rem] truncate text-g400">decision-level</div>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <div className="min-w-[450px]">
                      <div className="grid grid-cols-[2fr_1fr_1fr_0.6fr_0.8fr] gap-[0.3rem] text-[0.52rem] font-bold text-g400 uppercase tracking-[0.07em] px-[0.5rem] py-[0.35rem] border-b border-g200 mb-1">
                        <span>Agent</span>
                        <span>Standard</span>
                        <span>Last Run</span>
                        <span>Docs</span>
                        <span>Status</span>
                      </div>

                      <div className="grid grid-cols-[2fr_1fr_1fr_0.6fr_0.8fr] gap-[0.3rem] items-center px-[0.5rem] py-[0.45rem] rounded-[8px] hover:bg-g100 transition-colors">
                        <div className="flex items-center gap-[0.4rem] min-w-0">
                          <div className="w-[22px] h-[22px] rounded-[6px] bg-burg/10 text-burg flex items-center justify-center flex-shrink-0">
                            <i className="bi bi-file-earmark-ruled text-[0.7rem]"></i>
                          </div>
                          <div className="flex-1 min-w-0 text-left">
                            <div className="font-display font-bold text-[0.62rem] text-g800 truncate">Drawing Check Agent</div>
                            <div className="text-[0.5rem] text-g400 truncate">ASME / API / ISO review</div>
                          </div>
                        </div>
                        <span className="text-[0.6rem] text-g600 truncate">ASME B31.3</span>
                        <span className="text-[0.6rem] text-g600 truncate">2 min ago</span>
                        <span className="text-[0.6rem] text-g600 truncate">841</span>
                        <div className="flex items-center gap-[0.2rem] text-[0.58rem] font-semibold text-g600 whitespace-nowrap">
                          <span className="w-[6px] h-[6px] rounded-full bg-green-500 animate-pulse-live"></span>Live
                        </div>
                      </div>

                      <div className="grid grid-cols-[2fr_1fr_1fr_0.6fr_0.8fr] gap-[0.3rem] items-center px-[0.5rem] py-[0.45rem] rounded-[8px] hover:bg-g100 transition-colors">
                        <div className="flex items-center gap-[0.4rem] min-w-0">
                          <div className="w-[22px] h-[22px] rounded-[6px] bg-denim/10 text-denim flex items-center justify-center flex-shrink-0">
                            <i className="bi bi-file-earmark-text text-[0.7rem]"></i>
                          </div>
                          <div className="flex-1 min-w-0 text-left">
                            <div className="font-display font-bold text-[0.62rem] text-g800 truncate">Datasheet Review Agent</div>
                            <div className="text-[0.5rem] text-g400 truncate">Mech &amp; piping spec check</div>
                          </div>
                        </div>
                        <span className="text-[0.6rem] text-g600 truncate">API 570</span>
                        <span className="text-[0.6rem] text-g600 truncate">Just now</span>
                        <span className="text-[0.6rem] text-g600 truncate">524</span>
                        <div className="flex items-center gap-[0.2rem] text-[0.58rem] font-semibold text-g600 whitespace-nowrap">
                          <span className="w-[6px] h-[6px] rounded-full bg-green-500 animate-pulse-live"></span>Live
                        </div>
                      </div>

                      <div className="grid grid-cols-[2fr_1fr_1fr_0.6fr_0.8fr] gap-[0.3rem] items-center px-[0.5rem] py-[0.45rem] rounded-[8px] hover:bg-g100 transition-colors">
                        <div className="flex items-center gap-[0.4rem] min-w-0">
                          <div className="w-[22px] h-[22px] rounded-[6px] bg-keppel/10 text-keppel flex items-center justify-center flex-shrink-0">
                            <i className="bi bi-shield-check text-[0.7rem]"></i>
                          </div>
                          <div className="flex-1 min-w-0 text-left">
                            <div className="font-display font-bold text-[0.62rem] text-g800 truncate">Audit Trail Agent</div>
                            <div className="text-[0.5rem] text-g400 truncate">Citation &amp; cross check</div>
                          </div>
                        </div>
                        <span className="text-[0.6rem] text-g600 truncate">Multi-standard</span>
                        <span className="text-[0.6rem] text-g600 truncate">8 min ago</span>
                        <span className="text-[0.6rem] text-g600 truncate">1,312</span>
                        <div className="flex items-center gap-[0.2rem] text-[0.58rem] font-semibold text-g600 whitespace-nowrap">
                          <span className="w-[6px] h-[6px] rounded-full bg-denim"></span>Running
                        </div>
                      </div>

                      <div className="grid grid-cols-[2fr_1fr_1fr_0.6fr_0.8fr] gap-[0.3rem] items-center px-[0.5rem] py-[0.45rem] rounded-[8px] hover:bg-g100 transition-colors">
                        <div className="flex items-center gap-[0.4rem] min-w-0">
                          <div className="w-[22px] h-[22px] rounded-[6px] bg-prussian/10 text-prussian flex items-center justify-center flex-shrink-0">
                            <i className="bi bi-file-earmark-check text-[0.7rem]"></i>
                          </div>
                          <div className="flex-1 min-w-0 text-left">
                            <div className="font-display font-bold text-[0.62rem] text-g800 truncate">Contract Validator</div>
                            <div className="text-[0.5rem] text-g400 truncate">Jurisdiction doc check</div>
                          </div>
                        </div>
                        <span className="text-[0.6rem] text-g600 truncate">Multi-state</span>
                        <span className="text-[0.6rem] text-g600 truncate">1 hr ago</span>
                        <span className="text-[0.6rem] text-g600 truncate">164</span>
                        <div className="flex items-center gap-[0.2rem] text-[0.58rem] font-semibold text-g600 whitespace-nowrap">
                          <span className="w-[6px] h-[6px] rounded-full bg-warning"></span>Idle
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
