'use client';
import React, { useState } from 'react';
import { CreditCard, LineChart, Users, FileText, Activity, Settings, Truck, ShoppingBag, Banknote, Briefcase, ShoppingCart, ShieldCheck, Plane, LayoutDashboard, Globe, Package, Send, Layers, Database, MonitorSmartphone, Smartphone, Gift, Star, LayoutGrid, Clock, Tv, SmartphoneNfc, Terminal, Wallet, Scan, Eye } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
 
export default function Services() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { t, language } = useLanguage();
  const isAr = language === 'ar';
  const font = isAr ? 'font-arabic' : 'font-inter';
  const heading = isAr ? 'font-arabic' : 'font-grotesk';

  // Reference card look: white panel, hairline border, radius 16, teal hover lift
  const card =
    'bg-wg-panel border border-wg-line rounded-[16px] shadow-[0_2px_18px_rgba(20,10,20,0.04)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-[5px] hover:border-wg-teal hover:shadow-[0_14px_30px_rgba(0,168,150,.14)]';

  const filters = [
    { id: 'all', label: t('services.filter.all'), count: 31 },
    { id: 'sales', label: t('services.filter.sales'), count: 4 },
    { id: 'pos', label: t('services.filter.pos'), count: 15 },
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
    { id: 'pos', title: isAr ? 'التعرف الذكي على اللوحات (Drive-Through)' : 'Drive-Through Plate Recognition', icon: <Scan size={24} strokeWidth={2} />, desc: isAr ? 'نظام التعرف التلقائي على لوحات السيارات لخدمة السيارات، للتعرف الفوري على العملاء الأوفياء ومزامنة طلباتهم لتسريع الدفع.' : 'Automated license plate recognition for drive-through lanes, instantly identifying returning customers and syncing order histories for faster checkout.', featured: false, iconColor: '#38bdf8' },
    { id: 'pos', title: isAr ? 'كاميرات الذكاء الاصطناعي والخرائط الحرارية' : 'AI Camera Ticket Generation & Heatmap', icon: <Eye size={24} strokeWidth={2} />, desc: isAr ? 'تتبع طوابير الانتظار بكاميرات الذكاء الاصطناعي وتوليد التذاكر تلقائياً مع خرائط حرارية لتحليل حركة العملاء بالصالة.' : 'AI-powered queue tracking and automatic support ticket generation paired with foot-traffic density heatmaps to optimize floor layout and speed of service.', featured: false, iconColor: '#00f0ff' },
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
      <section id="services" className={`relative z-[2] py-[64px] sm:py-[80px] tablet:py-[120px] text-wg-text ${font}`}>
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-8 relative z-[2]">

          {/* section-head: max-w 640, mb 56 */}
          <div className="reveal max-w-[640px] mb-8 sm:mb-[56px]">
            <div className={`text-[12px] font-semibold leading-[18px] text-wg-teal mb-[14px] ${isAr ? 'tracking-normal' : 'tracking-[0.14em] uppercase'}`}>
              {t('services.kicker')}
            </div>
            <h2 className={`${heading} text-[clamp(26px,4vw,44px)] font-semibold leading-[1.35] sm:leading-[1.5] tracking-[-0.01em] text-wg-text`}>
              {t('services.head')}
            </h2>
            <p className="mt-[14px] text-[15px] sm:text-[16px] leading-[24px] text-wg-muted">{t('services.blurb')}</p>
          </div>

          {/* services-tabs: pills, gap 10, mb 34 — count first, then label (reference) */}
          <div className="reveal flex flex-wrap gap-2 sm:gap-2.5 mb-7 sm:mb-[34px]">
            {filters.map((f, i) => (
              <button
                key={i}
                onClick={() => setActiveFilter(f.id)}
                className={`py-2 px-4 sm:py-[9px] sm:px-[18px] rounded-full border text-[12.5px] sm:text-[13px] cursor-pointer transition-[border-color,background-color,color] duration-200 ${
                  activeFilter === f.id
                    ? 'border-wg-teal bg-[rgba(0,168,150,.06)] text-wg-text'
                    : 'border-wg-line text-wg-muted hover:border-wg-teal hover:text-wg-text'
                }`}
              >
                <b className="font-semibold text-wg-text" dir="ltr">{f.count}</b> {f.label}
              </button>
            ))}
          </div>

          {/* services-grid: 5 category cards, gap 16 (reference) */}
          {activeFilter === 'all' ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 tablet:grid-cols-5 gap-3 sm:gap-4">
              {filters.filter(f => f.id !== 'all').map((f, i) => (
                // svc-card: padding 22px 18px, centered
                <button
                  key={i}
                  onClick={() => setActiveFilter(f.id)}
                  className={`${card} px-4 py-5 sm:px-[18px] sm:py-[22px] text-center cursor-pointer`}
                >
                  {/* n: Space Grotesk 700, 26px, --purple-bright */}
                  <div className="font-grotesk text-[22px] leading-[33px] sm:text-[26px] sm:leading-[39px] font-bold text-wg-purple-bright" dir="ltr">
                    {String(f.count).padStart(2, '0')}
                  </div>
                  {/* t: Inter 13px, --muted, mt 6 */}
                  <div className="text-[13px] leading-[19.5px] text-wg-muted mt-1.5">{f.label}</div>
                </button>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 tablet:grid-cols-3 gap-3 sm:gap-4">
              {filteredServices.map((s, i) => (
                // No `reveal` here: these cards are swapped in on click, after the
                // scroll-reveal observer has already run, so they'd stay at opacity 0.
                <div key={i} className={`${card} p-[22px] flex flex-col ${isAr ? 'text-right' : ''}`}>

                  <div className="flex justify-between items-start gap-3 mb-[18px]">
                    {/* ico: 44px, radius 12, purple → teal gradient (reference idiom) */}
                    <div className="w-11 h-11 shrink-0 rounded-[12px] bg-gradient-to-br from-wg-purple to-wg-teal flex items-center justify-center text-white">
                      {s.icon}
                    </div>
                    {s.featured && (
                      <span className={`shrink-0 border border-[rgba(0,168,150,.3)] bg-[rgba(0,168,150,.06)] text-wg-teal rounded-full py-1 px-2.5 text-[10px] font-semibold ${isAr ? 'tracking-normal' : 'tracking-[0.14em] uppercase'}`}>
                        {isAr ? 'شائع' : 'Popular'}
                      </span>
                    )}
                  </div>

                  {/* title: Space Grotesk 600, 17px / 25.5px */}
                  <h3 className={`${heading} text-[17px] font-semibold leading-[25.5px] tracking-normal text-wg-text mb-2`}>{s.title}</h3>
                  {/* desc: Inter 14px / 1.55, --muted */}
                  <p className="text-[14px] leading-[1.55] text-wg-muted m-0">{s.desc}</p>

                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </>
  );
}
