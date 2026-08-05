'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

type Stat = { target: number; suffix: string; capKey: string };

// Reference: 50+ / 100% / 6 / 29
const STATS: Stat[] = [
  { target: 50, suffix: '+', capKey: 'about.stat1' },
  { target: 100, suffix: '%', capKey: 'about.stat2' },
  { target: 6, suffix: '', capKey: 'about.stat3' },
  { target: 29, suffix: '', capKey: 'about.stat4' },
];

export default function About() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';
  const font = isAr ? 'font-arabic' : 'font-inter';
  const heading = isAr ? 'font-arabic' : 'font-grotesk';

  // Count-up on scroll — reference: threshold .5, step = target/40, 30ms tick
  const cardsRef = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState<number[]>(STATS.map(() => 0));

  useEffect(() => {
    const node = cardsRef.current;
    if (!node) return;
    const timers: ReturnType<typeof setInterval>[] = [];

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.unobserve(node);

        STATS.forEach((s, i) => {
          const step = Math.max(1, Math.round(s.target / 40));
          let cur = 0;
          const timer = setInterval(() => {
            cur += step;
            if (cur >= s.target) {
              cur = s.target;
              clearInterval(timer);
            }
            setValues((prev) => {
              const next = [...prev];
              next[i] = cur;
              return next;
            });
          }, 30);
          timers.push(timer);
        });
      },
      { threshold: 0.5 }
    );

    io.observe(node);
    return () => {
      io.disconnect();
      timers.forEach(clearInterval);
    };
  }, []);

  return (
    // section: padding 120px 0
    <section id="about" className={`relative z-[2] py-[64px] sm:py-[80px] tablet:py-[120px] text-wg-text ${font}`}>
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-8 relative z-[2]">
        {/* about-grid: 1.1fr .9fr, gap 60px, align center */}
        <div className="grid grid-cols-1 tablet:grid-cols-[1.1fr_.9fr] gap-9 sm:gap-10 tablet:gap-[60px] items-center">

          {/* ── Copy ── */}
          <div className="reveal">
            {/* kicker: Inter 600, 12px / 18px, ls .14em, uppercase, --teal */}
            <div className={`text-[12px] font-semibold leading-[18px] text-wg-teal mb-[14px] ${isAr ? 'tracking-normal' : 'tracking-[0.14em] uppercase'}`}>
              {t('about.kicker')}
            </div>

            {/* h2: Space Grotesk 600, clamp(26px,3.6vw,38px) / 1.5, mb 20px */}
            <h2 className={`${heading} text-[clamp(24px,3.6vw,38px)] font-semibold leading-[1.35] sm:leading-[1.5] tracking-normal text-wg-text mb-4 sm:mb-5`}>
              {t('about.title')}
            </h2>

            {/* p: Inter 400, 16px / 24px, --muted, mb 16px */}
            <p className="text-[15px] sm:text-[16px] leading-[24px] text-wg-muted mb-4">{t('about.p1')}</p>

            {/* p (vision): italic, --text @ 80% */}
            <p className="text-[15px] sm:text-[16px] leading-[24px] italic text-wg-text/80 mb-4">{t('about.p2')}</p>
          </div>

          {/* ── Stat cards: 2 × 2, gap 16px ── */}
          <div ref={cardsRef} className="reveal grid grid-cols-2 gap-3 sm:gap-4">
            {STATS.map((s, i) => (
              <div
                key={s.capKey}
                className="bg-wg-panel border border-wg-line rounded-[18px] px-5 py-6 sm:px-6 sm:py-7 shadow-[0_2px_18px_rgba(20,10,20,0.04)] transition-[border-color,transform,box-shadow] duration-300 hover:border-[rgba(0,168,150,.4)] hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(0,168,150,.14)]"
              >
                {/* num: Space Grotesk 700, 40px / 60px, --teal */}
                <div className="inline-block font-grotesk font-bold text-[32px] leading-[46px] sm:text-[40px] sm:leading-[60px] text-wg-teal" dir="ltr">
                  {values[i]}
                  {s.suffix}
                </div>
                {/* cap: Inter 400, 13px / 19.5px, --muted, mt 6px */}
                <div className="text-[13px] leading-[19.5px] text-wg-muted mt-1.5">{t(s.capKey)}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
