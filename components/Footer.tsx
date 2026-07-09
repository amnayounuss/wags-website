'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <>
      <footer className={`relative pt-[80px] pb-[40px] mt-[100px] bg-[#050B1A] ${isAr ? 'font-cairo' : 'font-sora'}`}>
        {/* Top Glow Line Separator */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(7,185,143,0.3)] to-transparent"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#07B98F] to-transparent opacity-50 blur-[2px]"></div>
        <div className="container">
          <div className="flex flex-col gap-[60px]">

            {/* Bottom Section */}
            <div className={`flex justify-between items-start flex-wrap gap-[40px] ${isAr ? 'text-right' : ''}`}>

              {/* Brand */}
              <div className="max-w-[400px]">
                <div className={`flex items-center gap-4 mb-6`}>
                  <Image src="/icons/logo.svg" alt="WAGS Tech Logo" width={44} height={44} className="w-[44px] h-[44px] object-contain" />
                  <div className={isAr ? 'text-right' : ''}>
                    <div className={`${isAr ? 'text-[30px] font-cairo' : 'text-[22px] font-sora'} font-extrabold text-white tracking-[-0.02em] leading-[1.2]`}>{isAr ? 'واجز تك' : 'WAGS Tech EST.'}</div>
                    <div className="text-[13px] text-[#07B98F] font-semibold tracking-[0.05em]">{isAr ? 'حلول أودو وتقنية المعلومات' : 'Odoo ERP & IT Solutions'}</div>
                  </div>
                </div>
                <p className="text-[16px] text-slate-400 leading-[1.6] mb-8">
                  {t('footer.desc')}
                </p>
                <div className={`flex gap-4`}>
                  <a href="#" aria-label="LinkedIn" className="text-slate-400 transition-colors duration-300 hover:text-[#07B98F]"><FaLinkedin size={20} /></a>
                  <a href="#" aria-label="Twitter" className="text-slate-400 transition-colors duration-300 hover:text-[#07B98F]"><FaTwitter size={20} /></a>
                  <a href="#" aria-label="Instagram" className="text-slate-400 transition-colors duration-300 hover:text-[#07B98F]"><FaInstagram size={20} /></a>
                </div>
              </div>

              {/* Contact info */}
              <div className={`min-w-[200px] ${isAr ? 'text-right' : 'text-left'}`}>
                <div className="text-[13px] font-bold tracking-[0.1em] uppercase text-slate-400 mb-5">{t('footer.contact')}</div>
                <a href="mailto:info@wags.sa" className="inline-block text-[20px] font-semibold text-white mb-3 no-underline transition-colors duration-300 hover:text-[#07B98F] font-sora" dir="ltr">info@wags.sa</a>
                <p className="text-[15px] text-slate-400 leading-[1.6] whitespace-pre-line">{t('footer.address')}</p>
              </div>

            </div>

            {/* Bottom Section */}
            <div className={`flex justify-between items-center flex-wrap gap-5 pt-8 border-t border-white/10`}>
              <div className="text-[14px] text-slate-400">{t('footer.copy')}</div>
              <div className={`flex gap-6 flex-wrap`}>
                <Link href="/privacy" className="text-slate-400 text-[14px] no-underline transition-colors duration-300 hover:text-[#07B98F]">{t('footer.privacy')}</Link>
                <Link href="#" className="text-slate-400 text-[14px] no-underline transition-colors duration-300 hover:text-[#07B98F]">{t('footer.terms')}</Link>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}
