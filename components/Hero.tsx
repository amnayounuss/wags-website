'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';
  const font = isAr ? 'font-arabic' : 'font-inter';
  const heading = isAr ? 'font-arabic' : 'font-grotesk';

  const [loaded, setLoaded] = useState(false);
  const [badgeIn, setBadgeIn] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setBadgeIn(true), 100);
    return () => clearTimeout(id);
  }, []);

  return (
    <section id="hero" className={`relative z-[2] text-wg-text ${font}`}>
      {/* wrap: max-width 1180, padding 0 24 */}
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-8 relative z-[2]">
        {/* hero-grid: 1.05fr 1fr, gap 64px, align center, min-height 70vh */}
        <div className="grid grid-cols-1 tablet:grid-cols-[1.05fr_1fr] gap-9 sm:gap-10 tablet:gap-12 lg:gap-16 items-center tablet:min-h-[70vh]">

          {/* ── Copy ── */}
          <div className="reveal">
            {/* kicker: Inter 600, 12px / 18px, ls .14em, uppercase, --teal */}
            <div className={`text-[12px] font-semibold leading-[18px] text-wg-teal mb-[14px] ${isAr ? 'tracking-normal' : 'tracking-[0.14em] uppercase'}`}>
              {t('hero.kicker')}
            </div>

            {/* h1: Space Grotesk 700, 32px / 48px (scaled down on phones, up on wide desktops) */}
            <h1 className={`${heading} font-bold tracking-normal text-wg-text text-[26px] leading-[38px] sm:text-[30px] sm:leading-[44px] tablet:text-[32px] tablet:leading-[48px] xl:text-[38px] xl:leading-[56px]`}>
              {t('hero.h1')}
            </h1>

            {/* sub: Inter 400, 16px / 24px, --muted, max-w 480, margin 18px 0 30px */}
            <p className="mt-4 mb-7 sm:mt-[18px] sm:mb-[30px] max-w-[480px] text-[15px] sm:text-[16px] leading-[24px] text-wg-muted">
              {t('hero.sub')}
            </p>

            {/* hero-cta: flex, gap 16, wrap */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex justify-center items-center gap-2 max-[380px]:w-full bg-wg-teal text-[#0B0710] font-semibold text-[14px] leading-[21px] px-[22px] py-[12px] rounded-full transition-[transform,box-shadow] duration-[250ms] ease-[cubic-bezier(.2,.8,.2,1)] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(0,217,192,.35)]"
              >
                {t('hero.cta1')}
              </a>
              <a
                href="#services"
                className="inline-flex justify-center items-center gap-2 max-[380px]:w-full bg-transparent border border-wg-line text-wg-text font-semibold text-[14px] leading-[21px] px-[22px] py-[12px] rounded-full transition-[transform,border-color] duration-[250ms] ease-[cubic-bezier(.2,.8,.2,1)] hover:-translate-y-[2px] hover:border-wg-teal"
              >
                {t('hero.cta2')}
              </a>
            </div>
          </div>

          {/* ── Photo ── */}
          <div className="reveal relative max-tablet:order-first max-tablet:mb-2">
            {/* frame: radius 28, aspect 16/10.5, shadow 0 30px 70px rgba(20,10,20,.18) */}
            <div className="relative overflow-hidden rounded-[20px] sm:rounded-[28px] aspect-[16/10.5] shadow-[0_18px_44px_rgba(20,10,20,.14)] sm:shadow-[0_30px_70px_rgba(20,10,20,.18)]">
              <Image
                src="/hero-pos.jpg"
                alt={t('hero.photo.alt')}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 521px"
                onLoad={() => setLoaded(true)}
                className={`object-cover object-center transition-[opacity,transform,filter] duration-[1300ms] ease-out ${
                  loaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-[1.08] blur-[6px]'
                }`}
                style={{ transitionDuration: '1300ms, 2200ms, 1300ms' }}
              />
            </div>

            {/* badge: absolute -22px, frosted glass */}
            <div
              className={`absolute bottom-[-16px] sm:bottom-[-22px] ${isAr ? 'right-[-8px] sm:right-[-22px]' : 'left-[-8px] sm:left-[-22px]'} px-4 py-3 sm:px-5 sm:py-4 rounded-[16px] sm:rounded-[18px] bg-white/70 backdrop-blur-[18px] backdrop-saturate-[180%] border border-white/60 shadow-[0_18px_40px_rgba(20,10,20,.14)] transition-[opacity,transform] duration-[800ms] delay-[400ms] ${
                badgeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {/* num: Space Grotesk 700, 22px / 33px, --teal */}
              <div className="font-grotesk font-bold text-[22px] leading-[33px] text-wg-teal" dir="ltr">{t('hero.badge.num')}</div>
              {/* lbl: Inter 400, 12px / 18px, --muted */}
              <div className="text-[12px] leading-[18px] text-wg-muted">{t('hero.badge.lbl')}</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
