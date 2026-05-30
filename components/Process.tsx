'use client';
import { Search, Layers, CheckCircle, DollarSign } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Process() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <>
      <section id="process" className={`py-[120px] relative ${isAr ? 'font-cairo' : 'font-sora'}`}>
        <div className="container">
          <div className="process-header reveal text-center mb-[80px]">
            <div className="section-label">{t('process.label')}</div>
            <h2 className="section-heading text-[clamp(36px,5vw,56px)] mb-6">{t('process.title1')}<br /><span className="grad">{t('process.title2')}</span></h2>
            <p className="section-sub mx-auto max-w-[600px] text-[18px] text-white/70">{t('process.sub')}</p>
          </div>

          {/* Modern Staggered Grid */}
          <div className={`grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 items-start ${isAr ? 'dir-rtl' : ''}`}>

            {/* Step 01 */}
            <div className={`process-step reveal bg-white/5 backdrop-blur-[20px] border border-white/5 rounded-[24px] py-10 px-8 relative overflow-hidden ${isAr ? 'text-right' : ''}`}>
              <div className={`absolute -top-5 ${isAr ? '-left-5' : '-right-5'} text-[120px] font-extrabold text-transparent z-0 pointer-events-none`} style={{ WebkitTextStroke: '2px rgba(255,255,255,0.03)' }}>01</div>
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-[rgba(0,240,255,0.1)] border border-[rgba(0,240,255,0.3)] flex items-center justify-center mb-6 text-[#00f0ff] ${isAr ? 'ml-auto mr-0' : ''}`}>
                  <Search size={24} strokeWidth={2} />
                </div>
                <h4 className="text-[22px] mb-4 text-white font-bold">{t('process.s1.title')}</h4>
                <p className="text-white/60 leading-[1.6] text-[15px]">{t('process.s1.desc')}</p>
              </div>
            </div>

            {/* Step 02 */}
            <div className={`process-step reveal bg-white/5 backdrop-blur-[20px] border border-white/5 rounded-[24px] py-10 px-8 relative overflow-hidden mt-10 ${isAr ? 'text-right' : ''}`}>
              <div className={`absolute -top-5 ${isAr ? '-left-5' : '-right-5'} text-[120px] font-extrabold text-transparent z-0 pointer-events-none`} style={{ WebkitTextStroke: '2px rgba(255,255,255,0.03)' }}>02</div>
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.3)] flex items-center justify-center mb-6 text-[#8b5cf6] ${isAr ? 'ml-auto mr-0' : ''}`}>
                  <Layers size={24} strokeWidth={2} />
                </div>
                <h4 className="text-[22px] mb-4 text-white font-bold">{t('process.s2.title')}</h4>
                <p className="text-white/60 leading-[1.6] text-[15px]">{t('process.s2.desc')}</p>
              </div>
            </div>

            {/* Step 03 */}
            <div className={`process-step reveal bg-white/5 backdrop-blur-[20px] border border-white/5 rounded-[24px] py-10 px-8 relative overflow-hidden mt-20 ${isAr ? 'text-right' : ''}`}>
              <div className={`absolute -top-5 ${isAr ? '-left-5' : '-right-5'} text-[120px] font-extrabold text-transparent z-0 pointer-events-none`} style={{ WebkitTextStroke: '2px rgba(255,255,255,0.03)' }}>03</div>
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-[rgba(244,63,94,0.1)] border border-[rgba(244,63,94,0.3)] flex items-center justify-center mb-6 text-[#f43f5e] ${isAr ? 'ml-auto mr-0' : ''}`}>
                  <CheckCircle size={24} strokeWidth={2} />
                </div>
                <h4 className="text-[22px] mb-4 text-white font-bold">{t('process.s3.title')}</h4>
                <p className="text-white/60 leading-[1.6] text-[15px]">{t('process.s3.desc')}</p>
              </div>
            </div>

            {/* Step 04 */}
            <div className={`process-step reveal bg-white/5 backdrop-blur-[20px] border border-white/5 rounded-[24px] py-10 px-8 relative overflow-hidden mt-[120px] ${isAr ? 'text-right' : ''}`}>
              <div className={`absolute -top-5 ${isAr ? '-left-5' : '-right-5'} text-[120px] font-extrabold text-transparent z-0 pointer-events-none`} style={{ WebkitTextStroke: '2px rgba(255,255,255,0.03)' }}>04</div>
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-[rgba(251,191,36,0.1)] border border-[rgba(251,191,36,0.3)] flex items-center justify-center mb-6 text-[#fbbf24] ${isAr ? 'ml-auto mr-0' : ''}`}>
                  <DollarSign size={24} strokeWidth={2} />
                </div>
                <h4 className="text-[22px] mb-4 text-white font-bold">{t('process.s4.title')}</h4>
                <p className="text-white/60 leading-[1.6] text-[15px]">{t('process.s4.desc')}</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
