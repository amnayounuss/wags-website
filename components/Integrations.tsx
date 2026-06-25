'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ShieldCheck, CreditCard, ShoppingCart, Truck, CheckCircle, Users, ClipboardCheck, Store, Calculator, HeartHandshake, Package, ShoppingBag, Briefcase, Headset, Ticket } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}` : '0,0,0';
};

/*
const integrationNodes = [
  { id: 'hr', color: '#10b981', icon: Users, en: 'HR', ar: 'الموارد البشرية' },
  { id: 'accounting', color: '#ec4899', icon: Calculator, en: 'Accounting', ar: 'المحاسبة' },
  { id: 'audit', color: '#f97316', icon: ClipboardCheck, en: 'Audit', ar: 'التدقيق' },
  { id: 'zatca', color: '#00f0ff', icon: ShieldCheck, en: 'ZATCA', ar: 'هيئة الزكاة' },
  { id: 'payments', color: '#8b5cf6', icon: CreditCard, en: 'Payments', ar: 'المدفوعات' },
  { id: 'pos', color: '#3b82f6', icon: Store, en: 'POS', ar: 'نقاط البيع' },
  { id: 'ecommerce', color: '#fbbf24', icon: ShoppingCart, en: 'E-Commerce', ar: 'التجارة الإلكترونية' },
  { id: 'delivery', color: '#f43f5e', icon: Truck, en: 'Delivery', ar: 'التوصيل' },
  { id: 'crm', color: '#14b8a6', icon: HeartHandshake, en: 'CRM', ar: 'إدارة العملاء' },
  { id: 'helpdesk', color: '#ef4444', icon: Headset, en: 'Helpdesk', ar: 'الدعم الفني' },
  { id: 'project', color: '#6366f1', icon: Briefcase, en: 'Projects', ar: 'إدارة المشاريع' },
  { id: 'procurement', color: '#a855f7', icon: ShoppingBag, en: 'Procurement', ar: 'المشتريات' },
  { id: 'inventory', color: '#eab308', icon: Package, en: 'Inventory', ar: 'المخزون' },
].map((node, index) => ({
  ...node,
  angle: (index * (360 / 13)) - 90,
  radius: 36 // 36% from center for breathing room
}));

const OdooDiagram = ({ isAr }: { isAr: boolean }) => (
  <div className="ecosystem-hub relative w-full max-w-[220px] sm:max-w-[400px] lg:max-w-[460px] aspect-square mx-auto mt-8 sm:mt-12 lg:mt-0">
    <svg width="100%" height="100%" viewBox="0 0 500 500" className="absolute top-0 left-0 z-0 overflow-visible">
      {integrationNodes.map(node => {
        const radian = (node.angle * Math.PI) / 180;
        const radiusPx = (node.radius / 100) * 500;
        const x = 250 + radiusPx * Math.cos(radian);
        const y = 250 + radiusPx * Math.sin(radian);
        return (
          <path key={`line-${node.id}`} d={`M250 250 L${x} ${y}`} stroke={node.color} strokeOpacity="0.5" strokeWidth="2" strokeDasharray="6,6" className="dash-line" />
        );
      })}

      <circle cx="250" cy="250" r="120" stroke="rgba(255,255,255,0.03)" strokeWidth="1" fill="none" />
      <circle cx="250" cy="250" r="180" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" strokeDasharray="8,12" className="origin-center animate-spin-slow" />
    </svg>

    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[100px] lg:h-[100px] bg-gradient-to-br from-[#0A1730] to-[#1E293B] border border-[rgba(0,240,255,0.4)] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,240,255,0.2),inset_0_0_20px_rgba(0,240,255,0.1)] z-20">
      <span className="font-extrabold text-white text-[16px] sm:text-[18px] lg:text-[20px] tracking-[-0.02em] font-sora" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>Odoo</span>
      <div className="absolute w-full h-full rounded-full border border-[rgba(0,240,255,0.8)] animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
    </div>

    {integrationNodes.map(node => {
      const radian = (node.angle * Math.PI) / 180;
      const xPercent = 50 + Math.cos(radian) * node.radius;
      const yPercent = 50 + Math.sin(radian) * node.radius;
      const Icon = node.icon;
      const rgb = hexToRgb(node.color);

      const normalized = ((node.angle % 360) + 360) % 360;
      let labelPos = '';
      if (normalized > 315 || normalized <= 45) {
        labelPos = 'left-[calc(100%+6px)] sm:left-[calc(100%+8px)] top-1/2 -translate-y-1/2'; // Right
      } else if (normalized > 45 && normalized <= 135) {
        labelPos = 'top-[calc(100%+6px)] sm:top-[calc(100%+8px)] left-1/2 -translate-x-1/2'; // Bottom
      } else if (normalized > 135 && normalized <= 225) {
        labelPos = 'right-[calc(100%+6px)] sm:right-[calc(100%+8px)] top-1/2 -translate-y-1/2'; // Left
      } else {
        labelPos = 'bottom-[calc(100%+6px)] sm:bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2'; // Top
      }

      return (
        <div key={node.id} className="absolute -translate-x-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 border backdrop-blur-[10px] rounded-full flex items-center justify-center z-10 transition-all duration-300 hover:scale-[1.15] hover:shadow-[0_0_20px_currentColor]"
          style={{
            top: `${yPercent}%`,
            left: `${xPercent}%`,
            backgroundColor: `rgba(${rgb}, 0.1)`,
            borderColor: `rgba(${rgb}, 0.5)`,
            color: node.color
          }}
        >
          <Icon strokeWidth={2} className="w-4 h-4 sm:w-5 sm:h-5" />
          <div className={`absolute ${labelPos} text-[8px] sm:text-[9px] lg:text-[10px] text-white whitespace-nowrap font-semibold bg-[#02040a]/80 py-0.5 px-2 rounded backdrop-blur-md border border-white/10 shadow-lg pointer-events-none ${isAr ? 'font-cairo' : 'font-sora'}`}>
            {isAr ? node.ar : node.en}
          </div>
        </div>
      );
    })}
  </div>
);
*/

interface IntegrationItem {
  name: string;
  nameAr?: string;
  category: string;
  categoryAr?: string;
  src?: string;
  srcs?: string[];
  isCustom?: boolean;
}

const integrationsData: Record<number, IntegrationItem[]> = {
  0: [
    { name: 'Nuqta', nameAr: 'نقطة', category: 'Loyalty System', categoryAr: 'نظام الولاء', src: '/icons/nuqta.png' },
    { name: 'Bonat', nameAr: 'بونات', category: 'Rewards Program', categoryAr: 'برنامج المكافآت', src: '/icons/bonat.png' },
    { name: 'Deliverect', nameAr: 'ديلفراكت', category: 'Delivery Integration', categoryAr: 'تكامل التوصيل', src: '/icons/deliverect.png' },
    { name: 'Try Orders', nameAr: 'تراي أوردرز', category: 'Online Ordering', categoryAr: 'الطلب أونلاين', src: '/icons/tryorders.png' }
  ],
  1: [
    { name: 'Moyasser', nameAr: 'ميسر', category: 'Payment Gateway', categoryAr: 'بوابة الدفع', src: '/icons/moyasser.png' },
    { name: 'Mada', nameAr: 'مدى', category: 'Debit Cards', categoryAr: 'بطاقات مدى', src: '/icons/mada.svg' },
    { name: 'Visa & Mastercard', nameAr: 'فيزا وماستركارد', category: 'Credit Cards', categoryAr: 'البطاقات الائتمانية', srcs: ['/icons/visa.png', '/icons/mastercard.png'] },
    { name: 'Apple Pay & STC Pay', nameAr: 'أبل باي و STC باي', category: 'Digital Wallets', categoryAr: 'المحافظ الرقمية', srcs: ['/icons/applepay.svg', '/icons/stcpay.svg'] },
    { name: 'Cash & Vouchers', nameAr: 'قسائم نقدية وائتمانية', category: 'Voucher Management', categoryAr: 'إدارة القسائم', src: '/icons/bill.png' }
  ],
  2: [
    { name: 'Zid', nameAr: 'زد', category: 'E-Commerce Store', categoryAr: 'متجر إلكتروني', src: '/icons/zid.png' },
    { name: 'Salla', nameAr: 'سلة', category: 'E-Commerce Store', categoryAr: 'متجر إلكتروني', src: '/icons/salla.svg' },
    { name: 'Miles Speed', nameAr: 'ميلز سبيد', category: 'Logistics Solutions', categoryAr: 'الخدمات اللوجستية', src: '/icons/milesspeed.png' },
    { name: 'Aramex', nameAr: 'أرامكس', category: 'Global Shipping', categoryAr: 'شحن دولي ومحلي', src: '/icons/aramex.png' },
    { name: 'DAL & SMSA', nameAr: 'دال وسمسا', category: 'Delivery & Shipping', categoryAr: 'التوصيل والشحن', src: '/icons/dalsmsa.png' }
  ],
  3: []
};

const IntegrationLogosVisual = ({ activeStep, isAr, isMobile = false }: { activeStep: number; isAr: boolean; isMobile?: boolean }) => {
  if (isMobile) {
    return (
      <div className="grid grid-cols-2 gap-4 mt-6">
        {integrationsData[activeStep].map((item, idx) => {
          const isLast = idx === integrationsData[activeStep].length - 1;
          const isOddLength = integrationsData[activeStep].length % 2 !== 0;
          const hasLogo = item.src || item.srcs;
          return (
            <div
              key={item.name}
              className={`bg-[#F0FDFB] border border-[#D1F2EB] rounded-[24px] flex flex-col items-center justify-center p-4 h-28 shadow-sm ${isLast && isOddLength ? 'col-span-2 mx-auto w-1/2' : ''}`}
            >
              {hasLogo ? (
                <div className="flex items-center justify-center gap-1.5 h-10 w-full mb-1">
                  {item.srcs ? (
                    item.srcs.map((src, i) => (
                      <div key={i} className="relative w-10 h-7 flex items-center justify-center">
                        <Image src={src} alt={item.name} fill className="object-contain" />
                      </div>
                    ))
                  ) : item.src ? (
                    <div className="relative w-16 h-8 flex items-center justify-center">
                      <Image src={item.src} alt={item.name} fill className="object-contain" />
                    </div>
                  ) : null}
                </div>
              ) : null}
              <div className="text-center mt-1">
                <div className="text-[12px] font-bold text-slate-800 leading-tight">
                  {isAr && item.nameAr ? item.nameAr : item.name}
                </div>
                <div className="text-[9px] font-medium text-slate-400 mt-0.5">
                  {isAr && item.categoryAr ? item.categoryAr : item.category}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-[500px] h-[340px] mx-auto">
      {[0, 1, 2, 3].map((stepIdx) => {
        const isActive = activeStep === stepIdx;
        return (
          <div
            key={stepIdx}
            className="absolute inset-0 w-full h-full transition-all duration-700 ease-out flex items-center justify-center"
            style={{
              opacity: isActive ? 1 : 0,
              transform: isActive ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(15px)',
              pointerEvents: isActive ? 'auto' : 'none',
            }}
          >
            <div className="w-full grid grid-cols-2 gap-5 p-2">
              {integrationsData[stepIdx].map((item, idx) => {
                const isLast = idx === integrationsData[stepIdx].length - 1;
                const isOddLength = integrationsData[stepIdx].length % 2 !== 0;
                const hasLogo = item.src || item.srcs;
                return (
                  <div
                    key={item.name}
                    className={`bg-[#F0FDFB] border border-[#D1F2EB] rounded-[24px] flex flex-col items-center justify-center p-5 shadow-[0_8px_30px_rgba(7,185,143,0.03)] hover:shadow-[0_12px_40px_rgba(7,185,143,0.08)] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden h-32 ${isLast && isOddLength ? 'col-span-2 mx-auto w-1/2' : ''}`}
                  >
                    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                      {hasLogo ? (
                        <div className="flex items-center justify-center gap-2 h-12 w-full mb-2">
                          {item.srcs ? (
                            item.srcs.map((src, i) => (
                              <div key={i} className="relative w-14 h-9 flex items-center justify-center">
                                <Image src={src} alt={item.name} fill className="object-contain" />
                              </div>
                            ))
                          ) : item.src ? (
                            <div className="relative w-24 h-10 flex items-center justify-center">
                              <Image src={item.src} alt={item.name} fill className="object-contain" />
                            </div>
                          ) : null}
                        </div>
                      ) : null}

                      <div className="text-center mt-1">
                        <div className="text-[14px] font-bold text-slate-800 leading-tight">
                          {isAr && item.nameAr ? item.nameAr : item.name}
                        </div>
                        <div className="text-[11px] font-semibold text-slate-400 tracking-wide mt-1">
                          {isAr && item.categoryAr ? item.categoryAr : item.category}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default function Integrations() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const steps = document.querySelectorAll('.int-step');
      steps.forEach((step, i) => {
        if (step.classList.contains('active')) {
          setActiveStep(i);
        }
      });
    });

    const timeline = document.querySelector('.int-timeline');
    if (timeline) {
      observer.observe(timeline, {
        attributes: true,
        attributeFilter: ['class'],
        subtree: true,
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="integrations" className={`${isAr ? 'font-cairo' : 'font-sora'} overflow-hidden`}>
        <div className="int-scroll-wrap">
          <div className="int-sticky">
            <div className="container">
              <div className={`int-header ${isAr ? 'text-right' : ''}`}>
                <div className="section-label">{t('int.label')}</div>
                <h2 className={`section-heading ${isAr ? 'font-cairo' : 'font-sora'}`}>{t('int.title1')} <span style={{ WebkitTextFillColor: '#07B98F', color: '#07B98F' }}>{t('int.title2')}</span></h2>
                <p className="section-sub">{t('int.sub')}</p>
              </div>
              <div className={`int-layout`}>
                <div className={`int-timeline ${isAr ? 'dir-rtl' : ''}`}>
                  <div className="int-step active" data-step="0">
                    <div className="step-marker"><CreditCard size={20} strokeWidth={2} /></div>
                    <div className={`step-body ${isAr ? 'text-right' : ''}`}><h3 className="step-title">{t('int.step1.title')}</h3>
                      <div className="step-detail">
                        <div className="step-list w-full max-w-[340px]">
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'نقطة (ولاء)' : 'Nuqta (Loyalty)'}</span></div>
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'بونات (مكافآت)' : 'Bonat (Rewards)'}</span></div>
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'ديلفراكت (توصيل)' : 'Deliverect (Delivery)'}</span></div>
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'تراي أوردرز (أونلاين)' : 'Try Orders (Online)'}</span></div>
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'نقاط بيع ميسرة' : 'SoftPOS (Tap-to-Pay)'}</span></div>
                        </div>
                        {/* Mobile Diagram - Replaced with logos visual */}
                        <div className="block lg:hidden w-full mt-6 mb-2 overflow-visible">
                          <IntegrationLogosVisual activeStep={0} isAr={isAr} isMobile />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="int-step" data-step="1">
                    <div className="step-marker"><CreditCard size={20} strokeWidth={2} /></div>
                    <div className={`step-body ${isAr ? 'text-right' : ''}`}><h3 className="step-title">{t('int.step2.title')}</h3>
                      <div className="step-detail">
                        <div className="step-list w-full max-w-[340px]">
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'بوابة مُيَسّر' : 'MOYASSER Gateway'}</span></div>
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'مدى (بطاقات الخصم)' : 'Mada (Debit Cards)'}</span></div>
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'فيزا / ماستركارد' : 'Visa / Mastercard'}</span></div>
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'أبل باي و STC باي' : 'Apple Pay & STC Pay'}</span></div>
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'قسائم نقدية وائتمانية' : 'Cash & Credit Vouchers'}</span></div>
                        </div>
                        {/* Mobile Diagram - Replaced with logos visual */}
                        <div className="block lg:hidden w-full mt-6 mb-2 overflow-visible">
                          <IntegrationLogosVisual activeStep={1} isAr={isAr} isMobile />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="int-step" data-step="2">
                    <div className="step-marker"><ShoppingCart size={20} strokeWidth={2} /></div>
                    <div className={`step-body ${isAr ? 'text-right' : ''}`}><h3 className="step-title">{t('int.step3.title')}</h3>
                      <div className="step-detail">
                        <div className="step-list w-full max-w-[340px]">
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'ربط زد' : 'Zid Integration'}</span></div>
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'ربط سلة' : 'Salla Integration'}</span></div>
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'ميلز سبيد' : 'Miles Speed'}</span></div>
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'أرامكس' : 'Aramex'}</span></div>
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'دال وسمسا' : 'DAL & SMSA'}</span></div>
                        </div>
                        {/* Mobile Diagram - Replaced with logos visual */}
                        <div className="block lg:hidden w-full mt-6 mb-2 overflow-visible">
                          <IntegrationLogosVisual activeStep={2} isAr={isAr} isMobile />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="int-step" data-step="3">
                    <div className="step-marker"><ShieldCheck size={20} strokeWidth={2} /></div>
                    <div className={`step-body ${isAr ? 'text-right' : ''}`}><h3 className="step-title">{t('int.step4.title')}</h3>
                      <div className="step-detail">
                        <div className="step-list w-full max-w-[340px]">
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'الفوترة الإلكترونية لهيئة الزكاة' : 'ZATCA E-Invoicing'}</span></div>
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'منصة نيوليب' : 'NeoLeap Platform'}</span></div>
                        </div>
                        {/* Mobile Diagram - Replaced with logos visual */}
                        <div className="block lg:hidden w-full mt-6 mb-2 overflow-visible">
                          <IntegrationLogosVisual activeStep={3} isAr={isAr} isMobile />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="int-visual !hidden lg:!flex items-center justify-center h-full min-h-[350px] sm:min-h-[450px] lg:min-h-[500px] py-12 lg:py-0 w-full overflow-visible"
                  style={{
                    opacity: 1,
                  }}
                >
                  <IntegrationLogosVisual activeStep={activeStep} isAr={isAr} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
