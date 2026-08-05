'use client';
import React from 'react';
import { SlidersHorizontal, ShieldCheck, TrendingUp, MapPin, UserCheck, Rocket } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// One icon per reason — order matches why.f1 … why.f6 in the locale files
const CARDS = [
  { n: 1, Icon: SlidersHorizontal }, // Built for your business
  { n: 2, Icon: ShieldCheck },       // Avoid fines, completely
  { n: 3, Icon: TrendingUp },        // We grow with you
  { n: 4, Icon: MapPin },            // Riyadh-based team
  { n: 5, Icon: UserCheck },         // Dedicated point of contact
  { n: 6, Icon: Rocket },            // Live in 6 weeks
];

export default function WhyChoose() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';
  const font = isAr ? 'font-arabic' : 'font-inter';
  const heading = isAr ? 'font-arabic' : 'font-grotesk';

  return (
    <section id="why" className={`relative z-[2] py-[64px] sm:py-[80px] tablet:py-[120px] text-wg-text ${font}`}>
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-8 relative z-[2]">

        {/* section-head: max-w 640, mb 56 */}
        <div className="reveal max-w-[640px] mb-10 sm:mb-[56px]">
          <div className={`text-[12px] font-semibold leading-[18px] text-wg-teal mb-[14px] ${isAr ? 'tracking-normal' : 'tracking-[0.14em] uppercase'}`}>
            {t('why.kicker')}
          </div>
          <h2 className={`${heading} text-[clamp(26px,4vw,44px)] font-semibold leading-[1.35] sm:leading-[1.5] tracking-[-0.01em] text-wg-text`}>
            {t('why.title')}
          </h2>
          <p className="mt-[14px] text-[15px] sm:text-[16px] leading-[24px] text-wg-muted">{t('why.sub')}</p>
        </div>

        {/* why-grid: 3 cols, gap 20 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 tablet:grid-cols-3 gap-4 sm:gap-5">
          {CARDS.map(({ n, Icon }) => (
            // why-card: white, radius 18, padding 30, hover → purple border + lifted shadow
            <div
              key={n}
              className="reveal group bg-wg-panel border border-wg-line rounded-[18px] p-6 sm:p-[30px] shadow-[0_2px_18px_rgba(20,10,20,0.04)] transition-[transform,border-color,box-shadow] duration-[250ms] will-change-transform hover:border-wg-purple-bright hover:shadow-[0_18px_36px_rgba(113,75,103,.16)]"
            >
              {/* ico: 44px, radius 12, purple → teal gradient, mb 18 */}
              <div className="w-11 h-11 rounded-[12px] bg-gradient-to-br from-wg-purple to-wg-teal mb-4 sm:mb-[18px] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105">
                <Icon size={22} strokeWidth={2} aria-hidden="true" />
              </div>
              {/* h3: Space Grotesk 600, 18px / 27px, mb 10 */}
              <h3 className={`${heading} text-[17px] sm:text-[18px] font-semibold leading-[27px] tracking-normal text-wg-text mb-2.5`}>
                {t(`why.f${n}.t`)}
              </h3>
              {/* p: Inter 400, 14px / 21px, --muted */}
              <p className="text-[14px] leading-[21px] text-wg-muted">{t(`why.f${n}.d`)}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
