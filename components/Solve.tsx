'use client';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const ITEMS = [1, 2, 3, 4];

export default function Solve() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';
  const font = isAr ? 'font-arabic' : 'font-inter';
  const heading = isAr ? 'font-arabic' : 'font-grotesk';

  return (
    // #solve: white panel background, padding 120px 0
    <section id="solve" className={`relative z-[2] py-[64px] sm:py-[80px] tablet:py-[120px] text-wg-text ${font}`}>
      {/* solve-grid: 1fr 1fr, gap 72, align center */}
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-8 relative z-[2] grid grid-cols-1 tablet:grid-cols-2 gap-10 sm:gap-12 tablet:gap-[56px] lg:gap-[72px] items-center">

        {/* ── Copy ── */}
        <div className="reveal">
          {/* kicker — purple-bright in this section */}
          <div className={`text-[12px] font-semibold leading-[18px] text-wg-purple-bright mb-[14px] ${isAr ? 'tracking-normal' : 'tracking-[0.14em] uppercase'}`}>
            {t('solve.kicker')}
          </div>
          {/* h2: Space Grotesk 600, clamp(28px,4vw,42px) / 1.5, ls -.01em, mb 18 */}
          <h2 className={`${heading} text-[clamp(26px,4vw,42px)] font-semibold leading-[1.35] sm:leading-[1.5] tracking-[-0.01em] text-wg-text mb-[18px]`}>
            {t('solve.title')}
          </h2>
          {/* p: Inter 400, 16px / 24px, --muted, max-w 520, mb 28 */}
          <p className="text-[15px] sm:text-[16px] leading-[24px] text-wg-muted max-w-[520px] mb-6 sm:mb-7">{t('solve.sub')}</p>

          {/* solve-list: column, gap 20 */}
          <div className="flex flex-col gap-5">
            {ITEMS.map((n) => (
              <div key={n} className="flex gap-4 items-start">
                {/* tick: 30px, radius 9, purple-bright → teal gradient */}
                <div className="flex-none w-[30px] h-[30px] rounded-[9px] mt-0.5 bg-gradient-to-br from-wg-purple-bright to-wg-teal flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-[15px] h-[15px] stroke-white fill-none [stroke-width:3] [stroke-linecap:round] [stroke-linejoin:round]">
                    <polyline points="4,13 9,18 20,6" />
                  </svg>
                </div>
                <div>
                  {/* h4: Space Grotesk 600, 16px / 24px, mb 4 */}
                  <h4 className={`${heading} text-[16px] font-semibold leading-[24px] tracking-normal text-wg-text mb-1`}>
                    {t(`solve.i${n}.t`)}
                  </h4>
                  {/* p: Inter 400, 14.5px / 1.55, --muted */}
                  <p className="text-[14.5px] leading-[1.55] text-wg-muted">{t(`solve.i${n}.d`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Infographic ── */}
        <div className="reveal flex items-center justify-center max-tablet:order-first max-tablet:mb-2" dir="ltr">
          <svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[480px] h-auto">
            {/* connecting lines */}
            <line x1="240" y1="176" x2="240" y2="122" stroke="#00A896" strokeWidth="2" opacity=".45" className="sg-dash" />
            <line x1="240" y1="304" x2="240" y2="358" stroke="#00A896" strokeWidth="2" opacity=".45" className="sg-dash" />
            <line x1="176" y1="240" x2="122" y2="240" stroke="#00A896" strokeWidth="2" opacity=".45" className="sg-dash" />
            <line x1="304" y1="240" x2="358" y2="240" stroke="#00A896" strokeWidth="2" opacity=".45" className="sg-dash" />

            {/* pulse ring behind core */}
            <circle cx="240" cy="240" r="64" fill="none" stroke="#00A896" strokeWidth="2" className="sg-pulse" />

            {/* core */}
            <circle cx="240" cy="240" r="64" fill="url(#coreGrad)" />
            <text x="240" y="236" textAnchor="middle" className="sg-core-label">{t('solve.core')}</text>
            <text x="240" y="254" textAnchor="middle" className="sg-core-sub">{t('solve.core.sub')}</text>

            {/* top node: manual entry */}
            <circle cx="240" cy="90" r="32" fill="url(#nodeGrad)" />
            <g transform="translate(240,90)" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <rect x="-8" y="-11" width="16" height="22" rx="2" />
              <line x1="-4" y1="-4" x2="4" y2="-4" />
              <line x1="-4" y1="1" x2="4" y2="1" />
              <line x1="-4" y1="6" x2="1" y2="6" />
            </g>
            <text x="240" y="30" textAnchor="middle" className="sg-node-label">{t('solve.n1')}</text>
            <text x="240" y="44" textAnchor="middle" className="sg-node-sub">{t('solve.n1.sub')}</text>

            {/* bottom node: compliance */}
            <circle cx="240" cy="390" r="32" fill="url(#nodeGrad)" />
            <g transform="translate(240,390)" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0,-11 L9,-7 V3 C9,9 4,12 0,13 C-4,12 -9,9 -9,3 V-7 Z" />
              <polyline points="-4,0 -1,4 5,-4" />
            </g>
            <text x="240" y="448" textAnchor="middle" className="sg-node-label">{t('solve.n2')}</text>
            <text x="240" y="462" textAnchor="middle" className="sg-node-sub">{t('solve.n2.sub')}</text>

            {/* left node: slow decisions */}
            <circle cx="90" cy="240" r="32" fill="url(#nodeGrad)" />
            <g transform="translate(90,240)" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <line x1="-8" y1="9" x2="-8" y2="1" />
              <line x1="-2.5" y1="9" x2="-2.5" y2="-6" />
              <line x1="3" y1="9" x2="3" y2="-2" />
              <line x1="8.5" y1="9" x2="8.5" y2="-9" />
            </g>
            <text x="54" y="234" textAnchor="end" className="sg-node-label">{t('solve.n3')}</text>
            <text x="54" y="248" textAnchor="end" className="sg-node-sub">{t('solve.n3.sub')}</text>

            {/* right node: scattered systems */}
            <circle cx="390" cy="240" r="32" fill="url(#nodeGrad)" />
            <g transform="translate(390,240)" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <rect x="-9" y="-9" width="12" height="12" rx="2" />
              <rect x="-2" y="-2" width="12" height="12" rx="2" />
            </g>
            <text x="426" y="234" textAnchor="start" className="sg-node-label">{t('solve.n4')}</text>
            <text x="426" y="248" textAnchor="start" className="sg-node-sub">{t('solve.n4.sub')}</text>

            <defs>
              <linearGradient id="coreGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#8E4C7E" />
                <stop offset="1" stopColor="#00A896" />
              </linearGradient>
              <linearGradient id="nodeGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#714B67" />
                <stop offset="1" stopColor="#00A896" />
              </linearGradient>
            </defs>
          </svg>
        </div>

      </div>
    </section>
  );
}
