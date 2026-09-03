'use client';
import React from 'react';
import Link from 'next/link';
import { KeyRound, RefreshCw, Sparkles, BarChart3, MessageSquareReply, Lock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// One icon per capability — order matches gr.c1 … gr.c6 in the locale files
const CARDS = [
  { n: 1, Icon: KeyRound },           // Connect with Google (OAuth consent)
  { n: 2, Icon: RefreshCw },          // Reviews sync automatically
  { n: 3, Icon: Sparkles },           // AI sentiment and topics
  { n: 4, Icon: BarChart3 },          // Analytics inside Odoo
  { n: 5, Icon: MessageSquareReply }, // AI reply drafts
  { n: 6, Icon: Lock },               // Your data stays yours
];

export default function GoogleReviews() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';
  const font = isAr ? 'font-arabic' : 'font-inter';
  const heading = isAr ? 'font-arabic' : 'font-grotesk';

  return (
    <section
      id="google-reviews"
      className={`relative z-[2] py-[64px] sm:py-[80px] tablet:py-[120px] text-wg-text ${font}`}
    >
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-8 relative z-[2]">

        {/* section-head — matches the other sections: max-w 640, mb 56 */}
        <div className="reveal max-w-[640px] mb-10 sm:mb-[56px]">
          <div className={`text-[12px] font-semibold leading-[18px] text-wg-teal mb-[14px] ${isAr ? 'tracking-normal' : 'tracking-[0.14em] uppercase'}`}>
            {t('gr.kicker')}
          </div>
          <h2 className={`${heading} text-[clamp(26px,4vw,44px)] font-semibold leading-[1.35] sm:leading-[1.5] tracking-[-0.01em] text-wg-text`}>
            {t('gr.head')}
          </h2>
          <p className="mt-[14px] text-[15px] sm:text-[16px] leading-[24px] text-wg-muted">{t('gr.blurb')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 tablet:grid-cols-3 gap-4 sm:gap-5">
          {CARDS.map(({ n, Icon }) => (
            <div
              key={n}
              className="reveal group bg-wg-panel border border-wg-line rounded-[18px] p-6 sm:p-[30px] shadow-[0_2px_18px_rgba(20,10,20,0.04)] transition-[transform,border-color,box-shadow] duration-[250ms] will-change-transform hover:border-wg-purple-bright hover:shadow-[0_18px_36px_rgba(113,75,103,.16)]"
            >
              <div className="w-11 h-11 rounded-[12px] bg-gradient-to-br from-wg-purple to-wg-teal mb-4 sm:mb-[18px] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105">
                <Icon size={22} strokeWidth={2} aria-hidden="true" />
              </div>
              <h3 className={`${heading} text-[17px] sm:text-[18px] font-semibold leading-[27px] tracking-normal text-wg-text mb-2.5`}>
                {t(`gr.c${n}.t`)}
              </h3>
              <p className="text-[14px] leading-[21px] text-wg-muted">{t(`gr.c${n}.d`)}</p>
            </div>
          ))}
        </div>

        {/* Compliance note — the disclosure Google's OAuth reviewers look for, linking to the full policy */}
        <div className="reveal mt-6 sm:mt-8 bg-wg-panel border border-wg-line rounded-[18px] p-6 sm:p-[30px] shadow-[0_2px_18px_rgba(20,10,20,0.04)]">
          <p className="text-[14px] leading-[22px] text-wg-muted">{t('gr.note')}</p>
          <Link
            href={`/${language}/policy`}
            className={`${heading} inline-flex items-center gap-2 mt-4 text-[14px] font-semibold text-wg-purple-bright no-underline transition-colors duration-200 hover:text-wg-teal`}
          >
            {t('gr.cta')}
            <span aria-hidden="true">{isAr ? '←' : '→'}</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
