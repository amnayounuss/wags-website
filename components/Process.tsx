'use client';
import { Search, Layers, CheckCircle, DollarSign } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Process() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <>
      <section id="process" className={`py-[60px] md:py-[80px] relative ${isAr ? 'font-cairo' : 'font-sora'}`}>
        <div className="container">
          <div className="process-header text-center mb-[80px]">
            <div className="section-label inline-block mb-6 bg-[#07B98F]/10 border border-[#07B98F]/25 text-[#07B98F] py-[6px] px-4 rounded-full text-[13px] font-bold tracking-[0.1em] uppercase">{t('process.label')}</div>
            <h2 className={`text-[clamp(36px,5vw,56px)] leading-[1.1] mb-6 font-extrabold text-slate-900 ${isAr ? 'font-cairo' : 'font-sora'}`}>
              {t('process.title1')}<br className="hidden md:block" /><span className="bg-gradient-to-br from-[#07B98F] to-[#3ECEB0] bg-clip-text text-transparent">{t('process.title2')}</span>
            </h2>
            <p className="text-[18px] text-slate-600 leading-[1.6] max-w-[600px] mx-auto">{t('process.sub')}</p>
          </div>

          {/* Modern Staggered Grid */}
          <div className={`grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 items-start ${isAr ? 'dir-rtl' : ''}`}>

            {/* Step 01 */}
            <div className={`process-step group bg-white/75 backdrop-blur-[20px] border border-slate-200/50 rounded-[24px] py-10 px-8 relative overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.03),_inset_0_1px_0_rgba(255,255,255,0.6)] hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-400 ${isAr ? 'text-right' : 'text-left'}`}>
              <div className={`absolute -top-5 ${isAr ? '-left-5' : '-right-5'} text-[120px] font-extrabold text-transparent z-0 pointer-events-none`} style={{ WebkitTextStroke: '2px rgba(15,23,42,0.04)' }}>01</div>
              <div className={`relative z-10 flex flex-col ${isAr ? 'items-end' : 'items-start'} w-full`}>
                <div className={`w-14 h-14 shrink-0 rounded-[16px] shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:bg-[#00f0ff] group-hover:text-white bg-[rgba(0,240,255,0.1)] border border-[rgba(0,240,255,0.3)] flex items-center justify-center mb-5 text-[#00f0ff] ${isAr ? 'ml-auto mr-0' : 'mr-auto ml-0'}`}>
                  <Search size={24} strokeWidth={2} />
                </div>
                <h4 className="text-[22px] mb-3 text-slate-900 font-bold w-full" style={{ textAlign: isAr ? 'right' : 'left', margin: 0, padding: 0 }}>{t('process.s1.title')}</h4>
                <p className="text-slate-600 leading-[1.6] text-[15px] w-full mt-2" style={{ textAlign: isAr ? 'right' : 'left', margin: 0, padding: 0 }}>{t('process.s1.desc')}</p>
              </div>
            </div>

            {/* Step 02 */}
            <div className={`process-step group bg-white/75 backdrop-blur-[20px] border border-slate-200/50 rounded-[24px] py-10 px-8 relative overflow-hidden mt-10 shadow-[0_15px_35px_rgba(0,0,0,0.03),_inset_0_1px_0_rgba(255,255,255,0.6)] hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-400 ${isAr ? 'text-right' : 'text-left'}`}>
              <div className={`absolute -top-5 ${isAr ? '-left-5' : '-right-5'} text-[120px] font-extrabold text-transparent z-0 pointer-events-none`} style={{ WebkitTextStroke: '2px rgba(15,23,42,0.04)' }}>02</div>
              <div className={`relative z-10 flex flex-col ${isAr ? 'items-end' : 'items-start'} w-full`}>
                <div className={`w-14 h-14 shrink-0 rounded-[16px] shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:bg-[#8b5cf6] group-hover:text-white bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.3)] flex items-center justify-center mb-5 text-[#8b5cf6] ${isAr ? 'ml-auto mr-0' : 'mr-auto ml-0'}`}>
                  <Layers size={24} strokeWidth={2} />
                </div>
                <h4 className="text-[22px] mb-3 text-slate-900 font-bold w-full" style={{ textAlign: isAr ? 'right' : 'left', margin: 0, padding: 0 }}>{t('process.s2.title')}</h4>
                <p className="text-slate-600 leading-[1.6] text-[15px] w-full mt-2" style={{ textAlign: isAr ? 'right' : 'left', margin: 0, padding: 0 }}>{t('process.s2.desc')}</p>
              </div>
            </div>

            {/* Step 03 */}
            <div className={`process-step group bg-white/75 backdrop-blur-[20px] border border-slate-200/50 rounded-[24px] py-10 px-8 relative overflow-hidden mt-20 shadow-[0_15px_35px_rgba(0,0,0,0.03),_inset_0_1px_0_rgba(255,255,255,0.6)] hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-400 ${isAr ? 'text-right' : 'text-left'}`}>
              <div className={`absolute -top-5 ${isAr ? '-left-5' : '-right-5'} text-[120px] font-extrabold text-transparent z-0 pointer-events-none`} style={{ WebkitTextStroke: '2px rgba(15,23,42,0.04)' }}>03</div>
              <div className={`relative z-10 flex flex-col ${isAr ? 'items-end' : 'items-start'} w-full`}>
                <div className={`w-14 h-14 shrink-0 rounded-[16px] shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:bg-[#f43f5e] group-hover:text-white bg-[rgba(244,63,94,0.1)] border border-[rgba(244,63,94,0.3)] flex items-center justify-center mb-5 text-[#f43f5e] ${isAr ? 'ml-auto mr-0' : 'mr-auto ml-0'}`}>
                  <CheckCircle size={24} strokeWidth={2} />
                </div>
                <h4 className="text-[22px] mb-3 text-slate-900 font-bold w-full" style={{ textAlign: isAr ? 'right' : 'left', margin: 0, padding: 0 }}>{t('process.s3.title')}</h4>
                <p className="text-slate-600 leading-[1.6] text-[15px] w-full mt-2" style={{ textAlign: isAr ? 'right' : 'left', margin: 0, padding: 0 }}>{t('process.s3.desc')}</p>
              </div>
            </div>

            {/* Step 04 */}
            <div className={`process-step group bg-white/75 backdrop-blur-[20px] border border-slate-200/50 rounded-[24px] py-10 px-8 relative overflow-hidden mt-[120px] shadow-[0_15px_35px_rgba(0,0,0,0.03),_inset_0_1px_0_rgba(255,255,255,0.6)] hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-400 ${isAr ? 'text-right' : 'text-left'}`}>
              <div className={`absolute -top-5 ${isAr ? '-left-5' : '-right-5'} text-[120px] font-extrabold text-transparent z-0 pointer-events-none`} style={{ WebkitTextStroke: '2px rgba(15,23,42,0.04)' }}>04</div>
              <div className={`relative z-10 flex flex-col ${isAr ? 'items-end' : 'items-start'} w-full`}>
                <div className={`w-14 h-14 shrink-0 rounded-[16px] shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:bg-[#fbbf24] group-hover:text-white bg-[rgba(251,191,36,0.1)] border border-[rgba(251,191,36,0.3)] flex items-center justify-center mb-5 text-[#fbbf24] ${isAr ? 'ml-auto mr-0' : 'mr-auto ml-0'}`}>
                  <DollarSign size={24} strokeWidth={2} />
                </div>
                <h4 className="text-[22px] mb-3 text-slate-900 font-bold w-full" style={{ textAlign: isAr ? 'right' : 'left', margin: 0, padding: 0 }}>{t('process.s4.title')}</h4>
                <p className="text-slate-600 leading-[1.6] text-[15px] w-full mt-2" style={{ textAlign: isAr ? 'right' : 'left', margin: 0, padding: 0 }}>{t('process.s4.desc')}</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
