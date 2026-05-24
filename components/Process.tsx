export default function Process() {
  return (
    <>
      <section id="process" style={{ padding: '120px 0', position: 'relative' }}>
  <div className="container">
    <div className="process-header reveal" style={{ textAlign: 'center', marginBottom: '80px' }}>
      <div className="section-label">How We Work</div>
      <h2 className="section-heading" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: '24px' }}>A Clear Path from <br/><span className="grad">Discovery to Launch</span></h2>
      <p className="section-sub" style={{ margin: '0 auto', maxWidth: '600px', fontSize: '18px', color: 'rgba(255,255,255,0.7)' }}>Our proven 4-step methodology has delivered 50+ successful Odoo implementations across the Kingdom.</p>
    </div>

    {/* Modern Staggered Grid */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', alignItems: 'start' }}>
      
      {/* Step 01 */}
      <div className="process-step reveal" style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '40px 32px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '120px', fontWeight: 800, color: 'transparent', WebkitTextStroke: '2px rgba(255,255,255,0.03)', zIndex: 0, pointerEvents: 'none' }}>01</div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 240, 255, 0.1)', border: '1px solid rgba(0, 240, 255, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: '#00f0ff' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </div>
          <h4 style={{ fontSize: '22px', marginBottom: '16px', color: '#fff', fontWeight: 700 }}>Discovery</h4>
          <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, fontSize: '15px' }}>We map your workflows, pain points, and growth goals through deep stakeholder interviews.</p>
        </div>
      </div>

      {/* Step 02 */}
      <div className="process-step reveal" style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '40px 32px', position: 'relative', overflow: 'hidden', marginTop: '40px' }}>
        <div style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '120px', fontWeight: 800, color: 'transparent', WebkitTextStroke: '2px rgba(255,255,255,0.03)', zIndex: 0, pointerEvents: 'none' }}>02</div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: '#8b5cf6' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          <h4 style={{ fontSize: '22px', marginBottom: '16px', color: '#fff', fontWeight: 700 }}>Design</h4>
          <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, fontSize: '15px' }}>Architecture, module selection, and customization blueprint tailored to your business.</p>
        </div>
      </div>

      {/* Step 03 */}
      <div className="process-step reveal" style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '40px 32px', position: 'relative', overflow: 'hidden', marginTop: '80px' }}>
        <div style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '120px', fontWeight: 800, color: 'transparent', WebkitTextStroke: '2px rgba(255,255,255,0.03)', zIndex: 0, pointerEvents: 'none' }}>03</div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(244, 63, 94, 0.1)', border: '1px solid rgba(244, 63, 94, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: '#f43f5e' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
          </div>
          <h4 style={{ fontSize: '22px', marginBottom: '16px', color: '#fff', fontWeight: 700 }}>Deploy</h4>
          <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, fontSize: '15px' }}>Agile rollout with data migration, integrations, ZATCA setup, and team training.</p>
        </div>
      </div>

      {/* Step 04 */}
      <div className="process-step reveal" style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '40px 32px', position: 'relative', overflow: 'hidden', marginTop: '120px' }}>
        <div style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '120px', fontWeight: 800, color: 'transparent', WebkitTextStroke: '2px rgba(255,255,255,0.03)', zIndex: 0, pointerEvents: 'none' }}>04</div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(251, 191, 36, 0.1)', border: '1px solid rgba(251, 191, 36, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: '#fbbf24' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
          </div>
          <h4 style={{ fontSize: '22px', marginBottom: '16px', color: '#fff', fontWeight: 700 }}>Support</h4>
          <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, fontSize: '15px' }}>Continuous improvement, 24/7 support, and quarterly performance reviews.</p>
        </div>
      </div>

    </div>
  </div>
</section>
    </>
  );
}
