'use client';
import React, { useEffect, useState } from 'react';
import { Check, CreditCard, Activity, ArrowRight, Zap, Database, BarChart3, TrendingUp, ShieldCheck, Play, Lock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { t, language } = useLanguage();
  
  useEffect(() => setMounted(true), []);

  return (
    <>
      <section id="hero" className={`min-h-screen flex items-center relative pt-[160px] md:pt-[180px] pb-[60px] md:pb-[100px] overflow-hidden bg-[#02040a] bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] from-[rgba(10,23,48,0.8)] via-[#02040a] to-[#02040a] ${language === 'ar' ? 'font-cairo' : 'font-sora'}`}>

        {/* Spotlight Effect */}
        <div className="absolute top-0 left-1/4 w-full h-[500px] md:h-[800px] bg-gradient-to-b from-[rgba(0,240,255,0.06)] to-transparent -rotate-45 transform origin-top-left pointer-events-none mix-blend-screen"></div>

        {/* Tech Grid Background - Brighter & Wider */}
        <div className="absolute inset-0 pointer-events-none z-0 hero-grid-bg"></div>

        {/* Abstract Rotating Rings - More Prominent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] border-2 border-[rgba(0,240,255,0.05)] rounded-full animate-[spin_40s_linear_infinite] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] border border-[rgba(139,92,246,0.08)] border-dashed rounded-full animate-[spin_70s_linear_infinite_reverse] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] md:w-[1400px] h-[900px] md:h-[1400px] border border-[rgba(0,240,255,0.03)] border-dotted rounded-full animate-[spin_100s_linear_infinite] pointer-events-none"></div>

        {/* Floating Ambient Glows - Brighter & Larger */}
        <div className="absolute top-[5%] left-[5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#00f0ff] opacity-[0.12] rounded-full blur-[130px] pointer-events-none mix-blend-screen animate-[float-1_10s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[0%] right-[0%] w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-[#8b5cf6] opacity-[0.15] rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-[float-2_15s_ease-in-out_infinite]"></div>

        <div className="container relative z-10 flex flex-col items-center pt-5 md:pt-10">

          {/* Centered Content */}
          <div className="relative z-20 flex flex-col items-center text-center w-full max-w-[1200px] mx-auto px-4">

            {/* Badge */}
            <div className="fade-up-1 inline-flex items-center justify-center gap-3 py-1.5 px-4 bg-[#0a101d] rounded-full border border-white/5 mb-6 md:mb-8 shadow-sm">
              <span className={`text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase text-white/50 ${language === 'ar' ? 'font-cairo' : 'font-sora'}`}>{t('hero.badge')}</span>
            </div>

            {/* Title */}
            <h1 className={`fade-up-2 text-center text-[clamp(32px,6vw,60px)] xl:text-[72px] font-extrabold text-white leading-[1.2] md:leading-[1.1] tracking-[-0.03em] mb-4 md:mb-6 w-full ${language === 'ar' ? 'font-cairo' : 'font-sora'}`}>
              <span className="block md:inline md:whitespace-nowrap">{t('hero.title1')}</span>
              {language !== 'ar' && <br className="hidden md:block" />}
              <span className={`block md:mt-0 md:inline md:whitespace-nowrap ${language === 'ar' ? 'mt-0' : 'mt-2'}`}>
                {language === 'ar' && ' '}
                <span className="relative bg-gradient-to-r from-[#00f0ff] via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent animate-gradient-x">
                  {t('hero.title2')}
                </span>
                {language !== 'ar' ? " " : ""}{t('hero.title3')}
              </span>
            </h1>

            {/* Subtitle */}
            <p className={`fade-up-3 text-center text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] text-white/50 max-w-[1000px] mx-auto mb-8 md:mb-10 font-medium px-2 ${language === 'ar' ? 'font-cairo' : ''}`}>
              {t('hero.subtitle')}
            </p>

            {/* Actions */}
            <div className="fade-up-4 flex flex-col sm:flex-row gap-4 items-center justify-center mb-12 md:mb-16 w-full sm:w-auto px-4">
              <a href="#contact" className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 py-4 px-8 bg-white text-black rounded-full text-[16px] font-bold no-underline transition-all duration-300 hover:bg-[#00f0ff] hover:text-black hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] overflow-hidden">
                <span className={`relative z-10 flex items-center gap-2 ${language === 'ar' ? 'font-cairo' : ''}`}>
                  {t('hero.contact')} <ArrowRight size={18} className={`transition-transform ${language === 'ar' ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`} />
                </span>
              </a>
              <a href="#process" className={`group w-full sm:w-auto inline-flex items-center justify-center gap-3 py-4 px-8 bg-[rgba(255,255,255,0.03)] text-white rounded-full border border-white/10 text-[16px] font-semibold no-underline transition-all duration-300 hover:bg-[rgba(255,255,255,0.08)] hover:border-white/20 backdrop-blur-md ${language === 'ar' ? 'font-cairo' : ''}`}>
                <Play size={16} className={`text-[#00f0ff] fill-[#00f0ff]/20 transition-transform group-hover:scale-110 ${language === 'ar' ? 'rotate-180' : ''}`} /> {t('hero.process')}
              </a>
            </div>

            {/* Trust Indicators */}
            <div className={`fade-up-4 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-70 mb-10 md:mb-12 ${language === 'ar' ? 'font-cairo' : ''}`}>
              <div className="text-[13px] text-white/60">
                {language === 'ar' ? (
                  <>موثوق من قبل أكثر من <strong className="text-white">50</strong> شركة في السعودية</>
                ) : (
                  <>Trusted by <strong className="text-white">50+</strong> businesses in KSA</>
                )}
              </div>
              <div className={`flex ${language === 'ar' ? '-space-x-2 space-x-reverse' : '-space-x-2'}`}>
                {[
                  { name: 'Camel Step', url: '/client-camelstep.png' },
                  { name: 'Peacock Roaster', url: '/client-peacock.png' },
                  { name: 'Codeco', url: '/client-codeco.png' },
                  { name: 'Anoosh', url: '/client-anoosh.png' }
                ].map((client, i) => (
                  <div key={i} className="w-8 h-8 shrink-0 rounded-full border border-[#02040a] bg-white overflow-hidden flex items-center justify-center shadow-sm" title={client.name}>
                    <img src={client.url} alt={client.name} className="w-full h-full object-contain p-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Centered Massive Dashboard Visual */}
          <div className="relative w-full max-w-[1200px] mx-auto z-20 flex justify-center fade-up-5 mt-4 px-2 md:px-4">

            {/* Massive Glow Behind Dashboard */}
            <div className="absolute top-1/2 left-1/2 w-full max-w-[800px] h-[300px] bg-[#5b32f6] opacity-20 md:opacity-30 rounded-full blur-[80px] md:blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            {/* Main Dashboard UI - Flat and Centered */}
            <div className={`relative w-full h-auto min-h-[400px] md:h-[600px] rounded-t-[12px] md:rounded-t-[16px] z-10 flex flex-col overflow-hidden bg-[#0a0f1a] border border-[#2a2d3d] border-b-0 shadow-[0_-10px_40px_rgba(0,0,0,0.6)] md:shadow-[0_-20px_80px_rgba(0,0,0,0.8)] ${language === 'ar' ? 'font-cairo' : 'font-sora'}`}>

              {/* macOS style Header */}
              <div className={`h-8 md:h-10 border-b border-[#2a2d3d] flex items-center px-3 md:px-4 bg-[#121622] shrink-0`}>
                <div className={`flex gap-1.5 md:gap-2`}>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className={`mx-auto flex items-center gap-2 bg-[#02040a] px-4 md:px-8 py-1 rounded border border-[#2a2d3d]`}>
                  <Lock size={10} className="text-white/40 md:w-3 md:h-3" />
                  <span className="text-[9px] md:text-[10px] font-semibold text-white/40 tracking-wider uppercase truncate max-w-[120px] md:max-w-none">wags.cloud/dashboard</span>
                </div>
              </div>

              {/* Dashboard Body */}
              <div className={`flex flex-1 p-3 md:p-6 gap-4 md:gap-6 relative z-10 bg-[#0d121c] overflow-hidden`}>

                {/* Subtle Grid Background inside Dashboard */}
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05] pointer-events-none"></div>

                {/* Sidebar Mini - Hidden on small mobile */}
                <div className="hidden sm:flex w-12 md:w-16 flex-col gap-3 md:gap-4 items-center pt-2 z-10 shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[#5b32f6]/80 to-[#4a24d6]/80 flex items-center justify-center text-white border border-[#5b32f6] shadow-[0_0_15px_rgba(91,50,246,0.4)] relative cursor-pointer">
                    <div className={`absolute ${language === 'ar' ? 'right-[-10px] rounded-l-full' : 'left-[-10px] rounded-r-full'} top-1/2 -translate-y-1/2 w-1 h-5 md:h-6 bg-[#5b32f6]`}></div>
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

                {/* Main Content Area */}
                <div className={`flex-1 flex flex-col gap-4 md:gap-6 ${language === 'ar' ? 'pl-0 md:pl-4' : 'pr-0 md:pr-4'} z-10 w-full overflow-hidden`}>
                  {/* Top Stats */}
                  <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 ${language === 'ar' ? 'dir-rtl' : ''}`}>
                    <div className="bg-[#151926] border border-[#2a2d3d] rounded-xl p-4 md:p-6 relative overflow-hidden group cursor-default shadow-sm hover:border-[#5b32f6]/50 transition-colors">
                      <div className={`text-[11px] md:text-[12px] text-white/50 mb-1 font-semibold tracking-wide ${language === 'ar' ? 'text-right' : ''}`}>{t('hero.dashboard.revenue')}</div>
                      <div className={`text-[20px] md:text-[28px] font-extrabold text-white tracking-tight ${language === 'ar' ? 'text-right' : 'font-sora'}`}>SAR 4.2M</div>
                      <div className={`text-[12px] md:text-[13px] text-[#27c93f] flex items-center gap-1.5 mt-1 md:mt-2 font-medium ${language === 'ar' ? 'justify-end' : ''}`}><TrendingUp size={14} className="md:w-4 md:h-4" /> +24.5%</div>
                    </div>
                    <div className="bg-[#151926] border border-[#2a2d3d] rounded-xl p-4 md:p-6 relative overflow-hidden group cursor-default shadow-sm hover:border-[#5b32f6]/50 transition-colors hidden sm:block">
                      <div className={`text-[11px] md:text-[12px] text-white/50 mb-1 font-semibold tracking-wide ${language === 'ar' ? 'text-right' : ''}`}>{t('hero.dashboard.operations')}</div>
                      <div className={`text-[20px] md:text-[28px] font-extrabold text-white tracking-tight ${language === 'ar' ? 'text-right' : 'font-sora'}`}>1,284</div>
                      <div className={`text-[12px] md:text-[13px] text-[#5b32f6] flex items-center gap-1.5 mt-1 md:mt-2 font-medium ${language === 'ar' ? 'justify-end' : ''}`}><Activity size={14} className="md:w-4 md:h-4" /> {t('hero.dashboard.livesync')}</div>
                    </div>
                    <div className="bg-[#151926] border border-[#2a2d3d] rounded-xl p-4 md:p-6 relative overflow-hidden group cursor-default shadow-sm hover:border-[#5b32f6]/50 transition-colors hidden md:block">
                      <div className={`text-[11px] md:text-[12px] text-white/50 mb-1 font-semibold tracking-wide ${language === 'ar' ? 'text-right' : ''}`}>{t('hero.dashboard.users')}</div>
                      <div className={`text-[20px] md:text-[28px] font-extrabold text-white tracking-tight ${language === 'ar' ? 'text-right' : 'font-sora'}`}>8,492</div>
                      <div className={`text-[12px] md:text-[13px] text-[#27c93f] flex items-center gap-1.5 mt-1 md:mt-2 font-medium ${language === 'ar' ? 'justify-end' : ''}`}><Check size={14} className="md:w-4 md:h-4" /> {t('hero.dashboard.verified')}</div>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="flex-1 min-h-[200px] bg-[#151926] border border-[#2a2d3d] rounded-xl p-4 md:p-6 relative flex flex-col shadow-sm">
                    <div className={`flex flex-row justify-between items-center mb-4 md:mb-6 z-10`}>
                      <div className={`text-[13px] md:text-[15px] text-white font-bold tracking-wide flex items-center gap-2`}>
                        {t('hero.dashboard.analytics')}
                      </div>
                      <div className={`flex gap-1 md:gap-2`}>
                        <div className="text-[10px] md:text-[12px] py-1 md:py-1.5 px-2 md:px-4 bg-[#121622] border border-[#2a2d3d] rounded-md text-white/60 hover:text-white cursor-pointer transition-colors font-medium">{t('hero.dashboard.thismonth')}</div>
                        <div className="text-[10px] md:text-[12px] py-1 md:py-1.5 px-2 md:px-4 bg-[#5b32f6]/10 border border-[#5b32f6]/30 rounded-md text-[#5b32f6] font-semibold cursor-pointer">{t('hero.dashboard.thisyear')}</div>
                      </div>
                    </div>
                    <div className={`flex-1 relative w-full mt-2 ${language === 'ar' ? 'transform scale-x-[-1]' : ''}`}>
                      {/* Custom SVG Line Chart - Flipped for RTL if needed, but graphs usually stay LTR. Let's keep graph LTR and not flip it by removing the scale-x class if it looks weird, but let's test it first. Actually, graphs are LTR in Arabic too usually. So I'll remove the scale-x flip. */}
                      <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 120">
                        <defs>
                          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#5b32f6" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                          </linearGradient>
                          <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#5b32f6" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#5b32f6" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {/* Grid lines */}
                        {[25, 50, 75, 100].map(y => (
                          <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                        ))}

                        {/* Area Fill */}
                        <path d="M0,100 C60,100 100,50 180,70 C260,90 300,20 400,30 L400,120 L0,120 Z" fill="url(#areaGrad)" />

                        {/* Animated Line */}
                        <path
                          d="M0,100 C60,100 100,50 180,70 C260,90 300,20 400,30"
                          fill="none"
                          stroke="url(#lineGrad)"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />

                        {/* Data Points */}
                        {mounted && (
                          <>
                            <circle cx="100" cy="50" r="4" fill="#0d121c" stroke="#5b32f6" strokeWidth="2" />
                            <circle cx="180" cy="70" r="4" fill="#0d121c" stroke="#5b32f6" strokeWidth="2" />
                            <circle cx="260" cy="90" r="4" fill="#0d121c" stroke="#5b32f6" strokeWidth="2" />
                            <circle cx="400" cy="30" r="5" fill="#fff" stroke="#5b32f6" strokeWidth="2" className="shadow-[0_0_15px_#5b32f6]" />
                          </>
                        )}
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Floating Element 1: ZATCA - Hidden on mobile, visible on lg */}
            <div className={`hidden lg:flex absolute top-[10%] ${language === 'ar' ? 'left-[-2%]' : 'right-[-2%]'} bg-[#121622] border border-[#2a2d3d] rounded-xl p-3 items-center gap-3 shadow-xl z-30 ${language === 'ar' ? 'font-cairo text-right' : ''}`}>
              <div className="w-10 h-10 rounded-lg bg-[#5b32f6]/10 flex items-center justify-center text-[#5b32f6]">
                <ShieldCheck size={20} />
              </div>
              <div>
                <div className="text-white font-semibold text-[13px]">{t('hero.zatca.title')}</div>
                <div className="text-[11px] text-white/50">{t('hero.zatca.sub')}</div>
              </div>
            </div>

            {/* Floating Element 2: POS - Hidden on mobile, visible on lg */}
            <div className={`hidden lg:flex absolute bottom-[25%] ${language === 'ar' ? 'right-[-2%]' : 'left-[-2%]'} bg-[#121622] border border-[#2a2d3d] rounded-xl p-3 items-center gap-3 shadow-xl z-30 ${language === 'ar' ? 'font-cairo text-right' : ''}`}>
              <div className="w-10 h-10 rounded-lg bg-[#27c93f]/10 flex items-center justify-center text-[#27c93f]">
                <CreditCard size={20} />
              </div>
              <div>
                <div className="text-white font-semibold text-[13px]">{t('hero.pos.title')}</div>
                <div className="text-[11px] text-white/50">{t('hero.pos.sub')}</div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
