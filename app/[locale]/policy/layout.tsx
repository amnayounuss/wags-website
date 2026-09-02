import type { Metadata } from 'next';
import en from '@/locales/en.json';
import ar from '@/locales/ar.json';

const DICTS: Record<string, Record<string, string>> = { en, ar };

export function generateStaticParams() {
  return Object.keys(DICTS).map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = DICTS[locale];
  if (!dict) return {};
  return {
    title: `${dict['policy.title']} | ${locale === 'ar' ? 'واجز تك' : 'WAGS Tech'}`,
    description: dict['policy.lead'],
    alternates: {
      canonical: `/${locale}/policy`,
      languages: { en: '/en/policy', ar: '/ar/policy' },
    },
  };
}

export default function PolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
