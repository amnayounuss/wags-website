'use client';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Section, SectionHead, CellGrid } from '@/components/armory/Primitives';

/**
 * Solve, rebuilt as the reference's four-column service grid: line-art marks,
 * Geist Mono titles, hairline dividers. Copy keys are unchanged.
 */

const ITEMS = [
  { t: 'solve.i1.t', d: 'solve.i1.d' },
  { t: 'solve.i2.t', d: 'solve.i2.d' },
  { t: 'solve.i3.t', d: 'solve.i3.d' },
  { t: 'solve.i4.t', d: 'solve.i4.d' },
];

/** Simple isometric line marks, drawn here rather than lifted from anywhere. */
const MARKS = [
  // stacked plates
  <g key="a"><path d="M4 14l16-8 16 8-16 8-16-8z" /><path d="M4 22l16 8 16-8" /><path d="M4 30l16 8 16-8" /></g>,
  // linked nodes
  <g key="b"><circle cx="11" cy="14" r="5" /><circle cx="29" cy="30" r="5" /><path d="M15 18l10 8" /><circle cx="29" cy="13" r="3" /></g>,
  // shield
  <g key="c"><path d="M20 5l13 5v11c0 8-6 14-13 17-7-3-13-9-13-17V10l13-5z" /><path d="M14 21l4 4 8-8" /></g>,
  // pulse
  <g key="d"><path d="M4 24h8l4-11 6 20 5-13 3 4h6" /><circle cx="36" cy="24" r="2.5" /></g>,
];

export default function Solve() {
  const { t } = useLanguage();

  return (
    <Section id="solve" tone="light">
      <SectionHead
        tone="light"
        eyebrow={t('solve.kicker')}
        title={t('solve.title')}
        blurb={t('solve.sub')}
      />

      <div className="mt-16 tablet:mt-24">
        <CellGrid cols={4} tone="light">
          {ITEMS.map((item, i) => (
            <div key={item.t}>
              <svg
                width="40" height="40" viewBox="0 0 40 44" fill="none"
                stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true" className="mb-9 text-ink/65"
              >
                {MARKS[i]}
              </svg>
              <h3 className="am-card-title">{t(item.t)}</h3>
              <p className="am-body mt-4 text-ink/65">{t(item.d)}</p>
            </div>
          ))}
        </CellGrid>
      </div>
    </Section>
  );
}
