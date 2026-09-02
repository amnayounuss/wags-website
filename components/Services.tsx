'use client';
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { GridLines, Eyebrow, AmButton } from '@/components/armory/Primitives';

/**
 * Services, rebuilt as the reference's feature block: a filter rail across the
 * top and a hairline cell grid of modules beneath. The filter labels and the
 * heading are the existing locale keys; the module names are the Odoo apps the
 * old grid already listed.
 */

type Cat = 'sales' | 'pos' | 'finance' | 'ops' | 'people';

const FILTERS: { key: string; cat: Cat | 'all' }[] = [
  { key: 'services.filter.all', cat: 'all' },
  { key: 'services.filter.sales', cat: 'sales' },
  { key: 'services.filter.pos', cat: 'pos' },
  { key: 'services.filter.finance', cat: 'finance' },
  { key: 'services.filter.ops', cat: 'ops' },
  { key: 'services.filter.people', cat: 'people' },
];

const MODULES: { en: string; ar: string; cat: Cat }[] = [
  { en: 'CRM', ar: 'إدارة العلاقات', cat: 'sales' },
  { en: 'Sales', ar: 'المبيعات', cat: 'sales' },
  { en: 'Quotations', ar: 'عروض الأسعار', cat: 'sales' },
  { en: 'Point of Sale', ar: 'نقاط البيع', cat: 'pos' },
  { en: 'Restaurant POS', ar: 'نقاط بيع المطاعم', cat: 'pos' },
  { en: 'Retail POS', ar: 'نقاط بيع التجزئة', cat: 'pos' },
  { en: 'Accounting', ar: 'المحاسبة', cat: 'finance' },
  { en: 'ZATCA e-Invoicing', ar: 'الفوترة الإلكترونية', cat: 'finance' },
  { en: 'VAT Returns', ar: 'إقرارات الضريبة', cat: 'finance' },
  { en: 'Inventory', ar: 'المخزون', cat: 'ops' },
  { en: 'Purchase', ar: 'المشتريات', cat: 'ops' },
  { en: 'Manufacturing', ar: 'التصنيع', cat: 'ops' },
  { en: 'Employees', ar: 'الموظفون', cat: 'people' },
  { en: 'Payroll', ar: 'الرواتب', cat: 'people' },
  { en: 'Attendance', ar: 'الحضور', cat: 'people' },
  { en: 'Recruitment', ar: 'التوظيف', cat: 'people' },
];

export default function Services() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';
  const [active, setActive] = useState<Cat | 'all'>('all');

  const shown = active === 'all' ? MODULES : MODULES.filter((m) => m.cat === active);

  return (
    <section id="services" className="relative isolate overflow-hidden bg-paper text-ink">
      <GridLines tone="light" />

      <div className="relative z-[2] mx-auto max-w-[1440px] px-6 pt-24 sm:px-10 tablet:pt-32">
        <div className="tablet:flex tablet:items-end tablet:justify-between tablet:gap-16">
          <div className="max-w-[680px]">
            <Eyebrow tone="light">{t('services.kicker')}</Eyebrow>
            <h2 className="am-h2 mt-6">{t('services.head')}</h2>
          </div>
          <p className="am-body-lg mt-8 max-w-[400px] text-ink/65 tablet:mt-0">{t('services.blurb')}</p>
        </div>

        {/* filter rail */}
        <div className="mt-14 flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const on = active === f.cat;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setActive(f.cat)}
                aria-pressed={on}
                className={`am-meta px-4 py-2.5 uppercase transition-colors duration-200 ${
                  on ? 'bg-ink text-white' : 'border border-ink/15 text-ink/60 hover:border-ink/40 hover:text-ink'
                }`}
              >
                {t(f.key)}
              </button>
            );
          })}
        </div>
      </div>

      {/* module cells */}
      <div className="relative z-[2] mt-14 grid grid-cols-2 sm:grid-cols-3 tablet:grid-cols-4 border-t border-ink/[0.09]">
        {shown.map((m, i) => (
          <div
            key={m.en}
            className="group relative flex h-[128px] flex-col justify-between border-b border-ink/[0.09] ltr:border-r rtl:border-l border-ink/[0.09] p-6 transition-colors duration-300 hover:bg-ink/[0.03]"
          >
            <span className="am-meta text-ink/35">{String(i + 1).padStart(2, '0')}</span>
            <span className="am-card-title">{isAr ? m.ar : m.en}</span>
          </div>
        ))}
      </div>

      <div className="relative z-[2] mx-auto max-w-[1440px] px-6 py-16 sm:px-10 tablet:py-20">
        <AmButton href="#contact" tone="light" variant="solid" flip={isAr}>
          {t('hero.cta1')}
        </AmButton>
      </div>
    </section>
  );
}
