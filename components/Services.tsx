'use client';
import React, { useState } from 'react';
import { CreditCard, LineChart, Users, FileText, Activity, Settings, Truck, ShoppingBag, Banknote, Briefcase, ShoppingCart, ShieldCheck, Plane, LayoutDashboard, Globe, Package, Send } from 'lucide-react';

export default function Services() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Modules', count: 17 },
    { id: 'sales', label: 'Sales & POS', count: 5 },
    { id: 'finance', label: 'Finance', count: 4 },
    { id: 'ops', label: 'Operations', count: 5 },
    { id: 'people', label: 'People', count: 3 },
  ];

  const servicesList = [
    { id: 'sales', title: 'POS Integration', icon: <CreditCard size={24} strokeWidth={2} />, desc: 'Multi-channel point-of-sale tied to your inventory and accounting in real time. ZATCA-compliant receipts out of the box.', featured: true, iconColor: '#00f0ff' },
    { id: 'finance', title: 'Accounting', icon: <LineChart size={24} strokeWidth={2} />, desc: 'Full general ledger, multi-currency, VAT handling, and audit-ready financial reports tailored for KSA.', featured: true, iconColor: '#8b5cf6' },
    { id: 'people', title: 'HR & Payroll', icon: <Users size={24} strokeWidth={2} />, desc: 'Saudi-compliant payroll with GOSI, end-of-service, leave tracking, attendance, and document expiry alerts.', featured: true, iconColor: '#fbbf24' },
    { id: 'ops', title: 'Ticketing System', icon: <FileText size={24} strokeWidth={2} />, desc: 'Helpdesk and support ticketing system to manage customer inquiries and internal support requests efficiently.', featured: false, iconColor: '#f43f5e' },
    { id: 'people', title: 'Performance', icon: <Activity size={24} strokeWidth={2} />, desc: 'Track employee performance, set KPIs, conduct appraisals, and foster continuous professional development.', featured: false, iconColor: '#38bdf8' },
    { id: 'ops', title: 'Manufacturing', icon: <Settings size={24} strokeWidth={2} />, desc: 'Bill of materials, work orders, MRP planning, and shop-floor control for production environments.', featured: false, iconColor: '#00f0ff' },
    { id: 'ops', title: 'Fleet', icon: <Truck size={24} strokeWidth={2} />, desc: 'Track vehicles, drivers, fuel logs, services, and contracts with maintenance alerts and cost analysis.', featured: false, iconColor: '#8b5cf6' },
    { id: 'finance', title: 'Purchase', icon: <ShoppingBag size={24} strokeWidth={2} />, desc: 'RFQs, vendor management, purchase orders, and multi-level approvals with full procurement audit trail.', featured: false, iconColor: '#f43f5e' },
    { id: 'finance', title: 'Employee Expenses', icon: <Banknote size={24} strokeWidth={2} />, desc: 'Streamline expense reporting, approval workflows, and quick reimbursement tied directly to accounting.', featured: false, iconColor: '#00f0ff' },
    { id: 'sales', title: 'CRM', icon: <Briefcase size={24} strokeWidth={2} />, desc: 'Manage leads, deals, and customer 360° views with pipeline automation and email-to-lead integration.', featured: false, iconColor: '#fbbf24' },
    { id: 'sales', title: 'Sale', icon: <ShoppingCart size={24} strokeWidth={2} />, desc: 'Quotation builder, sales orders, electronic signatures, and seamless invoice creation in one flow.', featured: false, iconColor: '#38bdf8' },
    { id: 'finance', title: 'Asset Management', icon: <ShieldCheck size={24} strokeWidth={2} />, desc: 'Asset lifecycle from purchase to disposal, depreciation schedules, and maintenance scheduling.', featured: false, iconColor: '#8b5cf6' },
    { id: 'people', title: 'Business Trip', icon: <Plane size={24} strokeWidth={2} />, desc: 'Manage corporate travel requests, approvals, flight bookings, and associated per-diem allowances.', featured: false, iconColor: '#f43f5e' },
    { id: 'ops', title: 'Project Management', icon: <LayoutDashboard size={24} strokeWidth={2} />, desc: 'Tasks, Kanban boards, timesheets, and Gantt charts to keep every project on schedule and on budget.', featured: true, iconColor: '#00f0ff' },
    { id: 'sales', title: 'Zid & Salla Integration', icon: <Globe size={24} strokeWidth={2} />, desc: 'Sync products, orders, stock, and customers with Zid & Salla — manage every channel from one place.', featured: true, iconColor: '#8b5cf6' },
    { id: 'ops', title: 'Inventory', icon: <Package size={24} strokeWidth={2} />, desc: 'Multi-warehouse stock, barcoding, lot tracking, automated reordering, and real-time valuation.', featured: true, iconColor: '#fbbf24' },
    { id: 'sales', title: 'B2B Delivery App', icon: <Send size={24} strokeWidth={2} />, desc: 'Dedicated mobile app for B2B clients to track shipments, view invoices, and place bulk orders.', featured: false, iconColor: '#38bdf8' },
  ];

  const filteredServices = activeFilter === 'all' ? servicesList : servicesList.filter(s => s.id === activeFilter);

  return (
    <>
      <section id="services" className="py-[120px]">
        <div className="container">

          <div className="text-center mb-[60px]">
            <div className="section-label inline-block mb-6 bg-[rgba(0,240,255,0.1)] border border-[rgba(0,240,255,0.3)] text-[#00f0ff] py-[6px] px-4 rounded-full text-[13px] font-bold tracking-[0.1em] uppercase">Our Services</div>
            <h2 className="text-[clamp(36px,5vw,56px)] leading-[1.1] mb-6 font-extrabold font-sora text-white">Odoo Modules We <span className="bg-gradient-to-br from-[#00f0ff] to-[#8b5cf6] bg-clip-text text-transparent">Deliver</span></h2>
            <p className="text-[18px] text-white/70 leading-[1.6] max-w-[600px] mx-auto">From accounting to POS, HR to e-commerce — we build and customize the full Odoo ecosystem.</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-[60px]">
            {filters.map((f, i) => (
              <button
                key={i}
                onClick={() => setActiveFilter(f.id)}
                className={`py-2.5 px-5 rounded-full text-[14px] font-semibold flex items-center gap-2 cursor-pointer transition-all duration-300 border border-transparent ${activeFilter === f.id ? 'bg-white/10 border-white/20 text-white' : 'bg-[rgba(8,10,15,0.5)] border-white/5 text-white/60 hover:bg-white/5 hover:text-white'}`}
              >
                {f.label}
                <span className={`py-0.5 px-2 rounded-full text-[12px] ${activeFilter === f.id ? 'bg-white/15' : 'bg-white/5'}`}>
                  {f.count}
                </span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,280px),1fr))] gap-[30px]">
            {filteredServices.map((s, i) => (
              <div
                key={i}
                className="bg-[rgba(8,10,15,0.65)] backdrop-blur-[20px] border border-white/5 rounded-[24px] p-8 relative overflow-hidden transition-all duration-400 ease-in-out cursor-default flex flex-col hover:-translate-y-1.5 hover:bg-[rgba(15,20,30,0.8)]"
                style={{
                  borderTopColor: 'rgba(255,255,255,0.06)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderTopColor = s.iconColor;
                  e.currentTarget.style.boxShadow = `0 20px 40px -10px ${s.iconColor}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderTopColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >

                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${s.iconColor}15`, color: s.iconColor }}>
                    {s.icon}
                  </div>
                  {s.featured && (
                    <span className="py-1.5 px-3 rounded-full text-[11px] font-bold tracking-[0.05em] uppercase" style={{ backgroundColor: `${s.iconColor}15`, color: s.iconColor }}>Popular</span>
                  )}
                </div>

                <h3 className="text-[22px] font-extrabold font-sora text-white mb-3 tracking-[-0.02em]">{s.title}</h3>
                <p className="text-[15px] text-white/60 leading-[1.6] flex-grow m-0">{s.desc}</p>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
