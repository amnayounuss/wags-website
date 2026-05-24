export default function Contact() {
  return (
    <>
      <section id="contact" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
  <div className="container" style={{ position: 'relative', zIndex: 1 }}>
    {/* Single Massive Card */}
    <div style={{ background: 'rgba(15, 20, 35, 0.5)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)', border: '1px solid rgba(255,255,255,0.05)', borderTop: '1px solid rgba(255,255,255,0.15)', borderRadius: '32px', padding: 'clamp(24px, 6vw, 60px)', boxShadow: '0 30px 60px rgba(0,0,0,0.4)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 'clamp(30px, 6vw, 60px)', alignItems: 'center' }}>
      
      {/* Left Side: Info */}
      <div className="contact-info">
        <div className="section-label" style={{ display: 'inline-block', marginBottom: '24px', background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.3)', color: '#d8b4fe', padding: '6px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Get In Touch</div>
        <h2 style={{ fontSize: 'clamp(32px, 8vw, 56px)', lineHeight: 1.1, marginBottom: '24px', fontWeight: 800, fontFamily: 'Sora', color: '#fff' }}>Ready to <br/><span style={{ background: 'linear-gradient(135deg, #00f0ff, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Transform</span><br/> Your Business?</h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '40px', maxWidth: '400px' }}>Let's discuss your ERP requirements — free consultation, no commitment. Our team will respond within 24 hours.</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(0, 240, 255, 0.1)', color: '#00f0ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <span style={{ fontSize: '16px', fontWeight: 500, color: '#fff' }}>info@wags.sa</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <span style={{ fontSize: '16px', fontWeight: 500, color: '#fff' }}>Taawun Area, Riyadh</span>
          </div>
        </div>
      </div>

      {/* Right Side: Form */}
      <div style={{ width: '100%' }}>
        <style dangerouslySetInnerHTML={{__html: `
          .modern-input { background: rgba(255,255,255,0.06) !important; border: 1px solid rgba(255,255,255,0.1) !important; border-radius: 12px !important; padding: 16px 20px !important; color: #fff !important; font-size: 15px !important; transition: all 0.3s !important; width: 100%; box-sizing: border-box; }
          .modern-input::placeholder { color: rgba(255,255,255,0.4) !important; font-weight: 400; }
          .modern-input:focus { border-color: rgba(0,240,255,0.6) !important; box-shadow: 0 0 0 4px rgba(0,240,255,0.1) !important; outline: none; background: rgba(255,255,255,0.1) !important; }
          .modern-input option { color: #000 !important; background: #fff !important; }
          .form-label { display: block; margin-bottom: 8px; font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.8); text-transform: uppercase; letter-spacing: 0.05em; }
          .solid-btn { background: linear-gradient(135deg, #00f0ff, #0284c7) !important; border: none !important; color: #000 !important; font-weight: 800 !important; box-shadow: 0 10px 20px rgba(0,240,255,0.2) !important; border-radius: 12px !important; padding: 18px !important; width: 100%; font-size: 16px !important; text-transform: uppercase; letter-spacing: 0.05em; transition: all 0.3s ease; display: flex; align-items: center; justify-content: center; gap: 8px; cursor: pointer; }
          .solid-btn:hover { box-shadow: 0 15px 30px rgba(0,240,255,0.4) !important; transform: translateY(-2px); filter: brightness(1.1); }
        `}} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '20px' }}>
          <div><label className="form-label" htmlFor="name">Full Name</label><input type="text" id="name" className="modern-input" placeholder="e.g. Ahmed Al-Rashidi" /></div>
          <div><label className="form-label" htmlFor="company">Company</label><input type="text" id="company" className="modern-input" placeholder="e.g. Acme Corp" /></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '20px' }}>
          <div><label className="form-label" htmlFor="email">Email</label><input type="email" id="email" className="modern-input" placeholder="ahmed@company.sa" /></div>
          <div><label className="form-label" htmlFor="phone">Phone</label><input type="tel" id="phone" className="modern-input" placeholder="+966 5x xxx xxxx" /></div>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label className="form-label" htmlFor="service">Service Needed</label>
          <select id="service" className="modern-input" defaultValue="" style={{ appearance: 'none', cursor: 'pointer' }}>
            <option value="" disabled>Select a service...</option>
            <option>ERP Implementation</option>
            <option>POS Integration</option>
            <option>ZATCA Compliance</option>
            <option>Other</option>
          </select>
        </div>
        <div style={{ marginBottom: '32px' }}>
          <label className="form-label" htmlFor="message">Project Details</label>
          <textarea id="message" className="modern-input" placeholder="Briefly describe your requirements..." rows={4} style={{ resize: 'none' }}></textarea>
        </div>
        <button className="solid-btn">
          Book Free Consultation <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
