'use client';
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { GridLines, Eyebrow, AmButton } from '@/components/armory/Primitives';

/**
 * FAQ, rebuilt as the reference's split: a sticky heading column on one side,
 * an icon-led accordion on the other. Existing q/a keys, unchanged.
 */

const QA = [
  { q: 'faq.q1', a: 'faq.a1' },
  { q: 'faq.q2', a: 'faq.a2' },
  { q: 'faq.q3', a: 'faq.a3' },
  { q: 'faq.q4', a: 'faq.a4' },
  { q: 'faq.q5', a: 'faq.a5' },
];

export default function FAQ() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative isolate overflow-hidden bg-paper text-ink">
      <GridLines tone="light" />

      <div className="relative z-[2] mx-auto max-w-[1440px] tablet:grid tablet:grid-cols-[0.85fr_1.15fr]">
        {/* sticky heading */}
        <div className="px-6 pt-24 sm:px-10 tablet:pb-24 tablet:pt-32">
          <div className="tablet:sticky tablet:top-32">
            <Eyebrow tone="light">{t('faq.kicker')}</Eyebrow>
            <h2 className="am-h2 mt-6">{t('faq.title')}</h2>
            <p className="am-body-lg mt-8 max-w-[400px] text-ink/65">{t('faq.sub')}</p>
            <div className="mt-9">
              <AmButton href="#contact" tone="light" variant="solid" flip={isAr}>
                {t('hero.cta1')}
              </AmButton>
            </div>
          </div>
        </div>

        {/* accordion */}
        <div className="mt-10 tablet:mt-0 border-t border-ink/[0.09] ltr:border-l rtl:border-r border-ink/[0.09] tablet:mt-32 tablet:mb-32">
          {QA.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-ink/[0.09]">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 px-6 py-6 ltr:text-left rtl:text-right transition-colors duration-200 hover:bg-ink/[0.03] tablet:px-10"
                >
                  <span className="am-meta shrink-0 text-ink/40">{`0${i + 1}`}</span>
                  <span className="flex-1 text-[16px] font-normal leading-[24px]">{t(item.q)}</span>
                  <span
                    aria-hidden="true"
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-ink/20 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  className="grid overflow-hidden transition-[grid-template-rows] duration-[400ms] ease-[cubic-bezier(.22,1,.36,1)]"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="min-h-0">
                    <p className="am-body px-6 pb-7 text-ink/65 ltr:pl-[62px] rtl:pr-[62px] tablet:px-10 tablet:ltr:pl-[86px] tablet:rtl:pr-[86px]">
                      {t(item.a)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
