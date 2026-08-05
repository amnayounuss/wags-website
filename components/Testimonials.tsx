'use client';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const COUNT = 5;
const STARS = '★★★★★';

export default function Testimonials() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';
  const font = isAr ? 'font-arabic' : 'font-inter';
  const heading = isAr ? 'font-arabic' : 'font-grotesk';

  const items = Array.from({ length: COUNT }, (_, i) => ({
    text: t(`test.${i + 1}.text`),
    name: t(`test.${i + 1}.name`),
    role: t(`test.${i + 1}.role`),
  }));

  // Duplicated once — the track scrolls 0 → -50% for a seamless loop
  const track = [...items, ...items];

  return (
    <section id="testimonials" className={`relative z-[2] py-[64px] sm:py-[80px] tablet:py-[120px] text-wg-text ${font}`}>
      {/* section-head: max-w 640, mb 56 */}
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-8 relative z-[2]">
        <div className="reveal max-w-[640px] mb-10 sm:mb-[56px]">
          <div className={`text-[12px] font-semibold leading-[18px] text-wg-teal mb-[14px] ${isAr ? 'tracking-normal' : 'tracking-[0.14em] uppercase'}`}>
            {t('test.kicker')}
          </div>
          <h2 className={`${heading} text-[clamp(26px,4vw,44px)] font-semibold leading-[1.35] sm:leading-[1.5] tracking-[-0.01em] text-wg-text`}>
            {t('test.title')}
          </h2>
          <p className="mt-[14px] text-[15px] sm:text-[16px] leading-[24px] text-wg-muted">{t('test.sub')}</p>
        </div>
      </div>

      {/* test-marquee: inside the wrap, edge-faded, 40s loop, pauses on hover */}
      <div
        className="max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          maskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)',
          WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)',
        }}
        dir="ltr"
      >
        <div className="flex gap-4 sm:gap-5 w-max animate-wg-marquee-slow hover:[animation-play-state:paused]">
          {track.map((item, i) => (
            // test-card: 340px, white, radius 20, padding 28
            <div
              key={i}
              className="w-[275px] sm:w-[310px] tablet:w-[340px] shrink-0 bg-wg-panel border border-wg-line rounded-[20px] p-6 sm:p-7 shadow-[0_2px_18px_rgba(20,10,20,0.04)]"
              dir={isAr ? 'rtl' : 'ltr'}
            >
              {/* stars: --gold, ls 2px, mb 14 */}
              <div className="text-[14px] leading-[21px] tracking-[2px] text-wg-gold mb-[14px]">{STARS}</div>
              {/* quote: 14.5px / 1.6, --text, mb 20 */}
              <p className="text-[14.5px] leading-[1.6] text-wg-text mb-5">{isAr ? `« ${item.text} »` : `"${item.text}"`}</p>
              {/* test-who: avatar 38px + name/role */}
              <div className="flex items-center gap-3">
                <div className="w-[38px] h-[38px] shrink-0 rounded-full bg-gradient-to-br from-wg-purple to-wg-teal" />
                <div>
                  <div className="text-[13.5px] font-semibold leading-[20.25px] text-wg-text">{item.name}</div>
                  <div className="text-[12px] leading-[18px] text-wg-muted">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
