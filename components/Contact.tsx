'use client';
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { GridLines, Eyebrow } from '@/components/armory/Primitives';
import DotField from '@/components/armory/DotField';

/**
 * Contact, rebuilt as the reference's closing CTA: a heading column on one
 * side, the form on the other, square-cornered fields on hairline rules.
 * Every field, option and label is the existing key.
 */

export default function Contact() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';
  const [sent, setSent] = useState(false);

  const field =
    'w-full bg-transparent border-b border-white/[0.14] px-0 py-4 text-[15px] font-light leading-[24px] text-white outline-none transition-colors duration-200 placeholder:text-white/35 focus:border-white/55';

  return (
    <section id="contact" className="relative isolate overflow-hidden bg-ink text-white">
      {/* animated dot-matrix field, rebuilt procedurally rather than loaded as a
          video. Finer cells and a lower vertical noise frequency than the footer
          copy, which is what gives the reference its vertical streaking. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <DotField
          spacing={5}
          dotW={1.6}
          dotH={3.2}
          scaleX={0.038}
          scaleY={0.016}
          speed={0.05}
          floor={0.045}
          gain={1.7}
        />
        {/* keep the copy side readable while the far side stays bright */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,6,6,.74)_0%,rgba(6,6,6,.34)_45%,rgba(6,6,6,.05)_100%)] rtl:bg-[linear-gradient(270deg,rgba(6,6,6,.74)_0%,rgba(6,6,6,.34)_45%,rgba(6,6,6,.05)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink to-transparent" />
      </div>

      <GridLines tone="dark" />

      <div className="relative z-[2] mx-auto max-w-[1440px] px-6 py-24 sm:px-10 tablet:py-32">
        <div className="tablet:grid tablet:grid-cols-[0.9fr_1.1fr] tablet:gap-20">

          {/* heading + details */}
          <div>
            <Eyebrow tone="dark">{isAr ? 'ابدأ الآن' : 'Get Started'}</Eyebrow>
            <h2 className="am-h2 mt-6">{t('contact.title')}</h2>
            <p className="am-body-lg mt-7 max-w-[440px] text-white/70">{t('contact.sub')}</p>

            <dl className="mt-12 border-t border-white/[0.09]">
              {[
                { k: isAr ? 'البريد' : 'Email', v: 'info@wags.sa', ltr: true },
                { k: isAr ? 'الموقع' : 'Location', v: t('contact.address'), ltr: false },
                { k: t('contact.whatsapp'), v: '+966 57 357 6073', ltr: true },
              ].map((row) => (
                <div key={row.k} className="flex items-baseline justify-between gap-6 border-b border-white/[0.09] py-5">
                  <dt className="am-meta text-white/45">{row.k}</dt>
                  <dd className="text-[15px] font-light" dir={row.ltr ? 'ltr' : undefined}>{row.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* form */}
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="mt-14 grid grid-cols-1 gap-x-8 gap-y-2 tablet:mt-0 sm:grid-cols-2"
          >
            <input type="text" required placeholder={t('contact.form.name')} className={field} />
            <input type="text" placeholder={t('contact.form.company')} className={field} />
            <input type="email" required placeholder={t('contact.form.email')} className={field} />
            <input type="tel" placeholder={t('contact.form.phone')} className={field} dir={isAr ? 'rtl' : 'ltr'} />

            <select className={`${field} sm:col-span-2 cursor-pointer [&>option]:bg-ink`} defaultValue="">
              <option value="">{t('contact.form.service')}</option>
              <option>{t('contact.opt.erp')}</option>
              <option>{t('contact.opt.pos')}</option>
              <option>{t('contact.opt.zatca')}</option>
              <option>{t('contact.opt.other')}</option>
            </select>

            <textarea placeholder={t('contact.form.details')} className={`${field} sm:col-span-2 h-[104px] resize-none`} />

            <button
              type="submit"
              className="group mt-8 inline-flex items-stretch overflow-hidden bg-white text-ink transition-shadow duration-200 hover:shadow-[0_10px_30px_rgba(255,255,255,.16)] sm:col-span-2 sm:justify-self-start"
            >
              <span className="flex w-[38px] shrink-0 items-center justify-center bg-ink text-white" aria-hidden="true">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M1 1h2v2H1zM5 3h2v2H5zM9 5h2v2H9zM3 5h2v2H3zM7 7h2v2H7zM1 9h2v2H1z" />
                </svg>
              </span>
              <span className="flex items-center gap-2 px-6 py-[13px] text-[14px] font-medium leading-none">
                {sent ? t('contact.form.sent') : t('contact.form.send')}
                <svg
                  width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                  className={`shrink-0 transition-transform duration-200 ${isAr ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
