'use client';
import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Section, SectionHead } from '@/components/armory/Primitives';

/**
 * Team, rebuilt as the reference's card row: full-bleed portrait, mono role
 * label, name in the display face, bio revealed on hover. Existing keys.
 */

const MEMBERS = [
  { photo: '/Abdullatif-Alwshigry.jpg', name: 'team.m1.name', role: 'team.m1.role', bio: 'team.m1.bio' },
  { photo: '/haroon-bhai.png', name: 'team.m2.name', role: 'team.m2.role', bio: 'team.m2.bio' },
  { photo: '/danish-bhai.png', name: 'team.m3.name', role: 'team.m3.role', bio: 'team.m3.bio' },
];

export default function Team() {
  const { t } = useLanguage();

  return (
    <Section id="team" tone="dark" dots>
      <SectionHead tone="dark" eyebrow={t('team.kicker')} title={t('team.title')} blurb={t('team.sub')} />

      <div className="mt-16 tablet:mt-24 grid grid-cols-1 sm:grid-cols-2 tablet:grid-cols-3 border-t border-white/[0.09]">
        {MEMBERS.map((m) => (
          <article
            key={m.name}
            className="group relative border-b border-white/[0.09] ltr:border-r rtl:border-l border-white/[0.09] p-7 tablet:p-9"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-ink-2">
              <Image
                src={m.photo}
                alt={t(m.name)}
                fill
                sizes="(max-width: 900px) 100vw, 420px"
                className="object-cover object-top grayscale transition-[transform,filter] duration-[900ms] ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            </div>

            <div className="am-meta mt-7 text-white/45">{t(m.role)}</div>
            <h3 className="am-h3 mt-3">{t(m.name)}</h3>
            <p className="am-body mt-4 text-white/60">{t(m.bio)}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
