'use client';
import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

// Each row carries the logo(s) of the brand(s) it names — shown at the end of the row.
const GROUPS = [
  {
    key: 'g1',
    items: [
      { n: 1, logos: ['/icons/nuqta.png'] },
      { n: 2, logos: ['/icons/bonat.png'] },
      { n: 3, logos: ['/icons/deliverect.png'] },
      { n: 4, logos: ['/icons/tryorders.png'] },
    ],
  },
  {
    key: 'g2',
    items: [
      { n: 1, logos: ['/icons/moyasser.png'] },
      // mada.png / stcpay.png in /public are mislabelled (G Pay and JCB) — the SVGs are correct
      { n: 2, logos: ['/icons/mada.svg'] },
      { n: 3, logos: ['/icons/visa.png', '/icons/mastercard.png'] },
      { n: 4, logos: ['/icons/applepay.png', '/icons/stcpay.svg'] },
    ],
  },
  {
    key: 'g3',
    items: [
      { n: 1, logos: ['/icons/zid.png'] },
      // salla.png in /public is a corrupt (HTML) file — the SVG is the good asset
      { n: 2, logos: ['/icons/salla.svg'] },
      { n: 3, logos: ['/icons/aramex.png'] },
      { n: 4, logos: ['/icons/dalsmsa.png'] },
    ],
  },
  {
    key: 'g4',
    // Text only — no brand marks in this column
    items: [
      { n: 1, logos: [] as string[] },
      { n: 2, logos: [] as string[] },
    ],
  },
];

export default function Integrations() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';
  const font = isAr ? 'font-arabic' : 'font-inter';
  const heading = isAr ? 'font-arabic' : 'font-grotesk';

  return (
    <section id="integrations" className={`relative z-[2] py-[64px] sm:py-[80px] tablet:py-[120px] text-wg-text ${font}`}>
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-8 relative z-[2]">

        {/* section-head: max-w 640, mb 56 */}
        <div className="reveal max-w-[640px] mb-10 sm:mb-[56px]">
          <div className={`text-[12px] font-semibold leading-[18px] text-wg-teal mb-[14px] ${isAr ? 'tracking-normal' : 'tracking-[0.14em] uppercase'}`}>
            {t('int.kicker')}
          </div>
          <h2 className={`${heading} text-[clamp(26px,4vw,44px)] font-semibold leading-[1.35] sm:leading-[1.5] tracking-[-0.01em] text-wg-text`}>
            {t('int.head')}
          </h2>
          <p className="mt-[14px] text-[15px] sm:text-[16px] leading-[24px] text-wg-muted">{t('int.blurb')}</p>
        </div>

        {/* integ-grid: 4 cols, gap 18 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 tablet:grid-cols-4 gap-4 sm:gap-[18px]">
          {GROUPS.map((g) => (
            // integ-col: white, radius 18, padding 26, hover lift
            <div
              key={g.key}
              className="reveal bg-wg-panel border border-wg-line rounded-[18px] p-5 sm:p-[26px] shadow-[0_2px_18px_rgba(20,10,20,0.04)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(113,75,103,.12)]"
            >
              {/* h4: Space Grotesk 700, 14px / 21px, ls .02em, --teal, mb 16 */}
              <h4 className={`${heading} text-[14px] font-bold leading-[21px] tracking-[0.02em] text-wg-teal mb-4`}>
                {t(`int.${g.key}`)}
              </h4>

              <ul className="list-none">
                {g.items.map((item, i) => (
                  // li: Inter 14 / 21, --muted, padding 8px 0, hairline between rows
                  <li
                    key={item.n}
                    className={`flex items-center justify-between gap-3 text-[13.5px] sm:text-[14px] leading-[21px] text-wg-muted py-2 ${
                      i === 0 ? '' : 'border-t border-wg-line'
                    }`}
                  >
                    <span>{t(`int.${g.key}.${item.n}`)}</span>

                    {/* brand logo(s) at the end of the row */}
                    {item.logos.length > 0 && (
                    <span className="flex items-center gap-1.5 shrink-0">
                      {item.logos.map((src) => (
                        <Image
                          key={src}
                          src={src}
                          alt=""
                          aria-hidden="true"
                          width={64}
                          height={18}
                          className="h-[18px] w-auto max-w-[46px] object-contain opacity-80"
                        />
                      ))}
                    </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
