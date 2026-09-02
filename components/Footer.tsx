'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { GridLines, Eyebrow } from '@/components/armory/Primitives';
import DotField from '@/components/armory/DotField';

/**
 * Footer, rebuilt to the reference's closing block: a quick-links column set on
 * the hairline grid, with the wordmark and legal row beneath. Existing keys.
 */

const LINKS: { key: string; href: string }[] = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.whyus', href: '#why' },
  { key: 'nav.process', href: '#process' },
  { key: 'nav.services', href: '#services' },
  { key: 'nav.integrations', href: '#integrations' },
  { key: 'nav.team', href: '#team' },
  { key: 'nav.clients', href: '#clients' },
  { key: 'nav.faq', href: '#faq' },
];

export default function Footer() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <footer className="relative isolate overflow-hidden bg-ink text-white">
      {/* animated dot-matrix field, rebuilt procedurally rather than loaded as
          a video - it fades out towards the legal row so the links stay legible */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 opacity-[0.85]">
        <DotField />
        <div className="absolute inset-0 bg-[radial-gradient(130%_110%_at_50%_0%,transparent_18%,rgba(6,6,6,.35)_62%,rgba(6,6,6,.88)_100%)]" />
      </div>

      <GridLines tone="dark" />

      <div className="relative z-[2] mx-auto max-w-[1440px] px-6 py-20 sm:px-10 tablet:py-24">
        <div className="tablet:grid tablet:grid-cols-[1.2fr_1fr] tablet:gap-20">
          {/* wordmark + contact */}
          <div>
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="WAGS Tech" width={440} height={256} className="h-9 w-auto shrink-0" />
              <span className="text-[20px] font-medium tracking-[-.4px]">{isAr ? 'واجز تك' : 'WAGS Tech'}</span>
            </div>
            <p className="am-body mt-7 max-w-[380px] text-white/55">{t('contact.sub')}</p>
            <div className="am-meta mt-8 space-y-2 text-white/45">
              <div dir="ltr" className={isAr ? 'text-right' : ''}>info@wags.sa</div>
              <div dir="ltr" className={isAr ? 'text-right' : ''}>+966 57 357 6073</div>
              <div>{t('contact.address')}</div>
            </div>
          </div>

          {/* quick links */}
          <div className="mt-14 tablet:mt-0">
            <Eyebrow tone="dark">{isAr ? 'روابط' : 'Quick Links'}</Eyebrow>
            <ul className="mt-7 grid grid-cols-2 gap-x-8">
              {LINKS.map((l) => (
                <li key={l.key} className="border-b border-white/[0.09]">
                  <a
                    href={l.href}
                    className="block py-3.5 text-[15px] font-light text-white/65 transition-colors duration-200 hover:text-white"
                  >
                    {t(l.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* legal row */}
        <div className="mt-16 flex flex-col items-start gap-4 border-t border-white/[0.09] pt-8 tablet:flex-row tablet:items-center tablet:justify-between">
          <div className="am-meta text-white/45">{t('footer.copy')}</div>
          <div className="flex gap-8">
            <Link href="/privacy" className="am-meta text-white/45 transition-colors duration-200 hover:text-white">
              {t('footer.privacy')}
            </Link>
            <Link href="#" className="am-meta text-white/45 transition-colors duration-200 hover:text-white">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
