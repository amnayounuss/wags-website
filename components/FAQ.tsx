'use client';
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function FAQ() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';
  const font = isAr ? 'font-arabic' : 'font-inter';
  const heading = isAr ? 'font-arabic' : 'font-grotesk';

  // Reference behaviour: single-open accordion — clicking an open item closes it.
  const [open, setOpen] = useState<number | null>(null);

  const items = [1, 2, 3, 4, 5].map((i) => ({
    q: t(`faq.q${i}`),
    a: t(`faq.a${i}`),
  }));

  return (
    <section id="faq" className={`relative z-[2] py-[64px] sm:py-[80px] tablet:py-[120px] text-wg-text ${font}`}>
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-8 relative z-[2]">

        {/* Section head — centered, max 640px, 56px bottom gap */}
        <div className="reveal max-w-[640px] mx-auto text-center mb-10 sm:mb-[56px]">
          {/* Inter 600, 12px / 18px, ls .14em, uppercase, --teal */}
          <div className={`text-[12px] font-semibold leading-[18px] text-wg-teal mb-[14px] ${isAr ? 'tracking-normal' : 'tracking-[0.14em] uppercase'}`}>
            {t('faq.kicker')}
          </div>
          {/* Space Grotesk 600, clamp(28px,4vw,44px) / 1.5, ls -.01em */}
          <h2 className={`${heading} text-[clamp(26px,4vw,44px)] font-semibold leading-[1.35] sm:leading-[1.5] tracking-[-0.01em] text-wg-text`}>
            {t('faq.title')}
          </h2>
          {/* Inter 400, 16px / 24px, --muted */}
          <p className="mt-[14px] text-[15px] sm:text-[16px] leading-[24px] text-wg-muted">{t('faq.sub')}</p>
        </div>

        {/* FAQ list — max 760px, centered */}
        <div className="reveal max-w-[760px] mx-auto">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-wg-line">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  className={`w-full flex justify-between items-center gap-4 py-5 sm:py-6 px-1 cursor-pointer bg-transparent border-none ${
                    isAr ? 'text-right font-arabic' : 'text-left font-grotesk'
                  } font-semibold text-[15px] sm:text-[16px] leading-[24px] text-wg-text`}
                >
                  <span>{item.q}</span>

                  {/* plus / minus — 22x22, bars 14x2 & 2x14 */}
                  <span className="relative w-[22px] h-[22px] shrink-0">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[14px] h-[2px] bg-wg-text" />
                    <span
                      className={`absolute top-1/2 left-1/2 w-[2px] h-[14px] bg-wg-text transition-[transform,opacity] duration-300 ${
                        isOpen
                          ? '-translate-x-1/2 -translate-y-1/2 rotate-90 opacity-0'
                          : '-translate-x-1/2 -translate-y-1/2 opacity-100'
                      }`}
                    />
                  </span>
                </button>

                {/* Answer — Inter 400, 14.5px / 1.6, --muted; max-height 0 → 200px */}
                <div
                  id={`faq-a-${i}`}
                  className={`overflow-hidden px-1 text-[14.5px] leading-[1.6] text-wg-muted transition-[max-height,padding] duration-[350ms] ease-in-out ${
                    isOpen ? 'max-h-[420px] pb-[22px]' : 'max-h-0 pb-0'
                  }`}
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
