'use client';
import React, { useState } from 'react';
import { CreditCard, LineChart, Users, FileText, Activity, Settings, Truck, ShoppingBag, Banknote, Briefcase, ShoppingCart, ShieldCheck, Plane, LayoutDashboard, Globe, Package, Send, Layers, Database, MonitorSmartphone, Smartphone, Gift, Star, LayoutGrid, Clock, Tv, SmartphoneNfc, Terminal, Wallet } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Services() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { t, language } = useLanguage();
  const isAr = language === 'ar';

  const filters = [
    { id: 'all', label: t('services.filter.all'), count: 29 },
    { id: 'sales', label: t('services.filter.sales'), count: 4 },
    { id: 'pos', label: t('services.filter.pos'), count: 13 },
    { id: 'finance', label: t('services.filter.finance'), count: 4 },
    { id: 'ops', label: t('services.filter.ops'), count: 5 },
    { id: 'people', label: t('services.filter.people'), count: 3 },
  ];

  const servicesList = [
    { id: 'pos', title: isAr ? 'بوابة إدارة الطلبات' : 'Order Management Portal', icon: <Layers size={24} strokeWidth={2} />, desc: isAr ? 'مركز العمليات لتجارب العملاء - التحكم في برامج الولاء وتطبيق الاستلام ونظام قائمة الانتظار والحجوزات من مكان واحد. مبني على نظام واجس.' : 'The operations hub for customer-facing experiences — control loyalty programs, the Pickup App, and the Waitlist & Reservations system from one place. Built on top of WAGS SaaS, focused on order-side and engagement features.', featured: true, iconColor: '#00f0ff' },
    { id: 'pos', title: isAr ? 'نظام واجس (إدارة نقاط البيع)' : 'WAGS SaaS (POS Management)', icon: <Database size={24} strokeWidth={2} />, desc: isAr ? 'المصدر المركزي لجميع العمليات. إدارة قائمة تطبيق نقاط البيع وشاشات العرض والأسعار والفروع والإعدادات الأساسية.' : 'The central source of truth that powers the entire system. Manage the POS App menu, Menu Portal (Signage) content, pricing, branches, and core configuration here — the master data layer that the Order Management Portal and all connected apps build on.', featured: true, iconColor: '#8b5cf6' },
    { id: 'pos', title: isAr ? 'تطبيق نقاط البيع' : 'POS App', icon: <MonitorSmartphone size={24} strokeWidth={2} />, desc: isAr ? 'نقطة بيع متكاملة لإدارة المبيعات والمشتريات والطلبات والمخزون والطلبات عبر الإنترنت والولاء.' : 'All-in-one point of sale for managing sales, purchases, demands, inventory, online ordering, and loyalty — the central hub for daily store operations.', featured: true, iconColor: '#fbbf24' },
    { id: 'pos', title: isAr ? 'تطبيق الاستلام' : 'Pickup App', icon: <Smartphone size={24} strokeWidth={2} />, desc: isAr ? 'تطبيق طلب للعملاء مع تحكم في القائمة، ومدفوعات ميسر، والطلبات المجدولة، والولاء، والمكافآت - مصمم للاستلام السريع.' : 'Customer-facing ordering app with menu control, branch snooze, Moyasser payments, scheduled orders, loyalty, coupons, and rewards — built for fast, self-service pickup.', featured: false, iconColor: '#f43f5e' },
    { id: 'pos', title: isAr ? 'ديلفراكت' : 'Deliverect', icon: <Truck size={24} strokeWidth={2} />, desc: isAr ? 'تكامل يربط قائمتك وطلباتك بمنصات التوصيل الرئيسية، ومزامنة العناصر والمخزون والطلبات في تدفق واحد.' : 'Integration that connects your menu and orders to major delivery platforms, syncing items, stock, and incoming orders into one unified flow.', featured: false, iconColor: '#38bdf8' },
    { id: 'pos', title: isAr ? 'نقطة' : 'Nuggtah', icon: <Gift size={24} strokeWidth={2} />, desc: isAr ? 'تكامل الولاء والمكافآت الذي يتيح للعملاء كسب النقاط واستبدالها، مما يعزز الزيارات المتكررة.' : 'Loyalty and rewards integration that lets customers earn and redeem points, boosting repeat visits and engagement.', featured: false, iconColor: '#00f0ff' },
    { id: 'pos', title: isAr ? 'بونات' : 'Bonat', icon: <Star size={24} strokeWidth={2} />, desc: isAr ? 'تكامل منصة ولاء العملاء والمكافآت لإدارة برامج النقاط والعروض وحملات الاحتفاظ بالعملاء.' : 'Customer loyalty and rewards platform integration for running points programs, offers, and retention campaigns.', featured: false, iconColor: '#8b5cf6' },
    { id: 'pos', title: isAr ? 'إدارة الطاولات' : 'Table Management', icon: <LayoutGrid size={24} strokeWidth={2} />, desc: isAr ? 'تحكم مرئي في الصالة والطاولات لتعيين وتتبع الطاولات - مما يحافظ على تنظيم خدمة الطعام وكفاءتها.' : 'Visual floor and table control to assign, track, and turn over tables — keeping dine-in service organized and efficient.', featured: false, iconColor: '#fbbf24' },
    { id: 'pos', title: isAr ? 'قائمة الانتظار والحجوزات' : 'Waitlist & Reservations', icon: <Clock size={24} strokeWidth={2} />, desc: isAr ? 'يتيح للعملاء الحجز المسبق أو الانضمام إلى طابور رقمي، مما يقلل من الازدحام ويدير المقاعد خلال ساعات الذروة.' : 'Lets customers book ahead or join a digital queue, reducing crowding and managing seating during peak hours.', featured: false, iconColor: '#f43f5e' },
    { id: 'pos', title: isAr ? 'شاشات العرض (القائمة)' : 'Menu Portal (Signage)', icon: <Tv size={24} strokeWidth={2} />, desc: isAr ? 'عرض قائمة رقمية للشاشات داخل المتجر، وعرض العناصر والأسعار والعروض الترويجية التي يتم تحديثها في الوقت الفعلي.' : 'Digital menu display for in-store screens, showing items, prices, and promotions that update in real time.', featured: false, iconColor: '#38bdf8' },
    { id: 'pos', title: isAr ? 'نقاط البيع الذكية (Nearpay)' : 'Soft-POS (Nearpay)', icon: <SmartphoneNfc size={24} strokeWidth={2} />, desc: isAr ? 'يحول الهاتف أو الجهاز اللوحي إلى جهاز دفع بدون تلامس عبر Nearpay - اقبل الدفع باللمس بدون أجهزة إضافية.' : 'Turns a phone or tablet into a contactless payment terminal via Nearpay — accept tap-to-pay with no extra hardware.', featured: false, iconColor: '#00f0ff' },
    { id: 'pos', title: isAr ? 'تكامل الدفع (Neoleap N910)' : 'Payment Integration (Neoleap N910)', icon: <Terminal size={24} strokeWidth={2} />, desc: isAr ? 'تكامل أصلي مع جهاز Neoleap N910 للمدفوعات السريعة والآمنة بالبطاقات والمدفوعات بدون تلامس.' : 'Native integration with the Neoleap N910 terminal for secure, fast card and contactless payments at checkout.', featured: false, iconColor: '#8b5cf6' },
    { id: 'pos', title: isAr ? 'ميسر' : 'Moyasser', icon: <Wallet size={24} strokeWidth={2} />, desc: isAr ? 'تكامل بوابة الدفع عبر الإنترنت الذي يدعم الدفع الآمن في تطبيق الاستلام وشاشات العرض - يتيح للعملاء الدفع رقمياً للطلبات الذاتية.' : 'Online payment gateway integration powering secure checkout in the Pickup App and Menu Portal (Signage) — lets customers pay digitally for self-service and on-screen orders.', featured: false, iconColor: '#fbbf24' },
    { id: 'finance', title: isAr ? 'المحاسبة' : 'Accounting', icon: <LineChart size={24} strokeWidth={2} />, desc: isAr ? 'دفتر أستاذ عام، عملات متعددة، معالجة ضريبة القيمة المضافة، وتقارير مالية جاهزة للتدقيق.' : 'Full general ledger, multi-currency, VAT handling, and audit-ready financial reports tailored for KSA.', featured: true, iconColor: '#8b5cf6' },
    { id: 'people', title: isAr ? 'الموارد البشرية والرواتب' : 'HR & Payroll', icon: <Users size={24} strokeWidth={2} />, desc: isAr ? 'رواتب متوافقة مع نظام التأمينات، نهاية الخدمة، تتبع الإجازات، وتنبيهات انتهاء الإقامات.' : 'Saudi-compliant payroll with GOSI, end-of-service, leave tracking, attendance, and document expiry alerts.', featured: true, iconColor: '#fbbf24' },
    { id: 'ops', title: isAr ? 'نظام التذاكر' : 'Ticketing System', icon: <FileText size={24} strokeWidth={2} />, desc: isAr ? 'نظام مكتب المساعدة لإدارة استفسارات العملاء وطلبات الدعم الداخلي بكفاءة.' : 'Helpdesk and support ticketing system to manage customer inquiries and internal support requests efficiently.', featured: false, iconColor: '#f43f5e' },
    { id: 'people', title: isAr ? 'الأداء' : 'Performance', icon: <Activity size={24} strokeWidth={2} />, desc: isAr ? 'تتبع أداء الموظفين، تحديد مؤشرات الأداء، وإجراء التقييمات.' : 'Track employee performance, set KPIs, conduct appraisals, and foster continuous professional development.', featured: false, iconColor: '#38bdf8' },
    { id: 'ops', title: isAr ? 'التصنيع' : 'Manufacturing', icon: <Settings size={24} strokeWidth={2} />, desc: isAr ? 'فاتورة المواد، أوامر العمل، تخطيط متطلبات المواد، والتحكم في طابق الإنتاج.' : 'Bill of materials, work orders, MRP planning, and shop-floor control for production environments.', featured: false, iconColor: '#00f0ff' },
    { id: 'ops', title: isAr ? 'الأسطول' : 'Fleet', icon: <Truck size={24} strokeWidth={2} />, desc: isAr ? 'تتبع المركبات، السائقين، سجلات الوقود، وتنبيهات الصيانة.' : 'Track vehicles, drivers, fuel logs, services, and contracts with maintenance alerts and cost analysis.', featured: false, iconColor: '#8b5cf6' },
    { id: 'finance', title: isAr ? 'المشتريات' : 'Purchase', icon: <ShoppingBag size={24} strokeWidth={2} />, desc: isAr ? 'إدارة الموردين، أوامر الشراء، واعتمادات متعددة المستويات.' : 'RFQs, vendor management, purchase orders, and multi-level approvals with full procurement audit trail.', featured: false, iconColor: '#f43f5e' },
    { id: 'finance', title: isAr ? 'مصروفات الموظفين' : 'Employee Expenses', icon: <Banknote size={24} strokeWidth={2} />, desc: isAr ? 'تبسيط الإبلاغ عن المصروفات، واعتمادها بسرعة.' : 'Streamline expense reporting, approval workflows, and quick reimbursement tied directly to accounting.', featured: false, iconColor: '#00f0ff' },
    { id: 'sales', title: isAr ? 'إدارة علاقات العملاء' : 'CRM', icon: <Briefcase size={24} strokeWidth={2} />, desc: isAr ? 'إدارة العملاء المحتملين، الصفقات، ورؤية شاملة للعملاء.' : 'Manage leads, deals, and customer 360° views with pipeline automation and email-to-lead integration.', featured: false, iconColor: '#fbbf24' },
    { id: 'sales', title: isAr ? 'المبيعات' : 'Sale', icon: <ShoppingCart size={24} strokeWidth={2} />, desc: isAr ? 'منشئ عروض الأسعار، أوامر المبيعات، وإنشاء فواتير سلس.' : 'Quotation builder, sales orders, electronic signatures, and seamless invoice creation in one flow.', featured: false, iconColor: '#38bdf8' },
    { id: 'finance', title: isAr ? 'إدارة الأصول' : 'Asset Management', icon: <ShieldCheck size={24} strokeWidth={2} />, desc: isAr ? 'دورة حياة الأصل من الشراء إلى الاستبعاد، وجداول الإهلاك.' : 'Asset lifecycle from purchase to disposal, depreciation schedules, and maintenance scheduling.', featured: false, iconColor: '#8b5cf6' },
    { id: 'people', title: isAr ? 'رحلات العمل' : 'Business Trip', icon: <Plane size={24} strokeWidth={2} />, desc: isAr ? 'إدارة طلبات السفر للشركات، الاعتمادات، وحجوزات الطيران.' : 'Manage corporate travel requests, approvals, flight bookings, and associated per-diem allowances.', featured: false, iconColor: '#f43f5e' },
    { id: 'ops', title: isAr ? 'إدارة المشاريع' : 'Project Management', icon: <LayoutDashboard size={24} strokeWidth={2} />, desc: isAr ? 'المهام، لوحات كانبان، الجداول الزمنية لتسليم المشاريع في الموعد.' : 'Tasks, Kanban boards, timesheets, and Gantt charts to keep every project on schedule and on budget.', featured: true, iconColor: '#00f0ff' },
    { id: 'sales', title: isAr ? 'ربط زد وسلة' : 'Zid & Salla Integration', icon: <Globe size={24} strokeWidth={2} />, desc: isAr ? 'مزامنة المنتجات، الطلبات، المخزون، والعملاء مع زد وسلة.' : 'Sync products, orders, stock, and customers with Zid & Salla — manage every channel from one place.', featured: true, iconColor: '#8b5cf6' },
    { id: 'ops', title: isAr ? 'المخزون' : 'Inventory', icon: <Package size={24} strokeWidth={2} />, desc: isAr ? 'مستودعات متعددة، باركود، تتبع الدفعات، وإعادة الطلب التلقائي.' : 'Multi-warehouse stock, barcoding, lot tracking, automated reordering, and real-time valuation.', featured: true, iconColor: '#fbbf24' },
    { id: 'sales', title: isAr ? 'تطبيق التوصيل B2B' : 'B2B Delivery App', icon: <Send size={24} strokeWidth={2} />, desc: isAr ? 'تطبيق جوال للعملاء لتتبع الشحنات وتقديم طلبات بالجملة.' : 'Dedicated mobile app for B2B clients to track shipments, view invoices, and place bulk orders.', featured: false, iconColor: '#38bdf8' },
  ];

  const filteredServices = activeFilter === 'all' ? servicesList : servicesList.filter(s => s.id === activeFilter);

  return (
    <>
      <section id="services" className={`py-[60px] md:py-[80px] ${isAr ? 'font-cairo' : 'font-sora'}`}>
        <div className="container">

          <div className="text-center mb-[60px]">
            <div className="section-label inline-block mb-6 bg-[#07B98F]/10 border border-[#07B98F]/25 text-[#07B98F] py-[6px] px-4 rounded-full text-[13px] font-bold tracking-[0.1em] uppercase">{t('services.label')}</div>
            <h2 className={`text-[clamp(36px,5vw,56px)] leading-[1.1] mb-6 font-extrabold text-slate-900 ${isAr ? 'font-cairo' : 'font-sora'}`}>{t('services.title1')}<span className="bg-gradient-to-br from-[#07B98F] to-[#3ECEB0] bg-clip-text text-transparent">{t('services.title2')}</span></h2>
            <p className="text-[18px] text-slate-600 leading-[1.6] max-w-[600px] mx-auto">{t('services.sub')}</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-[60px]">
            {filters.map((f, i) => (
              <button
                key={i}
                onClick={() => setActiveFilter(f.id)}
                className={`py-2.5 px-5 rounded-full text-[14px] font-semibold flex items-center gap-2 cursor-pointer transition-all duration-300 border ${activeFilter === f.id ? 'bg-[#07B98F] border-[#07B98F] text-white shadow-[0_8px_20px_rgba(7,185,143,0.2)]' : 'bg-slate-900/5 border-slate-900/10 text-slate-600 hover:bg-slate-900/10 hover:text-slate-900'}`}
              >
                {f.label}
                <span className={`py-0.5 px-2 rounded-full text-[12px] ${activeFilter === f.id ? 'bg-white/20 text-white' : 'bg-slate-900/10 text-slate-700'}`}>
                  {f.count}
                </span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className={`flex flex-wrap justify-start gap-[30px] ${isAr ? 'dir-rtl' : ''}`}>
            {activeFilter === 'all' ? (
              filters.filter(f => f.id !== 'all').map((f, i, arr) => {
                const totalItems = arr.length;
                const isFirstOfLastTwo = (totalItems % 3 === 2) && (i === totalItems - 2);
                const marginClass = isFirstOfLastTwo ? (isAr ? 'lg:mr-[calc(16.6666%+5px)]' : 'lg:ml-[calc(16.6666%+5px)]') : '';
                
                const getIconInfo = (id: string) => {
                  switch(id) {
                    case 'sales': return { icon: <ShoppingCart size={32} strokeWidth={2} />, color: '#38bdf8' };
                    case 'pos': return { icon: <MonitorSmartphone size={32} strokeWidth={2} />, color: '#fbbf24' };
                    case 'finance': return { icon: <LineChart size={32} strokeWidth={2} />, color: '#8b5cf6' };
                    case 'ops': return { icon: <Settings size={32} strokeWidth={2} />, color: '#00f0ff' };
                    case 'people': return { icon: <Users size={32} strokeWidth={2} />, color: '#f43f5e' };
                    default: return { icon: <Layers size={32} strokeWidth={2} />, color: '#07B98F' };
                  }
                };
                const { icon, color } = getIconInfo(f.id);
                return (
                  <div
                    key={i}
                    onClick={() => setActiveFilter(f.id)}
                    className={`w-full md:w-[calc(50%-15px)] lg:w-[calc(33.333%-20px)] ${marginClass} bg-white/75 backdrop-blur-[20px] border border-slate-200/50 rounded-[24px] p-8 relative overflow-hidden transition-all duration-400 ease-in-out cursor-pointer flex flex-col items-center justify-center text-center shadow-[0_15px_35px_rgba(0,0,0,0.02),_inset_0_1px_0_rgba(255,255,255,0.6)] hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_20px_40px_rgba(7,185,143,0.06)] group`}
                    style={{ borderTopColor: 'rgba(15,23,42,0.06)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderTopColor = color;
                      e.currentTarget.style.boxShadow = `0 20px 40px -10px ${color}20`;
                      const iconDiv = e.currentTarget.querySelector('.service-icon') as HTMLElement;
                      if (iconDiv) {
                        iconDiv.style.backgroundColor = color;
                        iconDiv.style.color = '#ffffff';
                        iconDiv.style.transform = 'scale(1.1)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderTopColor = 'rgba(15,23,42,0.06)';
                      e.currentTarget.style.boxShadow = 'none';
                      const iconDiv = e.currentTarget.querySelector('.service-icon') as HTMLElement;
                      if (iconDiv) {
                        iconDiv.style.backgroundColor = `${color}15`;
                        iconDiv.style.color = color;
                        iconDiv.style.transform = 'scale(1)';
                      }
                    }}
                  >
                    <div className="service-icon w-14 h-14 shrink-0 rounded-[16px] border flex items-center justify-center mb-6 transition-all duration-500 shadow-inner" style={{ backgroundColor: `${color}15`, color: color, borderColor: `${color}30` }}>
                      {icon}
                    </div>
                    <h3 className={`text-[24px] font-extrabold text-slate-900 mb-2 tracking-[-0.02em] ${isAr ? 'font-cairo' : 'font-sora'}`}>{f.label}</h3>
                  </div>
                );
              })
            ) : (
              filteredServices.map((s, i, arr) => {
                const totalItems = arr.length;
                const isFirstOfLastTwo = (totalItems % 3 === 2) && (i === totalItems - 2);
                const marginClass = isFirstOfLastTwo ? (isAr ? 'lg:mr-[calc(16.6666%+5px)]' : 'lg:ml-[calc(16.6666%+5px)]') : '';
                return (
                <div
                  key={i}
                  className={`w-full md:w-[calc(50%-15px)] lg:w-[calc(33.333%-20px)] ${marginClass} bg-white/75 backdrop-blur-[20px] border border-slate-200/50 rounded-[24px] p-8 relative overflow-hidden transition-all duration-400 ease-in-out cursor-default flex flex-col shadow-[0_15px_35px_rgba(0,0,0,0.02),_inset_0_1px_0_rgba(255,255,255,0.6)] hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_20px_40px_rgba(7,185,143,0.06)] ${isAr ? 'text-right' : ''}`}
                  style={{
                    borderTopColor: 'rgba(15,23,42,0.06)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderTopColor = s.iconColor;
                    e.currentTarget.style.boxShadow = `0 20px 40px -10px ${s.iconColor}20`;
                    const iconDiv = e.currentTarget.querySelector('.service-icon') as HTMLElement;
                    if (iconDiv) {
                      iconDiv.style.backgroundColor = s.iconColor;
                      iconDiv.style.color = '#ffffff';
                      iconDiv.style.transform = 'scale(1.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderTopColor = 'rgba(15,23,42,0.06)';
                    e.currentTarget.style.boxShadow = 'none';
                    const iconDiv = e.currentTarget.querySelector('.service-icon') as HTMLElement;
                    if (iconDiv) {
                      iconDiv.style.backgroundColor = `${s.iconColor}15`;
                      iconDiv.style.color = s.iconColor;
                      iconDiv.style.transform = 'scale(1)';
                    }
                  }}
                >
  
                  {/* Header */}
                  <div className={`flex justify-between items-start mb-6`}>
                    <div className="service-icon w-14 h-14 shrink-0 rounded-[16px] border flex items-center justify-center transition-all duration-500 shadow-inner" style={{ backgroundColor: `${s.iconColor}15`, color: s.iconColor, borderColor: `${s.iconColor}30` }}>
                      {s.icon}
                    </div>
                    {s.featured && (
                      <span className="py-1.5 px-3 rounded-full text-[11px] font-bold tracking-[0.05em] uppercase" style={{ backgroundColor: `${s.iconColor}15`, color: s.iconColor }}>{isAr ? 'شائع' : 'Popular'}</span>
                    )}
                  </div>
  
                  <h3 className={`text-[22px] font-extrabold text-slate-900 mb-3 tracking-[-0.02em] ${isAr ? 'font-cairo' : 'font-sora'}`}>{s.title}</h3>
                  <p className="text-[15px] text-slate-600 leading-[1.6] flex-grow m-0">{s.desc}</p>
  
                </div>
                );
              })
            )}
          </div>

        </div>
      </section>
    </>
  );
}
