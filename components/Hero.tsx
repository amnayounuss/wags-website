'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { GridLines, AmButton } from '@/components/armory/Primitives';

/**
 * Hero, rebuilt to the reference's layout:
 *   full-bleed darkened media, a 4-column hairline grid over it, a service list
 *   and client logos in the upper right, and the headline block anchored to the
 *   lower left at 100px/100px with -3px tracking.
 *
 * All copy still comes from the existing locale keys - nothing was reworded.
 */

const SERVICES = ['services.filter.sales', 'services.filter.pos', 'services.filter.finance', 'services.filter.ops'];
const LOGOS = ['/icons/camelstep.png', '/icons/namaq.png', '/icons/anoosh.png', '/icons/bonat.png'];

export default function Hero() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(id);
  }, []);

  return (
    <section id="hero" className="relative isolate overflow-hidden bg-ink text-white">
      {/* ── full-bleed media, pushed right so the headline sits on clean ground ── */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <Image
          src="/hero-pos.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-[0.34] grayscale"
        />
        {/* pull the left half down so the 100px headline keeps its contrast */}
        <div className={`absolute inset-0 ${isAr
          ? 'bg-[linear-gradient(270deg,#060606_0%,rgba(6,6,6,.86)_38%,rgba(6,6,6,.35)_72%,rgba(6,6,6,.7)_100%)]'
          : 'bg-[linear-gradient(90deg,#060606_0%,rgba(6,6,6,.86)_38%,rgba(6,6,6,.35)_72%,rgba(6,6,6,.7)_100%)]'}`} />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <GridLines tone="dark" />

      <div className="relative z-[2] mx-auto flex min-h-[88vh] max-w-[1440px] flex-col px-6 pb-16 pt-28 sm:px-10 tablet:pb-24 tablet:pt-32">

        {/* ── upper block: service list + client logos, on the half opposite the headline ── */}
        <div className={`flex ${isAr ? 'justify-start' : 'justify-end'}`}>
          <div
            className={`w-full max-w-[520px] transition-[opacity,transform] duration-[900ms] ease-out ${
              ready ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <ul className="space-y-1">
              {SERVICES.map((key, i) => (
                <li
                  key={key}
                  className="am-lead text-white transition-[opacity,transform] duration-[900ms] ease-out"
                  style={{
                    transitionDelay: `${140 + i * 90}ms`,
                    opacity: ready ? 1 : 0,
                    transform: ready ? 'none' : 'translateY(14px)',
                  }}
                >
                  {t(key)}
                </li>
              ))}
            </ul>

            <div
              className="mt-9 flex flex-wrap items-center gap-x-9 gap-y-5 transition-opacity duration-[900ms] delay-[620ms]"
              style={{ opacity: ready ? 1 : 0 }}
            >
              {LOGOS.map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  width={120}
                  height={34}
                  aria-hidden="true"
                  className="h-[24px] w-auto opacity-70 brightness-0 invert"
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── headline block, anchored to the bottom ── */}
        <div className="mt-auto max-w-[900px] pt-16 tablet:pt-24">
          <h1
            className={`am-h1 transition-[opacity,transform] duration-[1100ms] ease-out ${
              ready ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            {t('hero.h1')}
          </h1>

          <p
            className="am-body mt-7 max-w-[520px] text-[color:var(--am-dim)] transition-[opacity,transform] duration-[900ms] delay-[260ms] ease-out"
            style={{ opacity: ready ? 1 : 0, transform: ready ? 'none' : 'translateY(14px)' }}
          >
            {t('hero.sub')}
          </p>

          <div
            className="mt-9 flex flex-wrap gap-3 transition-[opacity,transform] duration-[900ms] delay-[400ms] ease-out"
            style={{ opacity: ready ? 1 : 0, transform: ready ? 'none' : 'translateY(14px)' }}
          >
            <AmButton href="#contact" tone="dark" variant="solid" flip={isAr}>
              {t('hero.cta1')}
            </AmButton>
            <AmButton href="#services" tone="dark" variant="ghost" flip={isAr}>
              {t('hero.cta2')}
            </AmButton>
          </div>
        </div>
      </div>
    </section>
  );
}
