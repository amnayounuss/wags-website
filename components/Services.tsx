export default function Services() {
  return (
    <>
      <section id="services">
  <div className="container">
    <div className="services-header reveal">
      <div className="section-label">Our Services</div>
      <h2 className="section-heading">Odoo Modules We <span className="grad">Deliver</span></h2>
      <p className="section-sub">From accounting to POS, HR to e-commerce — we build and customize the full Odoo ecosystem.</p>
    </div>

    <div className="mod-filters reveal">
      <button className="mod-filter active" data-filter="all">All Modules <span className="count">12</span></button>
      <button className="mod-filter" data-filter="sales">Sales & POS <span className="count">4</span></button>
      <button className="mod-filter" data-filter="finance">Finance <span className="count">2</span></button>
      <button className="mod-filter" data-filter="ops">Operations <span className="count">5</span></button>
      <button className="mod-filter" data-filter="people">People <span className="count">1</span></button>
    </div>

    <div className="mod-grid">
      <div className="mod-card reveal featured" data-cat="sales">
        <div className="mod-card-head"><div className="lg-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/><path d="M7 15h3M14 15h3"/></svg></div><span className="mod-badge">Popular</span></div>
        <h3 className="mod-title">POS Integration</h3>
        <p className="mod-desc">Multi-channel point-of-sale tied to your inventory and accounting in real time. ZATCA-compliant receipts out of the box.</p>
        <div className="mod-features"><span className="mod-feat">Loyalty</span><span className="mod-feat">Delivery</span><span className="mod-feat">Tap-to-Pay</span><span className="mod-feat">Online</span></div>
        <div className="mod-divider"></div>
        <a href="#contact" className="mod-link">Learn more <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
      <div className="mod-card reveal featured" data-cat="finance">
        <div className="mod-card-head"><div className="lg-icon violet"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-7"/><circle cx="11" cy="10" r="1.2" fill="currentColor"/></svg></div><span className="mod-badge">Popular</span></div>
        <h3 className="mod-title">Accounting</h3>
        <p className="mod-desc">Full general ledger, multi-currency, VAT handling, and audit-ready financial reports tailored for KSA.</p>
        <div className="mod-features"><span className="mod-feat">VAT 15%</span><span className="mod-feat">ZATCA</span><span className="mod-feat">Multi-currency</span><span className="mod-feat">Reports</span></div>
        <div className="mod-divider"></div>
        <a href="#contact" className="mod-link">Learn more <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
      <div className="mod-card reveal featured" data-cat="people">
        <div className="mod-card-head"><div className="lg-icon gold"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><span className="mod-badge gold">Popular</span></div>
        <h3 className="mod-title">HR & Payroll</h3>
        <p className="mod-desc">Saudi-compliant payroll with GOSI, end-of-service, leave tracking, attendance, and document expiry alerts.</p>
        <div className="mod-features"><span className="mod-feat">GOSI</span><span className="mod-feat">Leaves</span><span className="mod-feat">Attendance</span><span className="mod-feat">Payslips</span></div>
        <div className="mod-divider"></div>
        <a href="#contact" className="mod-link">Learn more <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
      <div className="mod-card reveal" data-cat="sales">
        <div className="mod-card-head"><div className="lg-icon cyan"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 8v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 6h20"/><path d="M9 11v6M15 11v6"/></svg></div></div>
        <h3 className="mod-title">CRM</h3>
        <p className="mod-desc">Manage leads, deals, and customer 360° views with pipeline automation and email-to-lead integration.</p>
        <div className="mod-features"><span className="mod-feat">Pipeline</span><span className="mod-feat">Leads</span><span className="mod-feat">Email Sync</span><span className="mod-feat">Quotes</span></div>
        <div className="mod-divider"></div>
        <a href="#contact" className="mod-link">Learn more <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
      <div className="mod-card reveal" data-cat="ops">
        <div className="mod-card-head"><div className="lg-icon rose"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/></svg></div><span className="mod-badge">Popular</span></div>
        <h3 className="mod-title">Inventory</h3>
        <p className="mod-desc">Multi-warehouse stock, barcoding, lot tracking, automated reordering, and real-time valuation.</p>
        <div className="mod-features"><span className="mod-feat">Multi-warehouse</span><span className="mod-feat">Barcoding</span><span className="mod-feat">Lots</span><span className="mod-feat">Reorder</span></div>
        <div className="mod-divider"></div>
        <a href="#contact" className="mod-link">Learn more <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
      <div className="mod-card reveal featured" data-cat="ops">
        <div className="mod-card-head"><div className="lg-icon indigo"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="11" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="18" width="7" height="3" rx="1"/></svg></div><span className="mod-badge">Popular</span></div>
        <h3 className="mod-title">Project Management</h3>
        <p className="mod-desc">Tasks, Kanban boards, timesheets, and Gantt charts to keep every project on schedule and on budget.</p>
        <div className="mod-features"><span className="mod-feat">Kanban</span><span className="mod-feat">Gantt</span><span className="mod-feat">Timesheets</span><span className="mod-feat">Tasks</span></div>
        <div className="mod-divider"></div>
        <a href="#contact" className="mod-link">Learn more <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
      <div className="mod-card reveal" data-cat="ops">
        <div className="mod-card-head"><div className="lg-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.36.16.66.42.88.74.22.32.34.7.35 1.09L21 11h0a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></div></div>
        <h3 className="mod-title">Manufacturing</h3>
        <p className="mod-desc">Bill of materials, work orders, MRP planning, and shop-floor control for production environments.</p>
        <div className="mod-features"><span className="mod-feat">BOM</span><span className="mod-feat">Work Orders</span><span className="mod-feat">MRP</span><span className="mod-feat">Quality</span></div>
        <div className="mod-divider"></div>
        <a href="#contact" className="mod-link">Learn more <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
      <div className="mod-card reveal" data-cat="sales">
        <div className="mod-card-head"><div className="lg-icon gold"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></div></div>
        <h3 className="mod-title">Sales</h3>
        <p className="mod-desc">Quotation builder, sales orders, electronic signatures, and seamless invoice creation in one flow.</p>
        <div className="mod-features"><span className="mod-feat">Quotes</span><span className="mod-feat">Orders</span><span className="mod-feat">E-Sign</span><span className="mod-feat">Invoices</span></div>
        <div className="mod-divider"></div>
        <a href="#contact" className="mod-link">Learn more <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
      <div className="mod-card reveal" data-cat="ops">
        <div className="mod-card-head"><div className="lg-icon violet"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794l-1.974 12.51A2 2 0 0 1 16.948 20H7.052a2 2 0 0 1-1.975-1.456L3.103 6.034z"/></svg></div></div>
        <h3 className="mod-title">Purchase</h3>
        <p className="mod-desc">RFQs, vendor management, purchase orders, and multi-level approvals with full procurement audit trail.</p>
        <div className="mod-features"><span className="mod-feat">RFQ</span><span className="mod-feat">Vendors</span><span className="mod-feat">Approvals</span><span className="mod-feat">3-way Match</span></div>
        <div className="mod-divider"></div>
        <a href="#contact" className="mod-link">Learn more <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
      <div className="mod-card reveal" data-cat="ops">
        <div className="mod-card-head"><div className="lg-icon cyan"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1L1.5 12v4h2"/><circle cx="6.5" cy="16.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/></svg></div></div>
        <h3 className="mod-title">Fleet Management</h3>
        <p className="mod-desc">Track vehicles, drivers, fuel logs, services, and contracts with maintenance alerts and cost analysis.</p>
        <div className="mod-features"><span className="mod-feat">Vehicles</span><span className="mod-feat">Drivers</span><span className="mod-feat">Fuel</span><span className="mod-feat">Service</span></div>
        <div className="mod-divider"></div>
        <a href="#contact" className="mod-link">Learn more <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
      <div className="mod-card reveal" data-cat="finance">
        <div className="mod-card-head"><div className="lg-icon rose"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></div></div>
        <h3 className="mod-title">Asset Management</h3>
        <p className="mod-desc">Asset lifecycle from purchase to disposal, depreciation schedules, and maintenance scheduling.</p>
        <div className="mod-features"><span className="mod-feat">Depreciation</span><span className="mod-feat">Lifecycle</span><span className="mod-feat">Maintenance</span><span className="mod-feat">Audit</span></div>
        <div className="mod-divider"></div>
        <a href="#contact" className="mod-link">Learn more <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
      <div className="mod-card reveal" data-cat="sales">
        <div className="mod-card-head"><div className="lg-icon indigo"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div></div>
        <h3 className="mod-title">E-Commerce Integration</h3>
        <p className="mod-desc">Sync products, orders, stock, and customers with Zid & Salla — manage every channel from one place.</p>
        <div className="mod-features"><span className="mod-feat">Zid</span><span className="mod-feat">Salla</span><span className="mod-feat">Sync</span><span className="mod-feat">Multi-channel</span></div>
        <div className="mod-divider"></div>
        <a href="#contact" className="mod-link">Learn more <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
