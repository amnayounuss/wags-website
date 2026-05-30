'use client';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Clients() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';

  const clientsList = [
    { name: 'Reeq Alnahl' },
    { name: 'Breehant Roastery' },
    { name: 'Okawa' },
    { name: 'Camel Step' },
    { name: 'Order (اوردر)' },
    { name: 'Zarafa' },
    { name: 'CST' },
    { name: 'Namq (نمق)' },
    { name: 'Landscape Contracting' },
    { name: 'Peacock Cafe' },
    { name: 'AAB Group' },
    { name: 'Placemakers Factory' },
    { name: 'Kuf Roasters' },
    { name: 'Perfect Pick' },
    { name: 'Anoosh' },
    { name: 'CST Partner' },
  ];

  // Duplicate for seamless marquee
  const tickerItems = [...clientsList, ...clientsList, ...clientsList];

  return (
    <>
      <section id="clients" className={`py-20 relative ${isAr ? 'font-cairo' : 'font-sora'}`}>
        <div className="container">
          <div className="text-center mb-10">
            <p className={`text-[18px] text-white font-semibold m-0 ${isAr ? 'font-cairo' : 'font-sora'}`}>
              {t('clients.title')}
            </p>
          </div>
        </div>

        <div className="ticker-wrapper mt-[30px]" dir="ltr">
          <div className="ticker-track gap-[100px] pr-[100px]">
            {tickerItems.map((c, i) => (
              <div
                key={i}
                className="flex items-center text-white/60 transition-colors duration-300 cursor-default whitespace-nowrap hover:text-white"
              >
              <span className="text-[24px] font-bold tracking-[-0.02em]">{c.name}</span>
              </div>
            ))}
        </div>
      </div>
    </section >
    </>
  );
}
