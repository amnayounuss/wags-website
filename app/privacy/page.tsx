'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

// The policy now lives at /en/policy and /ar/policy — the URLs registered with
// Google. This route is kept so older links keep working.
export default function PrivacyRedirect() {
  const router = useRouter();
  const { language } = useLanguage();

  useEffect(() => {
    router.replace(`/${language}/policy`);
  }, [router, language]);

  return (
    <main className="min-h-screen flex items-center justify-center p-6 text-wg-muted font-inter text-[14px]">
      <a href={`/${language}/policy`} className="text-wg-purple-bright underline">
        Privacy Policy &amp; Terms of Service
      </a>
    </main>
  );
}
