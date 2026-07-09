'use client';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <>
      <section id="about" className={`py-[60px] md:py-[80px] relative overflow-hidden ${isAr ? 'font-cairo' : 'font-sora'}`}>
        
        {/* Abstract Background Enhancements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#07B98F]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#3ECEB0]/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-multiply" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%3E%3Cpath%20d='M40%200H0V40'%20fill='none'%20stroke='%23000'%20stroke-width='1'/%3E%3C/svg%3E\")" }}></div>

        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-[80px] lg:gap-[120px]">

            {/* Left Side - Text & Stats */}
            <div className={`flex-1 ${isAr ? 'text-right' : ''}`}>
              <div className={`inline-flex items-center gap-3 mb-8 bg-white border border-slate-200/60 shadow-[0_2px_10px_rgba(0,0,0,0.02)] py-2 px-5 rounded-full ${isAr ? 'flex-row-reverse' : ''}`}>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#07B98F] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#07B98F]"></span>
                </span>
                <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-slate-700">{t('about.label')}</span>
              </div>
              
              <h2 className={`text-[clamp(40px,5vw,60px)] leading-[1.1] mb-8 font-extrabold text-slate-900 tracking-[-0.02em] ${isAr ? 'font-cairo' : 'font-sora'}`}>
                {t('about.title1')}
                <span className={`relative inline-block ${isAr ? 'mr-3' : 'ml-3'}`}>
                  <span className="relative z-10 bg-gradient-to-br from-[#07B98F] to-[#3ECEB0] bg-clip-text text-transparent">{t('about.title2')}</span>
                  <span className="absolute bottom-2 left-0 w-full h-[30%] bg-[#07B98F]/10 -z-10 -rotate-2 rounded-full"></span>
                </span>
              </h2>
              
              <p className="text-[18px] md:text-[20px] text-slate-600 leading-[1.8] mb-12 font-medium max-w-[600px]">
                {t('about.p1')}
              </p>

              {/* Stats Row */}
              <div className={`flex flex-wrap items-center gap-8 md:gap-12 pt-8 border-t border-slate-200/60 ${isAr ? 'flex-row-reverse' : ''}`}>
                <div>
                  <div className="text-[36px] font-extrabold text-slate-900 mb-1 tracking-tight">50+</div>
                  <div className="text-[13px] font-bold text-slate-500 uppercase tracking-[0.1em]">Enterprise Clients</div>
                </div>
                <div className="w-[1px] h-[50px] bg-slate-200"></div>
                <div>
                  <div className="text-[36px] font-extrabold text-slate-900 mb-1 tracking-tight">100%</div>
                  <div className="text-[13px] font-bold text-slate-500 uppercase tracking-[0.1em]">ZATCA Compliant</div>
                </div>
              </div>
            </div>

            {/* Right Side - Highlight Card */}
            <div className="flex-1 w-full relative flex justify-center lg:justify-end">
              {/* Decorative Shapes Behind Card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[#07B98F]/10 blur-[80px] rounded-full pointer-events-none"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-[#07B98F]/20 rounded-full animate-[spin_10s_linear_infinite] pointer-events-none"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-dashed border-[#3ECEB0]/30 rounded-full animate-[spin_15s_linear_infinite_reverse] pointer-events-none"></div>
              
              {/* Premier Card */}
              <div className={`relative w-full max-w-[500px] bg-white/80 backdrop-blur-[24px] border border-slate-200/80 rounded-[32px] p-10 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.04),_inset_0_1px_0_rgba(255,255,255,1)] group hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(7,185,143,0.12)] transition-all duration-500 ${isAr ? 'text-right' : ''}`} style={{ borderTopColor: 'rgba(7,185,143,0.6)', borderTopWidth: '3px' }}>
                
                <div className="relative z-10 flex flex-col gap-6">
                  <div className={`inline-flex items-center gap-4 mb-2 ${isAr ? 'flex-row-reverse' : ''}`}>
                    <div className="w-14 h-14 rounded-[18px] bg-gradient-to-br from-[#07B98F]/10 to-[#07B98F]/5 border border-[#07B98F]/20 flex items-center justify-center text-[#07B98F] transition-transform duration-500 group-hover:scale-110 shadow-inner">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                    </div>
                    <span className="text-[13px] font-bold tracking-[0.15em] uppercase text-[#07B98F] bg-[#07B98F]/5 px-4 py-2 rounded-full border border-[#07B98F]/15 shadow-sm">{t('about.vision.label')}</span>
                  </div>
                  
                  <h3 className={`text-[28px] md:text-[34px] font-extrabold text-slate-900 leading-[1.3] tracking-tight ${isAr ? 'font-cairo' : 'font-sora'}`}>{t('about.vision.title')}</h3>
                  <p className="text-[16px] md:text-[17px] text-slate-600 leading-[1.7] font-medium">{t('about.vision.desc')}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
