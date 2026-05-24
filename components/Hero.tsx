export default function Hero() {
  return (
    <>
      <section id="hero">
  <div className="hero-bg">
    <div className="hero-grid"></div>
    <div className="hero-orb-1"></div>
    <div className="hero-orb-2"></div>
    <div className="hero-orb-3"></div>
  </div>
  <div className="container">
    <div className="hero-layout">
      <div className="hero-content">
        <div className="hero-badge">
          <div className="hero-badge-dot"></div>
          <span>Odoo ERP &nbsp;·&nbsp; ZATCA Compliant &nbsp;·&nbsp; KSA</span>
        </div>
        <h1 className="hero-title">Empowering Business with <span className="accent">Smart ERP</span> Solutions</h1>
        <p className="hero-sub">We build tailored Odoo ERP systems that streamline operations, ensure ZATCA compliance, and drive lasting growth for businesses across Saudi Arabia.</p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M8 2h6v6M14 2l-8 8"/><path d="M6 4H2v10h10v-4"/></svg>
            Contact us
          </a>
          <a href="#process" className="btn-ghost">
            Our Process
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </a>
        </div>
        
      </div>

      
      <div className="hero-visual reveal from-right">
        <div className="dash-glow"></div>
        <div className="dash-card dash-main">
          <div className="dash-main-header">
            <div>
              <div className="dash-title">ERP Overview · Live</div>
              <div className="dash-sub">Real-time business metrics</div>
            </div>
            <div className="dash-chip">● Connected</div>
          </div>
          <div className="dash-kpis">
            <div className="kpi-cell"><div className="kpi-label">Revenue</div><div className="kpi-val t">SAR 248K</div><div className="kpi-trend">▲ 18.2%</div></div>
            <div className="kpi-cell"><div className="kpi-label">Orders</div><div className="kpi-val">1,284</div><div className="kpi-trend">▲ 12.6%</div></div>
            <div className="kpi-cell"><div className="kpi-label">Invoices</div><div className="kpi-val">962</div><div className="kpi-trend">▲ 9.4%</div></div>
          </div>
          <div className="dash-chart">
            <div className="bar dim" style={{"height":"45%"}}></div>
            <div className="bar" style={{"height":"60%"}}></div>
            <div className="bar dim" style={{"height":"38%"}}></div>
            <div className="bar" style={{"height":"78%"}}></div>
            <div className="bar" style={{"height":"65%"}}></div>
            <div className="bar" style={{"height":"92%"}}></div>
            <div className="bar" style={{"height":"74%"}}></div>
          </div>
        </div>
        <div className="dash-pill pill-1"><div className="dot teal"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg></div>ZATCA Approved</div>
        <div className="dash-pill pill-2"><div className="dot violet"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/></svg></div>POS Synced</div>
        <div className="dash-pill pill-3"><div className="dot gold"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-7"/></svg></div>+18% Growth</div>
        <div className="dash-pill pill-4"><div className="dot rose"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></div>Real-time</div>
        <div className="dash-pill pill-5"><div className="dot teal">W</div>15 Modules</div>
      </div>
    </div>

    
  </div>
</section>
    </>
  );
}
