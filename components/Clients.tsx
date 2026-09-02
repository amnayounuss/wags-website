'use client';
import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { GridLines, Eyebrow, ScrollRevealText } from '@/components/armory/Primitives';

/**
 * Clients, rebuilt as the reference's integrations block: the headline is a
 * word-by-word scroll reveal, and the logos sit in a hairline cell grid rather
 * than a marquee. Same client list, same copy key.
 */

// Logos that are clean marks on transparency, so a brightness-0 invert renders
// them as the reference's uniform white wall. Five had an opaque plate baked in
// and were keyed out to *-cut.png; codeco, okawa, reeq and tryorders resisted
// the key and are left out until transparent versions exist.
const CLIENTS = [
  { name: 'Camel Step', logo: '/icons/camelstep.png' },
  { name: 'Peacock Roaster', logo: '/icons/peacock-cut.png' },
  { name: 'Anoosh', logo: '/icons/anoosh.png' },
  { name: 'Breehant', logo: '/icons/breehant.png' },
  { name: 'CST', logo: '/icons/cst-cut.png' },
  { name: 'Namaq', logo: '/icons/namaq.png' },
  { name: 'Rowad', logo: '/icons/rowad-cut.png' },
  { name: 'Shovel', logo: '/icons/shovel.png' },
  { name: 'Zuma', logo: '/icons/zuma.avif' },
  { name: 'Bonat', logo: '/icons/bonat.png' },
  { name: 'Miles Speed', logo: '/icons/milesspeed-cut.png' },
  { name: 'Zid', logo: '/icons/zid-cut.png' },
];

export default function Clients() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <section id="clients" className="relative isolate overflow-hidden bg-ink text-white">
      <GridLines tone="dark" dots />

      <div className="relative z-[2] mx-auto max-w-[1440px] px-6 pt-24 sm:px-10 tablet:pt-32">
        <Eyebrow tone="dark">{isAr ? 'عملاؤنا' : 'Clients'}</Eyebrow>
        <ScrollRevealText
          tone="dark"
          className="mt-7 max-w-[900px]"
          text={t('clients.title')}
        />
      </div>

      {/* logo cells - full bleed so the rules meet the viewport edges */}
      <div className="relative z-[2] mt-16 tablet:mt-24 grid grid-cols-2 sm:grid-cols-3 tablet:grid-cols-4 border-t border-white/[0.09]">
        {CLIENTS.map((c) => (
          <div
            key={c.name}
            className="group flex h-[132px] items-center justify-center border-b border-white/[0.09] ltr:border-r rtl:border-l border-white/[0.09] px-6"
          >
            <Image
              src={c.logo}
              alt={c.name}
              width={150}
              height={44}
              className="h-[30px] w-auto max-w-[130px] object-contain opacity-45 brightness-0 invert transition-opacity duration-300 group-hover:opacity-90"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
