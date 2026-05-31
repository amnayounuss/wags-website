'use client';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Clients() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';

  const clientsList = [
    { name: '1', logo: '/client-logos/1.png' },
    { name: '2', logo: '/client-logos/2.png' },
    { name: '3', logo: '/client-logos/3.png' },
    { name: '4', logo: '/client-logos/4.png' },
    // { name: '5', logo: '/client-logos/5.png' },
    { name: 'Anoosh', logo: '/client-logos/anoosh.png' },
    { name: 'Breehant', logo: '/client-logos/breehant.png' },
    { name: 'Camel Step', logo: '/client-logos/camelstep.png' },
    { name: 'Codeco', logo: '/client-logos/codeco.png' },
    { name: 'CST', logo: '/client-logos/cst.jpg' },
    { name: 'Namaq', logo: '/client-logos/namaq.png' },
    { name: 'Okawa', logo: '/client-logos/okawa.png' },
    { name: 'Peacock', logo: '/client-logos/peacock.png' },
    { name: 'Reeq', logo: '/client-logos/reeq.png' },
    { name: 'Rowad', logo: '/client-logos/rowad.png' },
    { name: 'Shovel', logo: '/client-logos/shovel.png', invert: true },
    { name: 'Tracking', logo: '/client-logos/tracking.jpg' },
    { name: 'Zuma', logo: '/client-logos/zuma.avif' },
  ];

  // Duplicate for seamless marquee
  const tickerItems = [...clientsList, ...clientsList];

  return (
    <>
      <section id="clients" className={`py-20 relative ${isAr ? 'font-cairo' : 'font-sora'}`}>
        <div className="container">
          <div className="text-center mb-10">
            <p className={`text-[14px] sm:text-[15px] text-white/50 font-medium m-0 tracking-wide ${isAr ? 'font-cairo' : 'font-sora'}`}>
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
                <img src={c.logo} alt={c.name} className={`h-[32px] md:h-[40px] w-auto object-contain max-w-[180px] ${c.invert ? 'brightness-0 invert' : ''}`} />
              </div>
            ))}
          </div>
        </div>
      </section >
    </>
  );
}
