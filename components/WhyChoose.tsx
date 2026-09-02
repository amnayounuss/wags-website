'use client';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { GridLines, Eyebrow, AmButton } from '@/components/armory/Primitives';

/**
 * WhyChoose, rebuilt as the reference's "approach" split: the heading column
 * sticks while the feature cells scroll past it on the other half. Light
 * section, so it breaks up the run of dark ones exactly as the reference does.
 */

const FEATURES = [
  { t: 'why.f1.t', d: 'why.f1.d' },
  { t: 'why.f2.t', d: 'why.f2.d' },
  { t: 'why.f3.t', d: 'why.f3.d' },
  { t: 'why.f4.t', d: 'why.f4.d' },
  { t: 'why.f5.t', d: 'why.f5.d' },
  { t: 'why.f6.t', d: 'why.f6.d' },
];

const MARKS = [
  <g key="1"><path d="M6 12l12-6 12 6-12 6-12-6z" /><path d="M6 12v10l12 6 12-6V12" /></g>,
  <g key="2"><path d="M18 4l12 5v9c0 7-5 12-12 15C11 30 6 25 6 18V9l12-5z" /><path d="M13 18l3.5 3.5L24 14" /></g>,
  <g key="3"><path d="M5 26l6-8 5 5 8-11 5 6" /><path d="M5 30h24" /></g>,
  <g key="4"><circle cx="18" cy="14" r="6" /><path d="M7 30c1.5-5.5 6-8.5 11-8.5S27.5 24.5 29 30" /></g>,
  <g key="5"><circle cx="18" cy="18" r="12" /><path d="M18 10v8l6 4" /></g>,
  <g key="6"><path d="M6 24h7l4-13 5 20 4-9h4" /></g>,
];

export default function WhyChoose() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <section id="why" className="relative isolate overflow-hidden bg-paper text-ink">
      <GridLines tone="light" />

      <div className="relative z-[2] mx-auto max-w-[1440px] tablet:grid tablet:grid-cols-[0.9fr_1.1fr]">
        {/* sticky heading column */}
        <div className="px-6 pt-24 sm:px-10 tablet:pb-24 tablet:pt-32">
          <div className="tablet:sticky tablet:top-32">
            <Eyebrow tone="light">{t('why.kicker')}</Eyebrow>
            <h2 className="am-h2 mt-6">{t('why.title')}</h2>
            <p className="am-body-lg mt-6 max-w-[420px] text-ink/70">{t('why.sub')}</p>
            <div className="mt-9">
              <AmButton href="#contact" tone="light" variant="solid" flip={isAr}>
                {t('hero.cta1')}
              </AmButton>
            </div>
          </div>
        </div>

        {/* feature cells */}
        <div className="mt-14 tablet:mt-0 grid grid-cols-1 sm:grid-cols-2 border-t border-ink/[0.09] ltr:border-l rtl:border-r border-ink/[0.09]">
          {FEATURES.map((f, i) => (
            <div key={f.t} className="border-b border-ink/[0.09] ltr:border-r rtl:border-l border-ink/[0.09] p-7 tablet:p-10">
              <svg
                width="36" height="36" viewBox="0 0 36 36" fill="none"
                stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true" className="mb-8 text-ink/65"
              >
                {MARKS[i]}
              </svg>
              <h3 className="am-card-title">{t(f.t)}</h3>
              <p className="am-body mt-4 text-ink/65">{t(f.d)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
