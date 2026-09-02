'use client';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Section, SectionHead, CornerTicks } from '@/components/armory/Primitives';

/**
 * Process, rebuilt as the reference's numbered step rows: mono index, hairline
 * separators, and a step that lifts on hover. Copy keys unchanged.
 */

const STEPS = [
  { t: 'process.s1.t', d: 'process.s1.d' },
  { t: 'process.s2.t', d: 'process.s2.d' },
  { t: 'process.s3.t', d: 'process.s3.d' },
  { t: 'process.s4.t', d: 'process.s4.d' },
];

export default function Process() {
  const { t } = useLanguage();

  return (
    <Section id="process" tone="dark" dots>
      <SectionHead
        tone="dark"
        eyebrow={t('process.kicker')}
        title={t('process.title')}
        blurb={t('process.sub')}
      />

      <div className="mt-16 tablet:mt-24 border-t border-white/[0.09]">
        {STEPS.map((s, i) => (
          <div
            key={s.t}
            className="group relative grid grid-cols-1 gap-4 border-b border-white/[0.09] py-9 tablet:grid-cols-[130px_1fr_1.2fr] tablet:items-start tablet:gap-10 tablet:py-12 transition-colors duration-300 hover:bg-white/[0.025]"
          >
            <CornerTicks tone="dark" />
            <span className="am-meta text-white/45">
              {`0${i + 1}`} &nbsp;/&nbsp; {`0${STEPS.length}`}
            </span>
            <h3 className="am-h3">{t(s.t)}</h3>
            <p className="am-body text-white/70 tablet:pt-2">{t(s.d)}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
