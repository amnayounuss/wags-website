'use client';
import React from 'react';
import { notFound, useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import en from '@/locales/en.json';
import ar from '@/locales/ar.json';

// /en/policy and /ar/policy are the URLs registered with Google as our privacy
// policy and terms of service, so they render in the URL's language regardless
// of the language the visitor has toggled the rest of the site into.
// (Metadata and static params live in the sibling layout.tsx.)
const DICTS: Record<string, Record<string, string>> = { en, ar };

export default function PolicyPage() {
  const { locale } = useParams<{ locale: string }>();
  const dict = DICTS[locale];
  if (!dict) notFound();

  const isAr = locale === 'ar';
  const t = (key: string) => dict[key] ?? key;

  const body = isAr ? 'font-arabic' : 'font-inter';
  const heading = isAr ? 'font-arabic' : 'font-grotesk';
  const list = `flex flex-col gap-2.5 ${isAr ? 'pr-6' : 'pl-6'} list-disc marker:text-wg-teal`;

  const H2 = ({ id, children }: { id: string; children: React.ReactNode }) => (
    <h2
      id={id}
      className={`${heading} scroll-mt-[120px] text-[clamp(22px,3vw,30px)] font-semibold leading-[1.4] text-wg-text mt-12 mb-4 pt-8 border-t border-wg-line first:mt-0 first:pt-0 first:border-0`}
    >
      {children}
    </h2>
  );

  const H3 = ({ children }: { children: React.ReactNode }) => (
    <h3 className={`${heading} text-[17px] sm:text-[18px] font-semibold leading-[27px] text-wg-text mt-8 mb-2.5`}>
      {children}
    </h3>
  );

  return (
    <>
      {/* Same fixed light backdrop the landing page uses — sections themselves are transparent */}
      <div className="app-bg" />

      <Navbar />

      <main
        dir={isAr ? 'rtl' : 'ltr'}
        className={`relative z-[2] pt-[120px] sm:pt-[140px] pb-[80px] sm:pb-[100px] min-h-screen text-wg-text ${body} ${isAr ? 'text-right' : 'text-left'}`}
      >
        <div className="max-w-[820px] mx-auto px-5 sm:px-6 lg:px-8">

          <div className={`text-[12px] font-semibold leading-[18px] text-wg-teal mb-[14px] ${isAr ? 'tracking-normal' : 'tracking-[0.14em] uppercase'}`}>
            {isAr ? 'واجز تك' : 'WAGS Tech'}
          </div>
          <h1 className={`${heading} text-[clamp(30px,5vw,46px)] font-semibold leading-[1.25] tracking-[-0.01em] text-wg-text`}>
            {t('policy.title')}
          </h1>
          <p className="mt-3 text-[13px] leading-[20px] text-wg-muted">{t('policy.updated')}</p>
          <p className="mt-4 text-[15px] sm:text-[16px] leading-[26px] text-wg-muted">{t('policy.lead')}</p>

          {/* Jump links — Google's OAuth reviewers land here and look for the data disclosure */}
          <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[14px]">
            <a href="#privacy" className="text-wg-purple-bright no-underline hover:text-wg-teal">{t('policy.toc.privacy')}</a>
            <a href="#google-data" className="text-wg-purple-bright no-underline hover:text-wg-teal">{t('policy.toc.google')}</a>
            <a href="#terms" className="text-wg-purple-bright no-underline hover:text-wg-teal">{t('policy.toc.terms')}</a>
          </nav>

          <div className="mt-10 flex flex-col gap-4 text-[15px] sm:text-[16px] leading-[27px] text-wg-muted">

            {/* ------------------------------ Privacy policy ------------------------------ */}
            <H2 id="privacy">{t('privacy.title')}</H2>
            <p>{t('privacy.intro')}</p>

            <H3>{t('privacy.section1.title')}</H3>
            <p>{t('privacy.section1.desc')}</p>
            <ul className={list}>
              <li><strong className="text-wg-text">{t('privacy.section1.li1.strong')}</strong> {t('privacy.section1.li1.text')}</li>
              <li><strong className="text-wg-text">{t('privacy.section1.li2.strong')}</strong> {t('privacy.section1.li2.text')}</li>
            </ul>

            <H3>{t('privacy.section2.title')}</H3>
            <p>{t('privacy.section2.desc')}</p>
            <ul className={list}>
              <li>{t('privacy.section2.li1')}</li>
              <li>{t('privacy.section2.li2')}</li>
              <li>{t('privacy.section2.li3')}</li>
            </ul>
            <p>{t('privacy.section2.footer')}</p>

            <H3>{t('privacy.section3.title')}</H3>
            <p>{t('privacy.section3.desc')}</p>
            <ul className={list}>
              <li>{t('privacy.section3.li1')}</li>
              <li>{t('privacy.section3.li2')}</li>
            </ul>

            <H3>{t('privacy.section4.title')}</H3>
            <p>{t('privacy.section4.desc')}</p>

            <H3>{t('privacy.section5.title')}</H3>
            <p>{t('privacy.section5.desc')}</p>

            <H3>{t('privacy.section6.title')}</H3>
            <p>
              {t('privacy.section6.desc')}{' '}
              <a href="mailto:info@wags.sa" dir="ltr" className="text-wg-purple-bright underline">info@wags.sa</a>.
            </p>

            {/* --------------------------- Google user data --------------------------- */}
            <H2 id="google-data">{t('gapi.title')}</H2>
            <p>{t('gapi.desc')}</p>

            <H3>{t('gapi.scopes.title')}</H3>
            <p>{t('gapi.scopes.desc')}</p>
            <ul className={list}>
              <li>
                <strong className="text-wg-text">{t('gapi.scopes.li1.strong')}</strong> {t('gapi.scopes.li1.text')}
                <br />
                <code dir="ltr" className="inline-block mt-1 text-[13px] text-wg-teal break-all">
                  https://www.googleapis.com/auth/business.manage
                </code>
              </li>
              <li>
                <strong className="text-wg-text">{t('gapi.scopes.li2.strong')}</strong> {t('gapi.scopes.li2.text')}
                <br />
                <code dir="ltr" className="inline-block mt-1 text-[13px] text-wg-teal break-all">
                  openid · userinfo.email · userinfo.profile
                </code>
              </li>
            </ul>
            <p>{t('gapi.scopes.note')}</p>

            <H3>{t('gapi.data.title')}</H3>
            <ul className={list}>
              <li>{t('gapi.data.li1')}</li>
              <li>{t('gapi.data.li2')}</li>
              <li>{t('gapi.data.li3')}</li>
            </ul>
            <p>{t('gapi.data.note')}</p>

            <H3>{t('gapi.use.title')}</H3>
            <ul className={list}>
              <li>{t('gapi.use.li1')}</li>
              <li>{t('gapi.use.li2')}</li>
              <li>{t('gapi.use.li3')}</li>
            </ul>
            <p>{t('gapi.use.note')}</p>

            {/* Limited Use wording is quoted verbatim from Google's requirement — do not paraphrase */}
            <H3>{t('gapi.limited.title')}</H3>
            <div className="bg-wg-panel border border-wg-line rounded-[18px] p-5 sm:p-[26px] shadow-[0_2px_18px_rgba(20,10,20,0.04)]">
              <p className="text-wg-text">{t('gapi.limited.desc')}</p>
              <ul className={`${list} mt-3`}>
                <li>{t('gapi.limited.li1')}</li>
                <li>{t('gapi.limited.li2')}</li>
                <li>{t('gapi.limited.li3')}</li>
                <li>{t('gapi.limited.li4')}</li>
              </ul>
              <p className="mt-3 text-[14px]">
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  dir="ltr"
                  className="text-wg-purple-bright underline break-all"
                >
                  Google API Services User Data Policy
                </a>
              </p>
            </div>

            <H3>{t('gapi.ai.title')}</H3>
            <p>{t('gapi.ai.desc')}</p>

            <H3>{t('gapi.security.title')}</H3>
            <p>{t('gapi.security.desc')}</p>

            <H3>{t('gapi.retention.title')}</H3>
            <p>
              {t('gapi.retention.desc')}{' '}
              <a
                href="https://myaccount.google.com/permissions"
                target="_blank"
                rel="noopener noreferrer"
                dir="ltr"
                className="text-wg-purple-bright underline break-all"
              >
                myaccount.google.com/permissions
              </a>.
            </p>
            <p>{t('gapi.retention.desc2')}</p>

            {/* ------------------------------ Terms of service ------------------------------ */}
            <H2 id="terms">{t('terms.title')}</H2>
            <p>{t('terms.intro')}</p>

            <H3>{t('terms.s1.title')}</H3>
            <p>{t('terms.s1.desc')}</p>

            <H3>{t('terms.s2.title')}</H3>
            <p>{t('terms.s2.desc')}</p>

            <H3>{t('terms.s3.title')}</H3>
            <p>{t('terms.s3.desc')}</p>

            <H3>{t('terms.s4.title')}</H3>
            <p>{t('terms.s4.desc')}</p>
            <ul className={list}>
              <li>{t('terms.s4.li1')}</li>
              <li>{t('terms.s4.li2')}</li>
              <li>{t('terms.s4.li3')}</li>
            </ul>

            <H3>{t('terms.s5.title')}</H3>
            <p>{t('terms.s5.desc')}</p>

            <H3>{t('terms.s6.title')}</H3>
            <p>{t('terms.s6.desc')}</p>

            <H3>{t('terms.s7.title')}</H3>
            <p>{t('terms.s7.desc')}</p>

            <H3>{t('terms.s8.title')}</H3>
            <p>{t('terms.s8.desc')}</p>

            <H3>{t('terms.s9.title')}</H3>
            <p>{t('terms.s9.desc')}</p>

            <H3>{t('terms.s10.title')}</H3>
            <p>{t('terms.s10.desc')}</p>

            <H3>{t('terms.s11.title')}</H3>
            <p>{t('terms.s11.desc')}</p>

            <H3>{t('terms.s12.title')}</H3>
            <p>
              {t('terms.s12.desc')}{' '}
              <a href="mailto:info@wags.sa" dir="ltr" className="text-wg-purple-bright underline">info@wags.sa</a>.
            </p>

            {/* Language switch that keeps the reader on this document */}
            <p className="mt-10 pt-8 border-t border-wg-line text-[14px]">
              <a href={isAr ? '/en/policy' : '/ar/policy'} className="text-wg-purple-bright no-underline hover:text-wg-teal">
                {isAr ? 'Read this page in English' : 'اقرأ هذه الصفحة بالعربية'}
              </a>
            </p>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
