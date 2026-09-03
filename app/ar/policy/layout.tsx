import type { Metadata } from 'next';

// النسخة العربية — البيانات الوصفية في هذا القالب، والصفحة نفسها مكوّن عميل.
export const metadata: Metadata = {
  title: 'سياسة الخصوصية وشروط الخدمة | واجز تك',
  description:
    'سياسة الخصوصية وشروط الخدمة الخاصة بواجز تك، بما في ذلك إفصاح بيانات تكامل تقييمات جوجل.',
  alternates: {
    canonical: '/ar/policy',
    languages: { en: '/en/policy', ar: '/ar/policy' },
  },
};

export default function ArPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
