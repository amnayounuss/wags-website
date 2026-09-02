'use client';
import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { GridLines, Eyebrow, ScrollRevealText } from '@/components/armory/Primitives';

/**
 * Integrations, rebuilt as the reference's integrations block: a word-by-word
 * scroll reveal over a hairline logo grid.
 *
 * This one is a light section on purpose. The partner logos are a mix of full
 * colour marks and plated exports, and on white they all read correctly without
 * any keying or inversion - which also gives the page the reference's
 * light/dark alternation.
 */

const PARTNERS = [
  { name: 'Salla', logo: '/icons/salla.svg' },
  { name: 'Zid', logo: '/icons/zid.png' },
  { name: 'Mada', logo: '/icons/mada.svg' },
  { name: 'STC Pay', logo: '/icons/stcpay.svg' },
  { name: 'Apple Pay', logo: '/icons/applepay.png' },
  { name: 'Visa', logo: '/icons/visa.png' },
  { name: 'Mastercard', logo: '/icons/mastercard.png' },
  { name: 'Moyasser', logo: '/icons/moyasser.png' },
  { name: 'Aramex', logo: '/icons/aramex.png' },
  { name: 'SMSA', logo: '/icons/dalsmsa.png' },
  { name: 'Deliverect', logo: '/icons/deliverect.png' },
  { name: 'Bonat', logo: '/icons/bonat.png' },
  { name: 'Nuqta', logo: '/icons/nuqta.png' },
  { name: 'Try Orders', logo: '/icons/tryorders.png' },
];

export default function Integrations() {
  const { t } = useLanguage();

  return (
    <section id="integrations" className="relative isolate overflow-hidden bg-paper text-ink">
      <GridLines tone="light" />

      <div className="relative z-[2] mx-auto max-w-[1440px] px-6 pt-24 sm:px-10 tablet:pt-32">
        <Eyebrow tone="light">{t('int.kicker')}</Eyebrow>
        <ScrollRevealText tone="light" className="mt-7 max-w-[960px]" text={t('int.head')} />
        <p className="am-body-lg mt-8 max-w-[620px] text-ink/65">{t('int.blurb')}</p>
      </div>

      <div className="relative z-[2] mt-16 tablet:mt-24 grid grid-cols-2 sm:grid-cols-3 tablet:grid-cols-4 border-t border-ink/[0.09]">
        {PARTNERS.map((p) => (
          <div
            key={p.name}
            className="group flex h-[132px] items-center justify-center border-b border-ink/[0.09] ltr:border-r rtl:border-l border-ink/[0.09] px-6"
          >
            <Image
              src={p.logo}
              alt={p.name}
              width={150}
              height={44}
              className="h-[32px] w-auto max-w-[128px] object-contain opacity-55 grayscale transition-[opacity,filter] duration-300 group-hover:opacity-100 group-hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
