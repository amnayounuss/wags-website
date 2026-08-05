'use client';
import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const MEMBERS = [
  { key: 'm1', initials: 'AA', photo: '/Abdullatif-Alwshigry.jpg' },
  { key: 'm2', initials: 'HH', photo: '/haroon-bhai.png' },
  { key: 'm3', initials: 'SD', photo: '/danish-bhai.png' },
];

export default function Team() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';
  const font = isAr ? 'font-arabic' : 'font-inter';
  const heading = isAr ? 'font-arabic' : 'font-grotesk';

  return (
    <section id="team" className={`relative z-[2] py-[64px] sm:py-[80px] tablet:py-[120px] text-wg-text ${font}`}>
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-8 relative z-[2]">

        {/* section-head: max-w 640, mb 56 */}
        <div className="reveal max-w-[640px] mb-10 sm:mb-[56px]">
          <div className={`text-[12px] font-semibold leading-[18px] text-wg-teal mb-[14px] ${isAr ? 'tracking-normal' : 'tracking-[0.14em] uppercase'}`}>
            {t('team.kicker')}
          </div>
          <h2 className={`${heading} text-[clamp(26px,4vw,44px)] font-semibold leading-[1.35] sm:leading-[1.5] tracking-[-0.01em] text-wg-text`}>
            {t('team.title')}
          </h2>
          <p className="mt-[14px] text-[15px] sm:text-[16px] leading-[24px] text-wg-muted">{t('team.sub')}</p>
        </div>

        {/* team-grid: 3 cols, gap 24 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 tablet:grid-cols-3 gap-5 sm:gap-6 max-sm:max-w-[420px] max-sm:mx-auto">
          {MEMBERS.map((m) => (
            <div
              key={m.key}
              className="reveal bg-wg-panel border border-wg-line rounded-[20px] overflow-hidden shadow-[0_2px_18px_rgba(20,10,20,0.04)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_36px_rgba(113,75,103,.14)]"
            >
              {/* team-photo: purple → teal gradient plate with a round portrait
                  (two of the three source files are already circular cut-outs,
                  so a circular frame is what keeps all three consistent) */}
              <div className="relative h-[200px] tablet:h-[220px] bg-gradient-to-br from-wg-purple to-wg-teal flex items-center justify-center">
                <div className="relative w-[130px] h-[130px] tablet:w-[146px] tablet:h-[146px] rounded-full overflow-hidden ring-4 ring-white/35 shadow-[0_10px_30px_rgba(20,10,20,0.22)]">
                  {/* Initials sit underneath as the fallback if the portrait fails to load */}
                  <span
                    className="absolute inset-0 flex items-center justify-center bg-wg-purple font-grotesk font-bold text-[34px] leading-[51px] text-white/90"
                    dir="ltr"
                    aria-hidden="true"
                  >
                    {m.initials}
                  </span>
                  <Image
                    src={m.photo}
                    alt={t(`team.${m.key}.name`)}
                    fill
                    sizes="160px"
                    className="relative object-cover object-top"
                  />
                </div>
              </div>

              {/* team-info: padding 22 */}
              <div className="p-5 sm:p-[22px]">
                {/* h3: Space Grotesk 700, 17px / 25.5px, mb 4 */}
                <h3 className={`${heading} text-[17px] font-bold leading-[25.5px] tracking-normal text-wg-text mb-1`}>
                  {t(`team.${m.key}.name`)}
                </h3>
                {/* role: Inter 400, 13px / 19.5px, --teal, mb 10 */}
                <div className="text-[13px] leading-[19.5px] text-wg-teal mb-2.5">{t(`team.${m.key}.role`)}</div>
                {/* p: Inter 400, 13px / 19.5px, --muted */}
                <p className="text-[13px] leading-[19.5px] text-wg-muted">{t(`team.${m.key}.bio`)}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
