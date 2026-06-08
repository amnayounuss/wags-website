'use client';
import React from 'react';
import { Mail, MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <>
      <section id="contact" className={`py-[60px] md:py-[80px] relative overflow-hidden ${isAr ? 'font-cairo text-right' : 'font-sora'}`}>
        
        <div className="container relative z-10">
          {/* Single Massive Card (Light Theme) */}
          <div className="bg-white/75 backdrop-blur-[40px] border border-slate-200/50 border-t-[#07B98F]/30 rounded-[32px] p-[clamp(24px,6vw,60px)] shadow-[0_20px_50px_rgba(0,0,0,0.02),_inset_0_1px_0_rgba(255,255,255,0.6)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[clamp(30px,6vw,60px)] items-center">

            {/* Left Side: Info (Light Theme) */}
            <div className={`contact-info ${isAr ? 'order-1 md:order-2' : ''}`}>
              <div className="section-label inline-block mb-6 bg-[#07B98F]/10 border border-[#07B98F]/25 text-[#07B98F] py-[6px] px-4 rounded-full text-[13px] font-bold tracking-[0.1em] uppercase">{t('contact.label')}</div>
              <h2 className={`text-[clamp(32px,8vw,56px)] leading-[1.1] mb-6 font-extrabold text-slate-900 ${isAr ? 'font-cairo' : 'font-sora'}`}>{t('contact.title1')} <span className="bg-gradient-to-br from-[#07B98F] to-[#3ECEB0] bg-clip-text text-transparent">{t('contact.title2')}</span>{isAr ? '' : <br />}{t('contact.title3')}</h2>
              <p className="text-[16px] text-slate-600 leading-[1.6] mb-10 max-w-[400px]">{t('contact.sub')}</p>

              <div className="flex flex-col gap-4">
                <div className={`flex items-center gap-4 p-5 bg-slate-900/5 border border-slate-200/60 rounded-[20px]`}>
                  <div className="w-12 h-12 rounded-[14px] bg-[#07B98F]/10 text-[#07B98F] flex items-center justify-center">
                    <Mail size={24} strokeWidth={2} />
                  </div>
                  <span className="text-[16px] font-medium text-slate-900">info@wags.sa</span>
                </div>
                <div className={`flex items-center gap-4 p-5 bg-slate-900/5 border border-slate-200/60 rounded-[20px]`}>
                  <div className="w-12 h-12 rounded-[14px] bg-[#07B98F]/10 text-[#07B98F] flex items-center justify-center">
                    <MapPin size={24} strokeWidth={2} />
                  </div>
                  <span className="text-[16px] font-medium text-slate-900">{isAr ? 'التعاون، الرياض' : 'Taawun Area, Riyadh'}</span>
                </div>
                <div className={`flex items-center gap-4 p-5 bg-slate-900/5 border border-slate-200/60 rounded-[20px]`}>
                  <div className="w-12 h-12 rounded-[14px] bg-[#25D366]/15 text-[#25D366] flex items-center justify-center">
                    <MessageCircle size={24} strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] text-slate-500 font-semibold tracking-wider uppercase mb-0.5">{isAr ? 'واتساب' : 'WhatsApp'}</span>
                    <span className="text-[16px] font-medium text-slate-900" dir="ltr">+966 5X XXX XXXX</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form (Dark Theme as requested) */}
            <div className={`w-full bg-[#050B1A]/95 backdrop-blur-xl border border-slate-700/50 rounded-[28px] p-6 md:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.2),_inset_0_1px_0_rgba(255,255,255,0.02)] ${isAr ? 'order-2 md:order-1' : ''}`}>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 mb-5">
                <div>
                  <label className={`block text-[14px] font-bold text-slate-300 mb-2 ${isAr ? 'text-right' : ''}`} htmlFor="name">{t('contact.form.name')}</label>
                  <input type="text" id="name" className={`w-full bg-[#0A1329] border border-slate-700/80 text-white rounded-[16px] px-5 py-3.5 focus:outline-none focus:border-[#07B98F] focus:ring-1 focus:ring-[#07B98F] transition-all placeholder-slate-600 shadow-inner ${isAr ? 'text-right' : ''}`} placeholder={isAr ? 'مثال: أحمد الرشيدي' : 'e.g. Ahmed Al-Rashidi'} />
                </div>
                <div>
                  <label className={`block text-[14px] font-bold text-slate-300 mb-2 ${isAr ? 'text-right' : ''}`} htmlFor="company">{t('contact.form.company')}</label>
                  <input type="text" id="company" className={`w-full bg-[#0A1329] border border-slate-700/80 text-white rounded-[16px] px-5 py-3.5 focus:outline-none focus:border-[#07B98F] focus:ring-1 focus:ring-[#07B98F] transition-all placeholder-slate-600 shadow-inner ${isAr ? 'text-right' : ''}`} placeholder={isAr ? 'مثال: شركة التقدم' : 'e.g. Acme Corp'} />
                </div>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 mb-5">
                <div>
                  <label className={`block text-[14px] font-bold text-slate-300 mb-2 ${isAr ? 'text-right' : ''}`} htmlFor="email">{t('contact.form.email')}</label>
                  <input type="email" id="email" className={`w-full bg-[#0A1329] border border-slate-700/80 text-white rounded-[16px] px-5 py-3.5 focus:outline-none focus:border-[#07B98F] focus:ring-1 focus:ring-[#07B98F] transition-all placeholder-slate-600 shadow-inner ${isAr ? 'text-right' : ''}`} placeholder="ahmed@company.sa" />
                </div>
                <div>
                  <label className={`block text-[14px] font-bold text-slate-300 mb-2 ${isAr ? 'text-right' : ''}`} htmlFor="phone">{t('contact.form.phone')}</label>
                  <input type="tel" id="phone" className={`w-full bg-[#0A1329] border border-slate-700/80 text-white rounded-[16px] px-5 py-3.5 focus:outline-none focus:border-[#07B98F] focus:ring-1 focus:ring-[#07B98F] transition-all placeholder-slate-600 shadow-inner ${isAr ? 'text-right' : ''}`} placeholder="+966 5x xxx xxxx" dir="ltr" />
                </div>
              </div>
              <div className="mb-5">
                <label className={`block text-[14px] font-bold text-slate-300 mb-2 ${isAr ? 'text-right' : ''}`} htmlFor="service">{t('contact.form.service')}</label>
                <div className="relative">
                  <select id="service" className={`w-full bg-[#0A1329] border border-slate-700/80 text-white rounded-[16px] px-5 py-3.5 focus:outline-none focus:border-[#07B98F] focus:ring-1 focus:ring-[#07B98F] transition-all shadow-inner appearance-none cursor-pointer ${isAr ? 'text-right' : ''}`} defaultValue="">
                    <option value="" disabled className="text-slate-500">{isAr ? 'اختر خدمة...' : 'Select a service...'}</option>
                    <option className="text-white bg-[#0A1329]">{isAr ? 'تطبيق نظام ERP' : 'ERP Implementation'}</option>
                    <option className="text-white bg-[#0A1329]">{isAr ? 'تكامل نقاط البيع' : 'POS Integration'}</option>
                    <option className="text-white bg-[#0A1329]">{isAr ? 'الامتثال لهيئة الزكاة' : 'ZATCA Compliance'}</option>
                    <option className="text-white bg-[#0A1329]">{isAr ? 'أخرى' : 'Other'}</option>
                  </select>
                  <div className={`absolute inset-y-0 ${isAr ? 'left-4' : 'right-4'} flex items-center pointer-events-none`}>
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <label className={`block text-[14px] font-bold text-slate-300 mb-2 ${isAr ? 'text-right' : ''}`} htmlFor="message">{t('contact.form.details')}</label>
                <textarea id="message" className={`w-full bg-[#0A1329] border border-slate-700/80 text-white rounded-[16px] px-5 py-3.5 focus:outline-none focus:border-[#07B98F] focus:ring-1 focus:ring-[#07B98F] transition-all placeholder-slate-600 shadow-inner resize-none ${isAr ? 'text-right' : ''}`} placeholder={isAr ? 'صف متطلباتك باختصار...' : 'Briefly describe your requirements...'} rows={4}></textarea>
              </div>
              <button className={`w-full bg-gradient-to-r from-[#07B98F] to-[#3ECEB0] hover:from-[#06a680] hover:to-[#35b89d] text-white font-bold py-4 px-8 rounded-[16px] shadow-[0_10px_25px_rgba(7,185,143,0.3)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(7,185,143,0.4)] hover:-translate-y-1 flex items-center justify-center gap-3`}>
                {t('contact.form.btn')} <ArrowRight size={20} strokeWidth={3} className={isAr ? 'rotate-180' : ''} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
