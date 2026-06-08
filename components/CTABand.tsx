'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext';
import { CalendarDays } from 'lucide-react';

export default function CTABand() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <section className={`py-[20px] md:py-[30px] relative ${isAr ? 'font-cairo' : 'font-sora'}`}>
      <div className="container">
        <div className={`cta-band w-full !m-0 !max-w-none bg-gradient-to-br from-navy-2 to-[#0D1F3C] border border-[rgba(0,229,199,0.18)] rounded-[24px] py-[32px] px-[40px] md:py-[40px] md:px-[60px] flex items-center justify-between gap-8 shadow-[0_20px_60px_-16px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)] ${isAr ? 'flex-row-reverse text-right' : ''}`}>
          <div className="cta-content">
            <h2 className={`text-[clamp(24px,3vw,38px)] font-black text-white leading-[1.15] -tracking-[0.03em] mb-3 ${isAr ? 'font-cairo' : 'font-sora'}`}>
              {t('cta.title1')}<span className="bg-gradient-to-r from-teal to-teal-2 bg-clip-text text-transparent">{t('cta.title2')}</span>{t('cta.title3')}
            </h2>
            <p className={`text-sm md:text-base text-[rgba(255,255,255,0.6)] leading-[1.7] max-w-[520px] ${isAr ? 'mr-0 ml-auto' : ''}`}>
              {t('cta.sub')}
            </p>
          </div>
          <Link href="#contact" className={`btn-primary flex-shrink-0 flex items-center gap-2 ${isAr ? 'flex-row-reverse' : ''}`}>
            <CalendarDays className="w-5 h-5" />
            {t('cta.btn')}
          </Link>
        </div>
      </div>
    </section>
  )
}