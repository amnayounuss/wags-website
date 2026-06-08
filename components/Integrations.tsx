'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ShieldCheck, CreditCard, ShoppingCart, Truck, CheckCircle, Users, ClipboardCheck, Store, Calculator, HeartHandshake, Package, ShoppingBag, Briefcase, Headset, Ticket } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}` : '0,0,0';
};

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
    {/* Animated connecting lines & Rings */}
    <svg width="100%" height="100%" viewBox="0 0 500 500" className="absolute top-0 left-0 z-0 overflow-visible">
      {/* Lines */}
      {integrationNodes.map(node => {
        const radian = (node.angle * Math.PI) / 180;
        const radiusPx = (node.radius / 100) * 500;
        const x = 250 + radiusPx * Math.cos(radian);
        const y = 250 + radiusPx * Math.sin(radian);
        return (
          <path key={`line-${node.id}`} d={`M250 250 L${x} ${y}`} stroke={node.color} strokeOpacity="0.5" strokeWidth="2" strokeDasharray="6,6" className="dash-line" />
        );
      })}

      {/* Rings */}
      <circle cx="250" cy="250" r="120" stroke="rgba(255,255,255,0.03)" strokeWidth="1" fill="none" />
      <circle cx="250" cy="250" r="180" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" strokeDasharray="8,12" className="origin-center animate-spin-slow" />
    </svg>

    {/* Center Hub */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[100px] lg:h-[100px] bg-gradient-to-br from-[#0A1730] to-[#1E293B] border border-[rgba(0,240,255,0.4)] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,240,255,0.2),inset_0_0_20px_rgba(0,240,255,0.1)] z-20">
      <span className="font-extrabold text-white text-[16px] sm:text-[18px] lg:text-[20px] tracking-[-0.02em] font-sora" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>Odoo</span>
      <div className="absolute w-full h-full rounded-full border border-[rgba(0,240,255,0.8)] animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
    </div>

    {/* Map Nodes */}
    {integrationNodes.map(node => {
      const radian = (node.angle * Math.PI) / 180;
      const xPercent = 50 + Math.cos(radian) * node.radius;
      const yPercent = 50 + Math.sin(radian) * node.radius;
      const Icon = node.icon;
      const rgb = hexToRgb(node.color);

      // Dynamic label positioning based on angle to prevent overlap
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
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'نقطة (ولاء)' : 'Nuqta (Loyalty)'}</span><div className="w-[100px] flex justify-start items-center flex-shrink-0"><Image src="/icons/nuqta.png" alt="Nuqta" width={48} height={20} className="object-contain" /></div></div>
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'بونات (مكافآت)' : 'Bonat (Rewards)'}</span><div className="w-[100px] flex justify-start items-center flex-shrink-0"><Image src="/icons/bonat.png" alt="Bonat" width={48} height={20} className="object-contain" /></div></div>
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'ديلفراكت (توصيل)' : 'Deliverect (Delivery)'}</span><div className="w-[100px] flex justify-start items-center flex-shrink-0"><Image src="/icons/deliverect.png" alt="Deliverect" width={48} height={20} className="object-contain" /></div></div>
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'تراي أوردرز (أونلاين)' : 'Try Orders (Online)'}</span><div className="w-[100px] flex justify-start items-center flex-shrink-0"><Image src="/icons/tryorders.png" alt="Try Orders" width={48} height={20} className="object-contain" /></div></div>
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'نقاط بيع ميسرة' : 'SoftPOS (Tap-to-Pay)'}</span><div className="w-[100px] flex-shrink-0"></div></div>
                        </div>
                        {/* Mobile Diagram */}
                        <div className="block lg:hidden w-full mt-10 mb-6 overflow-visible">
                          <OdooDiagram isAr={isAr} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="int-step" data-step="1">
                    <div className="step-marker"><CreditCard size={20} strokeWidth={2} /></div>
                    <div className={`step-body ${isAr ? 'text-right' : ''}`}><h3 className="step-title">{t('int.step2.title')}</h3>
                      <div className="step-detail">
                        <div className="step-list w-full max-w-[340px]">
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'بوابة مُيَسّر' : 'MOYASSER Gateway'}</span><div className="w-[100px] flex justify-start items-center flex-shrink-0"><Image src="/icons/moyasser.png" alt="Moyasser" width={28} height={28} className="object-contain" /></div></div>
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'مدى (بطاقات الخصم)' : 'Mada (Debit Cards)'}</span><div className="w-[100px] flex justify-start items-center flex-shrink-0"><Image src="/icons/mada.svg" alt="Mada" width={48} height={20} className="object-contain" /></div></div>
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'فيزا / ماستركارد' : 'Visa / Mastercard'}</span><div className="w-[100px] flex justify-start items-center gap-2 flex-shrink-0"><Image src="/icons/visa.png" alt="Visa" width={36} height={20} className="object-contain" /><Image src="/icons/mastercard.png" alt="Mastercard" width={24} height={24} className="object-contain" /></div></div>
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'أبل باي و STC باي' : 'Apple Pay & STC Pay'}</span><div className="w-[100px] flex justify-start items-center gap-2 flex-shrink-0"><Image src="/icons/applepay.svg" alt="Apple Pay" width={40} height={20} className="object-contain" /><Image src="/icons/stcpay.svg" alt="STC Pay" width={40} height={20} className="object-contain" /></div></div>
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'قسائم نقدية وائتمانية' : 'Cash & Credit Vouchers'}</span><div className="w-[100px] flex justify-start items-center flex-shrink-0"><Image src="/icons/bill.png" alt="Cash & Credit Vouchers" width={28} height={28} className="object-contain" /></div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="int-step" data-step="2">
                    <div className="step-marker"><ShoppingCart size={20} strokeWidth={2} /></div>
                    <div className={`step-body ${isAr ? 'text-right' : ''}`}><h3 className="step-title">{t('int.step3.title')}</h3>
                      <div className="step-detail">
                        <div className="step-list w-full max-w-[340px]">
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'ربط زد' : 'Zid Integration'}</span><div className="w-[100px] flex justify-start items-center flex-shrink-0"><Image src="/icons/zid.png" alt="Zid" width={28} height={28} className="object-contain" /></div></div>
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'ربط سلة' : 'Salla Integration'}</span><div className="w-[100px] flex justify-start items-center flex-shrink-0"><Image src="/icons/salla.svg" alt="Salla" width={28} height={28} className="object-contain" /></div></div>
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'ميلز سبيد' : 'Miles Speed'}</span><div className="w-[100px] flex justify-start items-center flex-shrink-0"><Image src="/icons/milesspeed.png" alt="Miles Speed" width={28} height={28} className="object-contain" /></div></div>
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'أرامكس' : 'Aramex'}</span><div className="w-[100px] flex justify-start items-center flex-shrink-0"><Image src="/icons/aramex.png" alt="Aramex" width={28} height={28} className="object-contain" /></div></div>
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'دال وسمسا' : 'DAL & SMSA'}</span><div className="w-[100px] flex justify-start items-center flex-shrink-0"><Image src="/icons/dalsmsa.png" alt="DAL & SMSA" width={28} height={28} className="object-contain" /></div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="int-step" data-step="3">
                    <div className="step-marker"><ShieldCheck size={20} strokeWidth={2} /></div>
                    <div className={`step-body ${isAr ? 'text-right' : ''}`}><h3 className="step-title">{t('int.step4.title')}</h3>
                      <div className="step-detail">
                        <div className="step-list w-full max-w-[340px]">
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'الفوترة الإلكترونية لهيئة الزكاة' : 'ZATCA E-Invoicing'}</span><div className="w-[100px] flex-shrink-0" /></div>
                          <div className={`step-item justify-between`}><span className="flex items-center gap-1.5"><CheckCircle size={16} strokeWidth={2.5} className="text-[#07B98F] flex-shrink-0" />{isAr ? 'منصة نيوليب' : 'NeoLeap Platform'}</span><div className="w-[100px] flex-shrink-0" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="int-visual !hidden lg:!flex items-center justify-center h-full min-h-[350px] sm:min-h-[450px] lg:min-h-[500px] py-12 lg:py-0 w-full overflow-visible"
                  style={{
                    opacity: activeStep === 0 ? 1 : 0,
                    transform: activeStep === 0 ? 'scale(1)' : 'scale(0.9)',
                    transition: 'opacity 0.5s ease, transform 0.5s ease',
                    pointerEvents: activeStep === 0 ? 'auto' : 'none',
                  }}
                >
                  <OdooDiagram isAr={isAr} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
