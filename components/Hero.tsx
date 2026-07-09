'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Check, CreditCard, Activity, ArrowRight, Zap, Database, BarChart3, TrendingUp, ShieldCheck, Play, Lock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { t, language } = useLanguage();
  
  useEffect(() => setMounted(true), []);

  return (
    <>
      <section id="hero" className={`min-h-screen flex items-center relative pt-[120px] md:pt-[140px] pb-[40px] md:pb-[60px] overflow-hidden bg-white bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] from-[#eefaf7] via-white to-white ${language === 'ar' ? 'font-cairo' : 'font-sora'}`}>

        {/* Spotlight Effect - Light mode friendly */}
        <div className="absolute top-0 left-1/4 w-full h-[500px] md:h-[800px] bg-gradient-to-b from-[#3ECEB0]/10 to-transparent -rotate-45 transform origin-top-left pointer-events-none mix-blend-multiply"></div>

        {/* Tech Grid Background - Refined for light background */}
        <div className="absolute inset-0 pointer-events-none z-0 hero-grid-bg"></div>

        {/* Abstract Rotating Rings - Mint & Turquoise */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] border-2 border-[#07B98F]/10 rounded-full animate-[spin_40s_linear_infinite] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] border border-[#3ECEB0]/15 border-dashed rounded-full animate-[spin_70s_linear_infinite_reverse] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] md:w-[1400px] h-[900px] md:h-[1400px] border border-[#07B98F]/5 border-dotted rounded-full animate-[spin_100s_linear_infinite] pointer-events-none"></div>

        {/* Floating Ambient Glows - Mint & Turquoise with light blending */}
        <div className="absolute top-[5%] left-[5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#3ECEB0] opacity-[0.20] rounded-full blur-[130px] pointer-events-none mix-blend-multiply animate-[float-1_10s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[0%] right-[0%] w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-[#07B98F] opacity-[0.18] rounded-full blur-[150px] pointer-events-none mix-blend-multiply animate-[float-2_15s_ease-in-out_infinite]"></div>

        <div className="container relative z-10 flex flex-col items-center pt-5 md:pt-10">

          {/* Centered Content */}
          <div className="relative z-20 flex flex-col items-center text-center w-full max-w-[1200px] mx-auto px-4">

            {/* Badge */}
            <div className="fade-up-1 inline-flex items-center justify-center gap-3 py-1.5 px-4 bg-[#07B98F]/10 rounded-full border border-[#07B98F]/25 mb-6 md:mb-8 shadow-[0_2px_12px_rgba(7,185,143,0.06)]">
              <span className={`text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase text-[#07B98F] ${language === 'ar' ? 'font-cairo' : 'font-sora'}`}>{t('hero.badge')}</span>
            </div>

            {/* Title */}
            <h1 className={`fade-up-2 text-center text-[clamp(32px,6vw,60px)] xl:text-[72px] font-extrabold text-[#0B1220] leading-[1.2] md:leading-[1.1] tracking-[-0.03em] mb-4 md:mb-6 w-full ${language === 'ar' ? 'font-cairo' : 'font-sora'}`}>
              <span className="block md:inline md:whitespace-nowrap">{t('hero.title1')}</span>
              {language !== 'ar' && <br className="hidden md:block" />}
              <span className={`block md:mt-0 md:inline md:whitespace-nowrap ${language === 'ar' ? 'mt-0' : 'mt-2'}`}>
                {language === 'ar' && ' '}
                <span className="relative bg-gradient-to-r from-[#07B98F] via-[#3ECEB0] to-[#07B98F] bg-clip-text text-transparent animate-gradient-x">
                  {t('hero.title2')}
                </span>
                {language !== 'ar' ? " " : ""}{t('hero.title3')}
              </span>
            </h1>

            {/* Subtitle */}
            <p className={`fade-up-3 text-center text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] text-slate-600 max-w-[1000px] mx-auto mb-8 md:mb-10 font-medium px-2 ${language === 'ar' ? 'font-cairo' : ''}`}>
              {t('hero.subtitle')}
            </p>

            {/* Actions */}
            <div className="fade-up-4 flex flex-col sm:flex-row gap-4 items-center justify-center mb-12 md:mb-16 w-full sm:w-auto px-4">
              <a href="#contact" className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 py-4 px-8 bg-gradient-to-r from-[#07B98F] to-[#3ECEB0] text-white rounded-full text-[16px] font-bold no-underline transition-all duration-300 hover:opacity-95 hover:shadow-[0_0_30px_rgba(7,185,143,0.35)] overflow-hidden">
                <span className={`relative z-10 flex items-center gap-2 ${language === 'ar' ? 'font-cairo' : ''}`}>
                  {t('hero.contact')} <ArrowRight size={18} className={`transition-transform ${language === 'ar' ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`} />
                </span>
              </a>
              <a href="#process" className={`group w-full sm:w-auto inline-flex items-center justify-center gap-3 py-4 px-8 bg-slate-900/5 text-slate-800 rounded-full border border-slate-900/10 text-[16px] font-semibold no-underline transition-all duration-300 hover:bg-slate-900/10 hover:border-slate-900/20 hover:text-slate-900 backdrop-blur-md ${language === 'ar' ? 'font-cairo flex-row-reverse' : ''}`}>
                <Play size={16} className="text-[#07B98F] fill-[#07B98F]/20 transition-transform group-hover:scale-110" /> {t('hero.process')}
              </a>
            </div>

            {/* Trust Indicators */}
            <div className={`fade-up-4 flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 md:mb-12 ${language === 'ar' ? 'font-cairo' : ''}`}>
              <div className="text-[13px] text-slate-600 font-medium">
                {language === 'ar' ? (
                  <>موثوق من قبل أكثر من <strong className="text-slate-900 font-bold">50</strong> شركة في السعودية</>
                ) : (
                  <>Trusted by <strong className="text-slate-900 font-bold">50+</strong> businesses in KSA</>
                )}
              </div>
              <div className={`flex ${language === 'ar' ? '-space-x-2 space-x-reverse' : '-space-x-2'}`}>
                {[
                  { name: 'Camel Step', url: '/icons/camelstep.png' },
                  { name: 'Peacock Roaster', url: '/icons/peacock.png' },
                  { name: 'Codeco', url: '/icons/codeco.png' },
                  { name: 'Anoosh', url: '/icons/anoosh.png' }
                ].map((client, i) => (
                  <div key={i} className="w-8 h-8 shrink-0 rounded-full border-2 border-white bg-white overflow-hidden flex items-center justify-center shadow-sm" title={client.name}>
                    <Image src={client.url} alt={client.name} width={32} height={32} className="w-full h-full object-contain p-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Centered Massive Dashboard Visual - Commented out as requested
          <div className="relative w-full max-w-[1200px] mx-auto z-20 flex justify-center fade-up-5 mt-4 px-2 md:px-4">

            <div className="absolute top-1/2 left-1/2 w-full max-w-[800px] h-[300px] bg-[#3ECEB0] opacity-35 md:opacity-40 rounded-full blur-[80px] md:blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className={`relative w-full h-auto min-h-[400px] md:h-[600px] rounded-t-[12px] md:rounded-t-[16px] z-10 flex flex-col overflow-hidden bg-[#060b13] border border-[#1b2336] border-b-0 shadow-[0_-10px_40px_rgba(0,0,0,0.6)] md:shadow-[0_-20px_80px_rgba(0,0,0,0.8)] ${language === 'ar' ? 'font-cairo' : 'font-sora'}`}>

              <div className={`h-8 md:h-10 border-b border-[#1b2336] flex items-center px-3 md:px-4 bg-[#0c121e] shrink-0`}>
                <div className={`flex gap-1.5 md:gap-2`}>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className={`mx-auto flex items-center gap-2 bg-[#02040a] px-4 md:px-8 py-1 rounded border border-[#1b2336]`}>
                  <Lock size={10} className="text-white/40 md:w-3 md:h-3" />
                  <span className="text-[9px] md:text-[10px] font-semibold text-white/40 tracking-wider lowercase truncate max-w-[150px] md:max-w-none">https://www.odoodashboards.com</span>
                </div>
              </div>

              <div className={`flex flex-1 p-3 md:p-6 gap-4 md:gap-6 relative z-10 bg-[#060b13] overflow-hidden`}>

                <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%3E%3Cpath%20d='M40%200H0V40'%20fill='none'%20stroke='%23000'%20stroke-width='1'/%3E%3C/svg%3E\")" }}></div>

                <div className="hidden sm:flex w-12 md:w-16 flex-col gap-3 md:gap-4 items-center pt-2 z-10 shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[#07B98F]/80 to-[#3ECEB0]/80 flex items-center justify-center text-white border border-[#07B98F] shadow-[0_0_15px_rgba(7,185,143,0.4)] relative cursor-pointer">
                    <div className={`absolute ${language === 'ar' ? 'right-[-10px] rounded-l-full' : 'left-[-10px] rounded-r-full'} top-1/2 -translate-y-1/2 w-1 h-5 md:h-6 bg-[#07B98F]`}></div>
                    <BarChart3 size={18} className="md:w-[22px] md:h-[22px]" />
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-white/30 hover:text-white transition-all cursor-pointer hover:bg-white/5 border border-transparent">
                    <Database size={18} className="md:w-[22px] md:h-[22px]" />
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-white/30 hover:text-white transition-all cursor-pointer hover:bg-white/5 border border-transparent">
                    <Activity size={18} className="md:w-[22px] md:h-[22px]" />
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-white/30 hover:text-white transition-all cursor-pointer hover:bg-white/5 border border-transparent">
                    <ShieldCheck size={18} className="md:w-[22px] md:h-[22px]" />
                  </div>
                </div>

                <div className={`flex-1 flex flex-col gap-4 md:gap-6 ${language === 'ar' ? 'pl-0 md:pl-4' : 'pr-0 md:pr-4'} z-10 w-full overflow-hidden`}>
                  <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 ${language === 'ar' ? 'dir-rtl' : ''}`}>
                    <div className="bg-[#0c121e] border border-[#1b2336] rounded-xl p-4 md:p-6 relative overflow-hidden group cursor-default shadow-sm hover:border-[#07B98F]/50 transition-colors">
                      <div className={`text-[11px] md:text-[12px] text-white/50 mb-1 font-semibold tracking-wide ${language === 'ar' ? 'text-right' : ''}`}>{t('hero.dashboard.revenue')}</div>
                      <div className={`text-[20px] md:text-[28px] font-extrabold text-white tracking-tight ${language === 'ar' ? 'text-right' : 'font-sora'}`}>SAR 4.2M</div>
                      <div className={`text-[12px] md:text-[13px] text-[#27c93f] flex items-center gap-1.5 mt-1 md:mt-2 font-medium ${language === 'ar' ? 'justify-end' : ''}`}><TrendingUp size={14} className="md:w-4 md:h-4" /> +24.5%</div>
                    </div>
                    <div className="bg-[#0c121e] border border-[#1b2336] rounded-xl p-4 md:p-6 relative overflow-hidden group cursor-default shadow-sm hover:border-[#07B98F]/50 transition-colors hidden sm:block">
                      <div className={`text-[11px] md:text-[12px] text-white/50 mb-1 font-semibold tracking-wide ${language === 'ar' ? 'text-right' : ''}`}>{t('hero.dashboard.operations')}</div>
                      <div className={`text-[20px] md:text-[28px] font-extrabold text-white tracking-tight ${language === 'ar' ? 'text-right' : 'font-sora'}`}>1,284</div>
                      <div className={`text-[12px] md:text-[13px] text-[#07B98F] flex items-center gap-1.5 mt-1 md:mt-2 font-medium ${language === 'ar' ? 'justify-end' : ''}`}><Activity size={14} className="md:w-4 md:h-4" /> {t('hero.dashboard.livesync')}</div>
                    </div>
                    <div className="bg-[#0c121e] border border-[#1b2336] rounded-xl p-4 md:p-6 relative overflow-hidden group cursor-default shadow-sm hover:border-[#07B98F]/50 transition-colors hidden md:block">
                      <div className={`text-[11px] md:text-[12px] text-white/50 mb-1 font-semibold tracking-wide ${language === 'ar' ? 'text-right' : ''}`}>{t('hero.dashboard.users')}</div>
                      <div className={`text-[20px] md:text-[28px] font-extrabold text-white tracking-tight ${language === 'ar' ? 'text-right' : 'font-sora'}`}>8,492</div>
                      <div className={`text-[12px] md:text-[13px] text-[#27c93f] flex items-center gap-1.5 mt-1 md:mt-2 font-medium ${language === 'ar' ? 'justify-end' : ''}`}><Check size={14} className="md:w-4 md:h-4" /> {t('hero.dashboard.verified')}</div>
                    </div>
                  </div>

                  <div className="flex-1 min-h-[200px] bg-[#0c121e] border border-[#1b2336] rounded-xl p-4 md:p-6 relative flex flex-col shadow-sm">
                    <div className={`flex flex-row justify-between items-center mb-4 md:mb-6 z-10`}>
                      <div className={`text-[13px] md:text-[15px] text-white font-bold tracking-wide flex items-center gap-2`}>
                        {t('hero.dashboard.analytics')}
                      </div>
                      <div className={`flex gap-1 md:gap-2`}>
                        <div className="text-[10px] md:text-[12px] py-1 md:py-1.5 px-2 md:px-4 bg-[#02040a] border border-[#1b2336] rounded-md text-white/60 hover:text-white cursor-pointer transition-colors font-medium">{t('hero.dashboard.thismonth')}</div>
                        <div className="text-[10px] md:text-[12px] py-1 md:py-1.5 px-2 md:px-4 bg-[#07B98F]/10 border border-[#07B98F]/30 rounded-md text-[#07B98F] font-semibold cursor-pointer">{t('hero.dashboard.thisyear')}</div>
                      </div>
                    </div>
                    <div className={`flex-1 relative w-full mt-2`}>
                      <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 120">
                        <defs>
                          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#07B98F" />
                            <stop offset="100%" stopColor="#3ECEB0" />
                          </linearGradient>
                          <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#07B98F" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#07B98F" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {[25, 50, 75, 100].map(y => (
                          <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                        ))}

                        <path d="M0,100 C60,100 100,50 180,70 C260,90 300,20 400,30 L400,120 L0,120 Z" fill="url(#areaGrad)" />

                        <path
                          d="M0,100 C60,100 100,50 180,70 C260,90 300,20 400,30"
                          fill="none"
                          stroke="url(#lineGrad)"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />

                        {mounted && (
                          <>
                            <circle cx="100" cy="50" r="4" fill="#060b13" stroke="#07B98F" strokeWidth="2" />
                            <circle cx="180" cy="70" r="4" fill="#060b13" stroke="#07B98F" strokeWidth="2" />
                            <circle cx="260" cy="90" r="4" fill="#060b13" stroke="#07B98F" strokeWidth="2" />
                            <circle cx="400" cy="30" r="5" fill="#fff" stroke="#07B98F" strokeWidth="2" className="shadow-[0_0_15px_#07B98F]" />
                          </>
                        )}
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className={`hidden lg:flex absolute top-[10%] ${language === 'ar' ? 'left-[-2%]' : 'right-[-2%]'} bg-[#0c121e] border border-[#1b2336] rounded-xl p-3 items-center gap-3 shadow-xl z-30 ${language === 'ar' ? 'font-cairo text-right' : ''}`}>
              <div className="w-10 h-10 rounded-lg bg-[#07B98F]/10 flex items-center justify-center text-[#07B98F]">
                <ShieldCheck size={20} />
              </div>
              <div>
                <div className="text-white font-semibold text-[13px]">{t('hero.zatca.title')}</div>
                <div className="text-[11px] text-white/50">{t('hero.zatca.sub')}</div>
              </div>
            </div>

            <div className={`hidden lg:flex absolute bottom-[25%] ${language === 'ar' ? 'right-[-2%]' : 'left-[-2%]'} bg-[#0c121e] border border-[#1b2336] rounded-xl p-3 items-center gap-3 shadow-xl z-30 ${language === 'ar' ? 'font-cairo text-right' : ''}`}>
              <div className="w-10 h-10 rounded-lg bg-[#3ECEB0]/10 flex items-center justify-center text-[#3ECEB0]">
                <CreditCard size={20} />
              </div>
              <div>
                <div className="text-white font-semibold text-[13px]">{t('hero.pos.title')}</div>
                <div className="text-[11px] text-white/50">{t('hero.pos.sub')}</div>
              </div>
            </div>

          </div>
          */}
        </div>
      </section>
    </>
  );
}
