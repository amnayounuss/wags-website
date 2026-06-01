'use client';
import { ShieldCheck, CreditCard, ShoppingCart, Truck, CheckCircle, Users, ClipboardCheck, Store, Calculator, HeartHandshake, Package, ShoppingBag, Briefcase, Headset } from 'lucide-react';
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

export default function Integrations() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <>
      <section id="integrations" className={`${isAr ? 'font-cairo' : 'font-sora'} overflow-hidden`}>
        <div className="int-scroll-wrap">
          <div className="int-sticky">
            <div className="container">
              <div className={`int-header ${isAr ? 'text-right' : ''}`}>
                <div className="section-label">{t('int.label')}</div>
                <h2 className={`section-heading ${isAr ? 'font-cairo' : 'font-sora'}`}>{t('int.title1')}<span className="grad">{t('int.title2')}</span></h2>
                <p className="section-sub">{t('int.sub')}</p>
              </div>
              <div className={`int-layout`}>
                <div className={`int-timeline ${isAr ? 'dir-rtl' : ''}`}>
                  <div className="int-step active" data-step="0">
                    <div className="step-marker"><CreditCard size={20} strokeWidth={2} /></div>
                    <div className={`step-body ${isAr ? 'text-right' : ''}`}><h3 className="step-title">{t('int.step1.title')}</h3>
                      <div className="step-detail">
                        <div className="step-list">
                          <div className={`step-item`}><CheckCircle size={16} strokeWidth={2.5} /> {isAr ? 'نقطة (ولاء)' : 'Nuqta (Loyalty)'}</div>
                          <div className={`step-item`}><CheckCircle size={16} strokeWidth={2.5} /> {isAr ? 'بونات (مكافآت)' : 'Bonat (Rewards)'}</div>
                          <div className={`step-item`}><CheckCircle size={16} strokeWidth={2.5} /> {isAr ? 'ديلفراكت (توصيل)' : 'Deliverect (Delivery)'}</div>
                          <div className={`step-item`}><CheckCircle size={16} strokeWidth={2.5} /> {isAr ? 'تراي أوردرز (أونلاين)' : 'Try Orders (Online)'}</div>
                          <div className={`step-item`}><CheckCircle size={16} strokeWidth={2.5} /> {isAr ? 'نقاط بيع ميسرة' : 'SoftPOS (Tap-to-Pay)'}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="int-step" data-step="1">
                    <div className="step-marker"><CreditCard size={20} strokeWidth={2} /></div>
                    <div className={`step-body ${isAr ? 'text-right' : ''}`}><h3 className="step-title">{t('int.step2.title')}</h3>
                      <div className="step-detail">
                        <div className="step-list">
                          <div className={`step-item`}><CheckCircle size={16} strokeWidth={2.5} /> {isAr ? 'بوابة مُيَسّر' : 'MOYASSER Gateway'}</div>
                          <div className={`step-item`}><CheckCircle size={16} strokeWidth={2.5} /> {isAr ? 'مدى (بطاقات الخصم)' : 'Mada (Debit Cards)'}</div>
                          <div className={`step-item`}><CheckCircle size={16} strokeWidth={2.5} /> {isAr ? 'فيزا / ماستركارد' : 'Visa / Mastercard'}</div>
                          <div className={`step-item`}><CheckCircle size={16} strokeWidth={2.5} /> {isAr ? 'أبل باي و STC باي' : 'Apple Pay & STC Pay'}</div>
                          <div className={`step-item`}><CheckCircle size={16} strokeWidth={2.5} /> {isAr ? 'قسائم نقدية وائتمانية' : 'Cash & Credit Vouchers'}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="int-step" data-step="2">
                    <div className="step-marker"><ShoppingCart size={20} strokeWidth={2} /></div>
                    <div className={`step-body ${isAr ? 'text-right' : ''}`}><h3 className="step-title">{t('int.step3.title')}</h3>
                      <div className="step-detail">
                        <div className="step-list">
                          <div className={`step-item`}><CheckCircle size={16} strokeWidth={2.5} /> {isAr ? 'ربط زد' : 'Zid Integration'}</div>
                          <div className={`step-item`}><CheckCircle size={16} strokeWidth={2.5} /> {isAr ? 'ربط سلة' : 'Salla Integration'}</div>
                          <div className={`step-item`}><CheckCircle size={16} strokeWidth={2.5} /> {isAr ? 'ميلز سبيد' : 'Miles Speed'}</div>
                          <div className={`step-item`}><CheckCircle size={16} strokeWidth={2.5} /> {isAr ? 'أرامكس' : 'Aramex'}</div>
                          <div className={`step-item`}><CheckCircle size={16} strokeWidth={2.5} /> {isAr ? 'دال وسمسا' : 'DAL & SMSA'}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="int-step" data-step="3">
                    <div className="step-marker"><ShieldCheck size={20} strokeWidth={2} /></div>
                    <div className={`step-body ${isAr ? 'text-right' : ''}`}><h3 className="step-title">{t('int.step4.title')}</h3>
                      <div className="step-detail">
                        <div className="step-list">
                          <div className={`step-item`}><CheckCircle size={16} strokeWidth={2.5} /> {isAr ? 'الفوترة الإلكترونية لهيئة الزكاة' : 'ZATCA E-Invoicing'}</div>
                          <div className={`step-item`}><CheckCircle size={16} strokeWidth={2.5} /> {isAr ? 'الامتثال لضريبة القيمة المضافة 15%' : 'VAT Compliance 15%'}</div>
                          <div className={`step-item`}><CheckCircle size={16} strokeWidth={2.5} /> {isAr ? 'يورباي (نيوليب)' : 'URpay (NeoLeap)'}</div>
                          <div className={`step-item`}><CheckCircle size={16} strokeWidth={2.5} /> {isAr ? 'منصة نيوليب' : 'NeoLeap Platform'}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="int-visual flex items-center justify-center h-full min-h-[350px] sm:min-h-[450px] lg:min-h-[500px] py-12 lg:py-0 w-full overflow-visible">
                  <div className="ecosystem-hub relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[460px] aspect-square mx-auto">
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
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[100px] lg:h-[100px] bg-[rgba(0,240,255,0.05)] border border-[rgba(0,240,255,0.4)] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,240,255,0.2),inset_0_0_20px_rgba(0,240,255,0.1)] z-20">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
