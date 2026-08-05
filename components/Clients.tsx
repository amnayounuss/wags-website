'use client';
import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

// Reference marquee order (names replaced by logos as requested)
const CLIENTS = [
  { name: 'Camel Step', logo: '/icons/camelstep.png' },
  { name: 'Peacock Roaster', logo: '/icons/peacock.png' },
  { name: 'Codeco', logo: '/icons/codeco.png' },
  { name: 'Anoosh', logo: '/icons/anoosh.png' },
  { name: 'Breehant', logo: '/icons/breehant.png' },
  { name: 'CST', logo: '/icons/cst.jpg' },
  { name: 'Namaq', logo: '/icons/namaq.png' },
  { name: 'Okawa', logo: '/icons/okawa.png' },
  { name: 'Reeq', logo: '/icons/reeq.png' },
  { name: 'Rowad', logo: '/icons/rowad.png' },
  { name: 'Shovel', logo: '/icons/shovel.png' },
  { name: 'Zuma', logo: '/icons/zuma.avif' },
];

export default function Clients() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';
  const font = isAr ? 'font-arabic' : 'font-inter';

  // Duplicated once — the track scrolls 0 → -50% for a seamless loop
  const track = [...CLIENTS, ...CLIENTS];

  return (
    // trust-section: padding 64px 0 40px
    <section id="clients" className={`relative z-[2] pt-12 pb-8 sm:pt-16 sm:pb-10 text-wg-text ${font}`}>
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-8 relative z-[2]">

        {/* label: Inter 400, 12px / 18px, ls .1em, uppercase, --muted, mb 18px */}
        <div className={`text-[12px] leading-[18px] text-wg-muted mb-[18px] ${isAr ? 'tracking-normal' : 'tracking-[0.1em] uppercase'}`}>
          {t('clients.title')}
        </div>

        {/* marquee: overflow hidden + edge fade mask */}
        <div
          className="overflow-hidden"
          style={{
            maskImage: 'linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent)',
            WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent)',
          }}
          dir="ltr"
        >
          {/* track: flex, gap 64px, width max-content, 26s linear infinite */}
          <div className="flex gap-10 sm:gap-14 lg:gap-16 w-max animate-wg-marquee">
            {track.map((c, i) => (
              // Reference row is 30px of 20px text; logos need a little more room to stay legible
              <div key={i} className="flex items-center h-[32px] sm:h-[40px] shrink-0 opacity-70 transition-opacity duration-300 hover:opacity-100">
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={180}
                  height={40}
                  className="h-[32px] sm:h-[40px] w-auto max-w-[120px] sm:max-w-[160px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
