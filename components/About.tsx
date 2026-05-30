'use client';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <>
      <section id="about" className={`py-[100px] relative ${isAr ? 'font-cairo' : 'font-sora'}`}>
        <div className="container">
          <div className="about-grid">

            {/* Left Side - Text */}
            <div className={`about-text ${isAr ? 'text-right' : ''}`}>
              <div className="section-label inline-block mb-6 bg-[rgba(0,240,255,0.1)] border border-[rgba(0,240,255,0.3)] text-[#00f0ff] py-[6px] px-4 rounded-full text-[13px] font-bold tracking-[0.1em] uppercase">{t('about.label')}</div>
              <h2 className={`text-[clamp(36px,5vw,56px)] leading-[1.1] mb-6 font-extrabold text-white ${isAr ? 'font-cairo' : 'font-sora'}`}>{t('about.title1')}<span className="bg-gradient-to-br from-[#00f0ff] to-[#8b5cf6] bg-clip-text text-transparent">{t('about.title2')}</span></h2>
              <p className="text-[18px] text-white/70 leading-[1.7] mb-6">{t('about.p1')}</p>
              <p className="text-[18px] text-white/70 leading-[1.7]">{t('about.p2')}</p>
            </div>

            {/* Right Side - Bento Grid */}
            <div className="about-bento">

              {/* Vision */}
              <div className={`col-span-full bg-[rgba(8,10,15,0.65)] backdrop-blur-[20px] border border-white/5 border-t-[rgba(139,92,246,0.3)] rounded-[24px] p-10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] ${isAr ? 'text-right' : ''}`}>
                <div className="text-[12px] font-bold tracking-[0.15em] uppercase text-[#8b5cf6] mb-3">{t('about.vision.label')}</div>
                <h3 className={`text-[24px] font-bold text-white mb-4 ${isAr ? 'font-cairo' : 'font-sora'}`}>{t('about.vision.title')}</h3>
                <p className="text-[16px] text-white/60 leading-[1.6]">{t('about.vision.desc')}</p>
              </div>

              {/* Mission */}
              <div className={`bg-[rgba(8,10,15,0.65)] backdrop-blur-[20px] border border-white/5 border-t-[rgba(0,240,255,0.2)] rounded-[24px] py-8 px-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] ${isAr ? 'text-right' : ''}`}>
                <div className="text-[12px] font-bold tracking-[0.15em] uppercase text-[#00f0ff] mb-3">{t('about.mission.label')}</div>
                <h3 className={`text-[20px] font-bold text-white mb-4 ${isAr ? 'font-cairo' : 'font-sora'}`}>{t('about.mission.title')}</h3>
                <p className="text-[15px] text-white/60 leading-[1.6]">{t('about.mission.desc')}</p>
              </div>

              {/* Value */}
              <div className={`bg-[rgba(8,10,15,0.65)] backdrop-blur-[20px] border border-white/5 border-t-[rgba(244,63,94,0.2)] rounded-[24px] py-8 px-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] ${isAr ? 'text-right' : ''}`}>
                <div className="text-[12px] font-bold tracking-[0.15em] uppercase text-[#f43f5e] mb-3">{t('about.value.label')}</div>
                <h3 className={`text-[20px] font-bold text-white mb-4 ${isAr ? 'font-cairo' : 'font-sora'}`}>{t('about.value.title')}</h3>
                <p className="text-[15px] text-white/60 leading-[1.6]">{t('about.value.desc')}</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
