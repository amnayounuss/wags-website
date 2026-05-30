'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function PrivacyPolicy() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <>
      <Navbar />
      <main className={`pt-[140px] pb-[100px] min-h-screen bg-[#050B1A] ${isAr ? 'font-cairo text-right' : 'font-sora text-left'}`}>
        <div className="container mx-auto text-white/85" style={{ maxWidth: '800px' }}>
        
          <h1 className={`text-[clamp(32px,5vw,48px)] font-extrabold text-white mb-[40px] tracking-[-0.02em] ${isAr ? 'font-cairo' : 'font-sora'}`}>
            {t('privacy.title')}
          </h1>
          
          <div className="flex flex-col gap-6 text-[16px] leading-[1.8]">
            <p>
              {t('privacy.intro')}
            </p>

            <h2 className="text-[24px] font-bold text-white mt-5">{t('privacy.section1.title')}</h2>
            <p>{t('privacy.section1.desc')}</p>
            <ul className={`flex flex-col gap-3 ${isAr ? 'pr-6 list-disc' : 'pl-6 list-disc'}`}>
              <li><strong className="text-white">{t('privacy.section1.li1.strong')}</strong> {t('privacy.section1.li1.text')}</li>
              <li><strong className="text-white">{t('privacy.section1.li2.strong')}</strong> {t('privacy.section1.li2.text')}</li>
            </ul>

            <h2 className="text-[24px] font-bold text-white mt-5">{t('privacy.section2.title')}</h2>
            <p>{t('privacy.section2.desc')}</p>
            <ul className={`flex flex-col gap-3 ${isAr ? 'pr-6 list-disc' : 'pl-6 list-disc'}`}>
              <li>{t('privacy.section2.li1')}</li>
              <li>{t('privacy.section2.li2')}</li>
              <li>{t('privacy.section2.li3')}</li>
            </ul>
            <p>{t('privacy.section2.footer')}</p>

            <h2 className="text-[24px] font-bold text-white mt-5">{t('privacy.section3.title')}</h2>
            <p>{t('privacy.section3.desc')}</p>
            <ul className={`flex flex-col gap-3 ${isAr ? 'pr-6 list-disc' : 'pl-6 list-disc'}`}>
              <li>{t('privacy.section3.li1')}</li>
              <li>{t('privacy.section3.li2')}</li>
            </ul>

            <h2 className="text-[24px] font-bold text-white mt-5">{t('privacy.section4.title')}</h2>
            <p>{t('privacy.section4.desc')}</p>

            <h2 className="text-[24px] font-bold text-white mt-5">{t('privacy.section5.title')}</h2>
            <p>{t('privacy.section5.desc')}</p>

            <h2 className="text-[24px] font-bold text-white mt-5">{t('privacy.section6.title')}</h2>
            <p>{t('privacy.section6.desc')} <a href="mailto:info@wags.sa" className="text-[#00f0ff] underline" dir="ltr">info@wags.sa</a>.</p>
          </div>
        
        </div>
      </main>
      <Footer />
    </>
  );
}
