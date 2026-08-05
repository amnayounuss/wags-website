'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const STEPS = ['01', '02', '03', '04'];

export default function Process() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';
  const font = isAr ? 'font-arabic' : 'font-inter';
  const heading = isAr ? 'font-arabic' : 'font-grotesk';

  // Reference: each .p-step gets `.in` when it scrolls into view, lighting up the number ring
  const stepsRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState<boolean[]>(STEPS.map(() => false));

  useEffect(() => {
    const node = stepsRef.current;
    if (!node) return;
    const children = Array.from(node.querySelectorAll('[data-step]'));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const i = children.indexOf(e.target);
          if (i > -1) setInView((prev) => (prev[i] ? prev : prev.map((v, j) => (j === i ? true : v))));
          io.unobserve(e.target);
        });
      },
      { threshold: 0.15 }
    );

    children.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section id="process" className={`relative z-[2] py-[64px] sm:py-[80px] tablet:py-[120px] text-wg-text ${font}`}>
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-8 relative z-[2]">

        {/* section-head: max-w 640, mb 56 */}
        <div className="reveal max-w-[640px] mb-10 sm:mb-[56px]">
          <div className={`text-[12px] font-semibold leading-[18px] text-wg-teal mb-[14px] ${isAr ? 'tracking-normal' : 'tracking-[0.14em] uppercase'}`}>
            {t('process.kicker')}
          </div>
          <h2 className={`${heading} text-[clamp(26px,4vw,44px)] font-semibold leading-[1.35] sm:leading-[1.5] tracking-[-0.01em] text-wg-text`}>
            {t('process.title')}
          </h2>
          <p className="mt-[14px] text-[15px] sm:text-[16px] leading-[24px] text-wg-muted">{t('process.sub')}</p>
        </div>

        {/* process-steps: 4 cols, gap 24, connecting hairline at y = 26px */}
        <div ref={stepsRef} className="relative grid grid-cols-1 sm:grid-cols-2 tablet:grid-cols-4 gap-8 sm:gap-6">
          {/* ::before — the line running behind the number circles */}
          <div
            className="hidden tablet:block absolute top-[26px] left-[6%] right-[6%] h-px pointer-events-none"
            style={{
              background:
                'linear-gradient(90deg,transparent,rgba(20,10,20,0.09) 15%,rgba(20,10,20,0.09) 85%,transparent)',
            }}
          />

          {STEPS.map((n, i) => (
            <div key={n} data-step className="relative">
              {/* p-num: 52px circle, Space Grotesk 700, teal; glows once in view */}
              <div
                className={`relative z-[2] w-[52px] h-[52px] rounded-full bg-wg-panel border flex items-center justify-center font-grotesk font-bold text-[16px] leading-[24px] text-wg-teal mb-[22px] transition-[border-color,box-shadow] duration-300 ${
                  inView[i] ? 'border-wg-teal shadow-[0_0_22px_rgba(0,217,192,.35)]' : 'border-wg-line'
                }`}
                dir="ltr"
              >
                {n}
              </div>
              {/* h3: Space Grotesk 700, 17px / 25.5px, mb 8 */}
              <h3 className={`${heading} text-[17px] font-bold leading-[25.5px] tracking-normal text-wg-text mb-2`}>
                {t(`process.s${i + 1}.t`)}
              </h3>
              {/* p: Inter 400, 14px / 21px, --muted */}
              <p className="text-[14px] leading-[21px] text-wg-muted">{t(`process.s${i + 1}.d`)}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
