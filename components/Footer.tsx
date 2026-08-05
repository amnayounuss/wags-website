'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';
  const font = isAr ? 'font-arabic' : 'font-inter';

  // Reference: Inter 400, 13px / 19.5px, --muted, padding 48px 0
  return (
    <footer className={`relative z-[2] border-t border-wg-line py-10 sm:py-12 text-wg-muted text-[13px] leading-[19.5px] ${font}`}>
      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-8 flex flex-col items-center gap-6 text-center tablet:flex-row tablet:justify-between tablet:items-center tablet:gap-5 tablet:text-start">

        {/* Brand — reference: Inter 700, 18px / 27px, .02em, inherits --muted */}
        <div className="flex items-center gap-[10px] font-bold text-[17px] leading-[26px] tracking-[0.02em] sm:text-[18px] sm:leading-[27px]">
          <Image
            src="/logo.png"
            alt="WAGS Tech"
            width={440}
            height={256}
            className="h-8 w-auto shrink-0"
          />
          <span className="whitespace-nowrap">{isAr ? 'واجز تك' : 'WAGS Tech'}</span>
        </div>

        <div className="order-3 tablet:order-none">{t('footer.copy')}</div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link href="/privacy" className="transition-colors duration-200 hover:text-wg-text">{t('footer.privacy')}</Link>
          <Link href="#" className="transition-colors duration-200 hover:text-wg-text">{t('footer.terms')}</Link>
        </div>

      </div>
    </footer>
  );
}
