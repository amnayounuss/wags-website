'use client';
import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Clients() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';

  const clientsList = [
    { name: '1', logo: '/icons/1.png' },
    { name: '2', logo: '/icons/2.png' },
    { name: '3', logo: '/icons/3.png' },
    { name: '4', logo: '/icons/4.png' },
    // { name: '5', logo: '/icons/5.png' },
    { name: 'Anoosh', logo: '/icons/anoosh.png' },
    { name: 'Breehant', logo: '/icons/breehant.png' },
    { name: 'Camel Step', logo: '/icons/camelstep.png' },
    { name: 'Codeco', logo: '/icons/codeco.png' },
    { name: 'CST', logo: '/icons/cst.jpg' },
    { name: 'Namaq', logo: '/icons/namaq.png' },
    { name: 'Okawa', logo: '/icons/okawa.png' },
    { name: 'Peacock', logo: '/icons/peacock.png' },
    { name: 'Reeq', logo: '/icons/reeq.png' },
    { name: 'Rowad', logo: '/icons/rowad.png' },
    { name: 'Shovel', logo: '/icons/shovel.png', invert: true },
    { name: 'Tracking', logo: '/icons/tracking.jpg' },
    { name: 'Zuma', logo: '/icons/zuma.avif' },
  ];

  // Duplicate for seamless marquee
  const tickerItems = [...clientsList, ...clientsList];

  return (
    <>
      <section id="clients" className={`py-[40px] md:py-[60px] relative ${isAr ? 'font-cairo' : 'font-sora'}`}>
        <div className="container">
          <div className="text-center mb-10">
            <p className={`text-[14px] sm:text-[15px] text-slate-500 font-medium m-0 tracking-wide ${isAr ? 'font-cairo' : 'font-sora'}`}>
              {t('clients.title')}
            </p>
          </div>
        </div>

        <div className="ticker-wrapper mt-[30px]" dir="ltr">
          <div className="ticker-track gap-[40px] pr-[40px] md:gap-[60px] md:pr-[60px]">
            {tickerItems.map((c, i) => (
              <div
                key={i}
                className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <Image src={c.logo} alt={c.name} width={180} height={40} className={`h-[32px] md:h-[40px] w-auto object-contain max-w-[180px] ${c.invert ? 'brightness-0 invert' : ''}`} />
              </div>
            ))}
          </div>
        </div>
      </section >
    </>
  );
}
