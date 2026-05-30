'use client';
import { ShieldCheck, CreditCard, ShoppingCart, Truck, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Integrations() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <>
      <section id="integrations" className={`${isAr ? 'font-cairo' : 'font-sora'}`}>
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
                <div className="int-visual flex items-center justify-center h-full min-h-[400px]">
                  <div className="ecosystem-hub relative w-full max-w-[400px] aspect-square">
                    {/* Animated connecting lines & Rings */}
                    <svg width="100%" height="100%" viewBox="0 0 400 400" className="absolute top-0 left-0 z-0">
                      {/* Lines */}
                      <path d="M200 200 L80 80" stroke="rgba(0, 240, 255, 0.5)" strokeWidth="2" strokeDasharray="6,6" className="dash-line" />
                      <path d="M200 200 L320 80" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="2" strokeDasharray="6,6" className="dash-line" />
                      <path d="M200 200 L80 320" stroke="rgba(251, 191, 36, 0.5)" strokeWidth="2" strokeDasharray="6,6" className="dash-line" />
                      <path d="M200 200 L320 320" stroke="rgba(244, 63, 94, 0.5)" strokeWidth="2" strokeDasharray="6,6" className="dash-line" />

                      {/* Rings */}
                      <circle cx="200" cy="200" r="110" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
                      <circle cx="200" cy="200" r="170" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" strokeDasharray="8,12" className="origin-center animate-spin-slow" />
                    </svg>

                    {/* Center Hub */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] bg-[rgba(0,240,255,0.05)] border border-[rgba(0,240,255,0.4)] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,240,255,0.2),inset_0_0_20px_rgba(0,240,255,0.1)] z-20">
                      <span className="font-extrabold text-white text-[20px] tracking-[-0.02em] font-sora" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>Odoo</span>
                      <div className="absolute w-full h-full rounded-full border border-[rgba(0,240,255,0.8)] animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                    </div>

                    {/* Node 1: ZATCA */}
                    <div className="absolute top-[20%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[rgba(0,240,255,0.1)] border border-[rgba(0,240,255,0.5)] backdrop-blur-[10px] rounded-full flex items-center justify-center z-10 text-[#00f0ff] transition-all duration-300 hover:scale-[1.15] hover:shadow-[0_0_20px_currentColor]">
                      <ShieldCheck size={28} strokeWidth={2} />
                      <div className={`absolute -bottom-7 text-[13px] text-white whitespace-nowrap font-semibold bg-black/50 py-0.5 px-2 rounded ${isAr ? 'font-cairo' : 'font-sora'}`}>{isAr ? 'هيئة الزكاة' : 'ZATCA'}</div>
                    </div>

                    {/* Node 2: Payments */}
                    <div className="absolute top-[20%] left-[80%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.5)] backdrop-blur-[10px] rounded-full flex items-center justify-center z-10 text-[#8b5cf6] transition-all duration-300 hover:scale-[1.15] hover:shadow-[0_0_20px_currentColor]">
                      <CreditCard size={28} strokeWidth={2} />
                      <div className={`absolute -bottom-7 text-[13px] text-white whitespace-nowrap font-semibold bg-black/50 py-0.5 px-2 rounded ${isAr ? 'font-cairo' : 'font-sora'}`}>{isAr ? 'المدفوعات' : 'Payments'}</div>
                    </div>

                    {/* Node 3: E-Commerce */}
                    <div className="absolute top-[80%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[rgba(251,191,36,0.1)] border border-[rgba(251,191,36,0.5)] backdrop-blur-[10px] rounded-full flex items-center justify-center z-10 text-[#fbbf24] transition-all duration-300 hover:scale-[1.15] hover:shadow-[0_0_20px_currentColor]">
                      <ShoppingCart size={28} strokeWidth={2} />
                      <div className={`absolute -bottom-7 text-[13px] text-white whitespace-nowrap font-semibold bg-black/50 py-0.5 px-2 rounded ${isAr ? 'font-cairo' : 'font-sora'}`}>{isAr ? 'التجارة الإلكترونية' : 'E-Commerce'}</div>
                    </div>

                    {/* Node 4: Delivery */}
                    <div className="absolute top-[80%] left-[80%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[rgba(244,63,94,0.1)] border border-[rgba(244,63,94,0.5)] backdrop-blur-[10px] rounded-full flex items-center justify-center z-10 text-[#f43f5e] transition-all duration-300 hover:scale-[1.15] hover:shadow-[0_0_20px_currentColor]">
                      <Truck size={28} strokeWidth={2} />
                      <div className={`absolute -bottom-7 text-[13px] text-white whitespace-nowrap font-semibold bg-black/50 py-0.5 px-2 rounded ${isAr ? 'font-cairo' : 'font-sora'}`}>{isAr ? 'التوصيل ونقاط البيع' : 'Delivery & POS'}</div>
                    </div>
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
