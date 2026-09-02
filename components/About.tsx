'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Section, Eyebrow, CornerTicks } from '@/components/armory/Primitives';

/**
 * About, rebuilt as the reference's statistics block: a left copy column and a
 * row of oversized mono figures that count up once they enter the viewport.
 * Existing copy keys only.
 */

const STATS = [
  { to: 50, suffix: '+', label: 'about.stat1' },
  { to: 100, suffix: '%', label: 'about.stat2' },
  { to: 6, suffix: '', label: 'about.stat3' },
  { to: 29, suffix: '', label: 'about.stat4' },
];

/** Counts from 0 to `to` the first time it scrolls into view. */
function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(to); return; }

    const io = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1400;
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / dur);
        // ease-out cubic, so it decelerates into the final figure
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });

    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref} dir="ltr">
      {n}
      {suffix}
    </span>
  );
}

export default function About() {
  const { t } = useLanguage();

  return (
    <Section id="about" tone="dark" dots>
      <div className="tablet:grid tablet:grid-cols-[1fr_1fr] tablet:gap-20">
        <div>
          <Eyebrow tone="dark">{t('about.kicker')}</Eyebrow>
          <h2 className="am-h2 mt-6">{t('about.title')}</h2>
        </div>
        <div className="mt-8 tablet:mt-0 tablet:pt-4">
          <p className="am-body-lg text-white/85">{t('about.p1')}</p>
          <p className="am-body-lg mt-6 text-white/55">{t('about.p2')}</p>
        </div>
      </div>

      <div className="mt-16 tablet:mt-24 grid grid-cols-2 tablet:grid-cols-4 border-t border-white/[0.09]">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="relative border-b border-white/[0.09] ltr:border-r rtl:border-l border-white/[0.09] px-6 py-10 tablet:px-8 tablet:py-14"
          >
            <CornerTicks tone="dark" />
            <div className="font-geist-mono text-[52px] font-light leading-none tracking-[-2px] tablet:text-[76px]">
              <Counter to={s.to} suffix={s.suffix} />
            </div>
            <div className="am-meta mt-5 text-white/50">{t(s.label)}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
