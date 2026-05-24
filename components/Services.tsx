'use client';
import React, { useState } from 'react';

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
    { id: 'sales', title: 'POS Integration', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/><path d="M7 15h3M14 15h3"/></svg>, desc: 'Multi-channel point-of-sale tied to your inventory and accounting in real time. ZATCA-compliant receipts out of the box.', featured: true, iconColor: '#00f0ff' },
    { id: 'finance', title: 'Accounting', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-7"/><circle cx="11" cy="10" r="1.2" fill="currentColor"/></svg>, desc: 'Full general ledger, multi-currency, VAT handling, and audit-ready financial reports tailored for KSA.', featured: true, iconColor: '#8b5cf6' },
    { id: 'people', title: 'HR & Payroll', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, desc: 'Saudi-compliant payroll with GOSI, end-of-service, leave tracking, attendance, and document expiry alerts.', featured: true, iconColor: '#fbbf24' },
    { id: 'ops', title: 'Ticketing System', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>, desc: 'Helpdesk and support ticketing system to manage customer inquiries and internal support requests efficiently.', featured: false, iconColor: '#f43f5e' },
    { id: 'people', title: 'Performance', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, desc: 'Track employee performance, set KPIs, conduct appraisals, and foster continuous professional development.', featured: false, iconColor: '#38bdf8' },
    { id: 'ops', title: 'Manufacturing', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.36.16.66.42.88.74.22.32.34.7.35 1.09L21 11h0a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>, desc: 'Bill of materials, work orders, MRP planning, and shop-floor control for production environments.', featured: false, iconColor: '#00f0ff' },
    { id: 'ops', title: 'Fleet', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1L1.5 12v4h2"/><circle cx="6.5" cy="16.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/></svg>, desc: 'Track vehicles, drivers, fuel logs, services, and contracts with maintenance alerts and cost analysis.', featured: false, iconColor: '#8b5cf6' },
    { id: 'finance', title: 'Purchase', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794l-1.974 12.51A2 2 0 0 1 16.948 20H7.052a2 2 0 0 1-1.975-1.456L3.103 6.034z"/></svg>, desc: 'RFQs, vendor management, purchase orders, and multi-level approvals with full procurement audit trail.', featured: false, iconColor: '#f43f5e' },
    { id: 'finance', title: 'Employee Expenses', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>, desc: 'Streamline expense reporting, approval workflows, and quick reimbursement tied directly to accounting.', featured: false, iconColor: '#00f0ff' },
    { id: 'sales', title: 'CRM', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 8v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 6h20"/><path d="M9 11v6M15 11v6"/></svg>, desc: 'Manage leads, deals, and customer 360° views with pipeline automation and email-to-lead integration.', featured: false, iconColor: '#fbbf24' },
    { id: 'sales', title: 'Sale', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>, desc: 'Quotation builder, sales orders, electronic signatures, and seamless invoice creation in one flow.', featured: false, iconColor: '#38bdf8' },
    { id: 'finance', title: 'Asset Management', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>, desc: 'Asset lifecycle from purchase to disposal, depreciation schedules, and maintenance scheduling.', featured: false, iconColor: '#8b5cf6' },
    { id: 'people', title: 'Business Trip', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>, desc: 'Manage corporate travel requests, approvals, flight bookings, and associated per-diem allowances.', featured: false, iconColor: '#f43f5e' },
    { id: 'ops', title: 'Project Management', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="11" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="18" width="7" height="3" rx="1"/></svg>, desc: 'Tasks, Kanban boards, timesheets, and Gantt charts to keep every project on schedule and on budget.', featured: true, iconColor: '#00f0ff' },
    { id: 'sales', title: 'Zid & Salla Integration', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, desc: 'Sync products, orders, stock, and customers with Zid & Salla — manage every channel from one place.', featured: true, iconColor: '#8b5cf6' },
    { id: 'ops', title: 'Inventory', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/></svg>, desc: 'Multi-warehouse stock, barcoding, lot tracking, automated reordering, and real-time valuation.', featured: true, iconColor: '#fbbf24' },
    { id: 'sales', title: 'B2B Delivery App', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>, desc: 'Dedicated mobile app for B2B clients to track shipments, view invoices, and place bulk orders.', featured: false, iconColor: '#38bdf8' },
  ];

  const filteredServices = activeFilter === 'all' ? servicesList : servicesList.filter(s => s.id === activeFilter);

  return (
    <>
      <section id="services" style={{ padding: '120px 0' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="section-label" style={{ display: 'inline-block', marginBottom: '24px', background: 'rgba(0, 240, 255, 0.1)', border: '1px solid rgba(0, 240, 255, 0.3)', color: '#00f0ff', padding: '6px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Our Services</div>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, marginBottom: '24px', fontWeight: 800, fontFamily: 'Sora', color: '#fff' }}>Odoo Modules We <span style={{ background: 'linear-gradient(135deg, #00f0ff, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Deliver</span></h2>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>From accounting to POS, HR to e-commerce — we build and customize the full Odoo ecosystem.</p>
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginBottom: '60px' }}>
            {filters.map((f, i) => (
              <button 
                key={i}
                onClick={() => setActiveFilter(f.id)}
                style={{ 
                  background: activeFilter === f.id ? 'rgba(255, 255, 255, 0.1)' : 'rgba(8, 10, 15, 0.5)',
                  border: `1px solid ${activeFilter === f.id ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)'}`,
                  color: activeFilter === f.id ? '#fff' : 'rgba(255, 255, 255, 0.6)',
                  padding: '10px 20px',
                  borderRadius: '100px',
                  fontSize: '14px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  if(activeFilter !== f.id) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.color = '#fff';
                  }
                }}
                onMouseLeave={(e) => {
                  if(activeFilter !== f.id) {
                    e.currentTarget.style.background = 'rgba(8, 10, 15, 0.5)';
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
                  }
                }}
              >
                {f.label} 
                <span style={{ 
                  background: activeFilter === f.id ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)', 
                  padding: '2px 8px', 
                  borderRadius: '100px', 
                  fontSize: '12px' 
                }}>
                  {f.count}
                </span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '30px' }}>
            {filteredServices.map((s, i) => (
              <div 
                key={i}
                style={{ 
                  background: 'rgba(8, 10, 15, 0.65)', 
                  backdropFilter: 'blur(20px)', 
                  border: '1px solid rgba(255,255,255,0.06)', 
                  borderRadius: '24px', 
                  padding: '32px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  cursor: 'default',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderTop = `1px solid ${s.iconColor}`;
                  e.currentTarget.style.background = 'rgba(15, 20, 30, 0.8)';
                  e.currentTarget.style.boxShadow = `0 20px 40px -10px ${s.iconColor}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderTop = '1px solid rgba(255,255,255,0.06)';
                  e.currentTarget.style.background = 'rgba(8, 10, 15, 0.65)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: `${s.iconColor}15`, color: s.iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {s.icon}
                  </div>
                  {s.featured && (
                    <span style={{ padding: '6px 12px', background: `${s.iconColor}15`, color: s.iconColor, borderRadius: '100px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Popular</span>
                  )}
                </div>

                <h3 style={{ fontSize: '22px', fontWeight: 800, fontFamily: 'Sora', color: '#fff', marginBottom: '12px', letterSpacing: '-0.02em' }}>{s.title}</h3>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, flexGrow: 1, margin: 0 }}>{s.desc}</p>
                
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
