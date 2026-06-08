'use client';
import React from 'react';
import { Layers, FileCheck, Handshake, MapPin, Users, Rocket } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function WhyChoose() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';

  const features = [
    {
      title: t('why.f1.title'),
      desc: t('why.f1.desc'),
      icon: <Layers size={24} strokeWidth={2} />
    },
    {
      title: t('why.f2.title'),
      desc: t('why.f2.desc'),
      icon: <FileCheck size={24} strokeWidth={2} />
    },
    {
      title: t('why.f3.title'),
      desc: t('why.f3.desc'),
      icon: <Handshake size={24} strokeWidth={2} />
    },
    {
      title: t('why.f4.title'),
      desc: t('why.f4.desc'),
      icon: <MapPin size={24} strokeWidth={2} />
    },
    {
      title: t('why.f5.title'),
      desc: t('why.f5.desc'),
      icon: <Users size={24} strokeWidth={2} />
    },
    {
      title: t('why.f6.title'),
      desc: t('why.f6.desc'),
      icon: <Rocket size={24} strokeWidth={2} />
    }
  ];

  return (
    <>
      <section id="why" className={`py-[60px] md:py-[80px] relative ${isAr ? 'font-cairo text-right' : 'font-sora'}`}>
        <div className="container">

          <div className="text-center mb-[80px]">
            <div className="section-label inline-block mb-6 bg-[#07B98F]/10 border border-[#07B98F]/25 text-[#07B98F] py-[6px] px-4 rounded-full text-[13px] font-bold tracking-[0.1em] uppercase">{t('why.label')}</div>
            <h2 className={`text-[clamp(36px,5vw,56px)] leading-[1.1] mb-6 font-extrabold text-slate-900 ${isAr ? 'font-cairo' : 'font-sora'}`}>{t('why.title1')}<span className="bg-gradient-to-br from-[#07B98F] to-[#3ECEB0] bg-clip-text text-transparent">{t('why.title2')}</span></h2>
            <p className="text-[18px] md:text-[20px] text-slate-600 leading-[1.7] max-w-[800px] mx-auto font-medium">{t('why.sub')}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-[24px]">
            {features.map((feature, i) => (
              <div
                key={i}
                className={`group flex-1 min-w-[300px] max-w-[380px] bg-white/80 backdrop-blur-[24px] border border-slate-200/60 rounded-[20px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03),_inset_0_1px_0_rgba(255,255,255,0.8)] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(7,185,143,0.08)] hover:bg-white hover:border-[#07B98F]/30 flex items-center gap-5 overflow-hidden relative ${isAr ? 'text-right flex-row-reverse' : ''}`}
              >
                {/* Subtle highlight gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#07B98F]/0 via-[#07B98F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="w-[56px] h-[56px] shrink-0 rounded-[16px] bg-[#07B98F]/10 border border-[#07B98F]/20 flex items-center justify-center text-[#07B98F] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#07B98F] group-hover:text-white shadow-inner relative z-10">
                  {feature.icon}
                </div>
                <h3 className={`text-[18px] md:text-[19px] font-bold text-slate-900 m-0 relative z-10 transition-colors duration-300 ${isAr ? 'font-cairo' : 'font-sora'}`}>{feature.title}</h3>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
