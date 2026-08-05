'use client';
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';
  const font = isAr ? 'font-arabic' : 'font-inter';
  const [sent, setSent] = useState(false);

  // Reference: font-family Inter, 14px/normal, padding 13px 16px, radius 12px, bg #F4F0F3
  const field =
    `w-full bg-[#F4F0F3] border border-wg-line rounded-[12px] px-4 py-[13px] text-wg-text text-[14px] leading-[normal] outline-none transition-colors duration-200 focus:border-wg-teal placeholder:text-wg-muted ${font}`;

  return (
    <section id="contact" className={`relative z-[2] !py-[64px] sm:!py-[80px] tablet:!py-[120px] ${font}`}>
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-8 relative z-[2]">
        <div className="reveal relative overflow-hidden bg-wg-panel border border-wg-line rounded-[20px] sm:rounded-[28px] p-6 sm:p-8 lg:p-14 grid grid-cols-1 tablet:grid-cols-[1fr_1.1fr] gap-8 sm:gap-10 tablet:gap-12 lg:gap-14 shadow-[0_20px_60px_rgba(20,10,20,0.06)]">

          {/* purple blur blob (reference ::before) */}
          <div className="pointer-events-none absolute w-[300px] h-[300px] -top-20 -right-20 bg-wg-purple opacity-[0.14] blur-[100px] rounded-full" />

          {/* Left: info */}
          <div className="relative z-[2]">
            {/* Reference: Space Grotesk 700, 32px / 48px, letter-spacing normal */}
            <h2 className={`${isAr ? 'font-arabic' : 'font-grotesk'} text-[26px] leading-[38px] sm:text-[30px] sm:leading-[44px] tablet:text-[32px] tablet:leading-[48px] font-bold text-wg-text mb-4 tracking-normal`}>
              {t('contact.title')}
            </h2>
            {/* Reference: Inter 400, 16px / 24px, --muted */}
            <p className="text-wg-muted mb-6 sm:mb-[26px] text-[15px] sm:text-[16px] leading-[24px]">{t('contact.sub')}</p>

            {/* Reference: Inter 400, 14px / 21px, --text */}
            <div className="flex gap-3 items-center text-wg-text text-[14px] leading-[21px] mb-[14px]">
              <span className="w-2 h-2 rounded-full bg-wg-teal shrink-0" />
              <span dir="ltr">info@wags.sa</span>
            </div>
            <div className="flex gap-3 items-center text-wg-text text-[14px] leading-[21px] mb-[14px]">
              <span className="w-2 h-2 rounded-full bg-wg-teal shrink-0" />
              <span>{t('contact.address')}</span>
            </div>
            <div className="flex gap-3 items-center text-wg-text text-[14px] leading-[21px] mb-[14px]">
              <span className="w-2 h-2 rounded-full bg-wg-teal shrink-0" />
              <span>
                {t('contact.whatsapp')} <span dir="ltr">+966 57 357 6073</span>
              </span>
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="relative z-[2] grid grid-cols-1 sm:grid-cols-2 gap-[14px]"
          >
            <input type="text" required placeholder={t('contact.form.name')} className={field} />
            <input type="text" placeholder={t('contact.form.company')} className={field} />
            <input type="email" required placeholder={t('contact.form.email')} className={field} />
            <input type="tel" placeholder={t('contact.form.phone')} className={field} dir={isAr ? 'rtl' : 'ltr'} />

            <select className={`${field} sm:col-span-2 cursor-pointer`} defaultValue="">
              <option value="">{t('contact.form.service')}</option>
              <option>{t('contact.opt.erp')}</option>
              <option>{t('contact.opt.pos')}</option>
              <option>{t('contact.opt.zatca')}</option>
              <option>{t('contact.opt.other')}</option>
            </select>

            <textarea placeholder={t('contact.form.details')} className={`${field} sm:col-span-2 h-[90px] resize-none`} />

            <button
              type="submit"
              className={`sm:col-span-2 inline-flex items-center justify-center gap-2 bg-wg-teal text-[#0B0710] font-semibold text-[14px] leading-[normal] py-[11px] px-[22px] rounded-full border-none cursor-pointer transition-[transform,box-shadow] duration-[250ms] ease-[cubic-bezier(.2,.8,.2,1)] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(0,217,192,.35)] ${font}`}
            >
              {sent ? t('contact.form.sent') : t('contact.form.send')}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
