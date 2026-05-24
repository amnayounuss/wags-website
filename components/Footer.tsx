'use client';
export default function Footer() {
  return (
    <>
      <footer style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', padding: '80px 0 40px', marginTop: '100px', background: 'transparent' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            
            {/* Top Section */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '40px' }}>
              
              {/* Brand */}
              <div style={{ maxWidth: '400px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <img src="/logo.svg" alt="WAGS Tech Logo" style={{ width: '44px', height: '44px', objectFit: 'contain' }} />
                  <div>
                    <div style={{ fontSize: '22px', fontWeight: 800, fontFamily: 'Sora', color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.2 }}>WAGS Tech EST.</div>
                    <div style={{ fontSize: '13px', color: '#00f0ff', fontWeight: 600, letterSpacing: '0.05em' }}>Odoo ERP & IT Solutions</div>
                  </div>
                </div>
                <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '32px' }}>
                  Empowering Saudi businesses with tailored Odoo ERP solutions, ZATCA-compliant from day one.
                </p>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <a href="#" aria-label="LinkedIn" style={{ color: 'rgba(255,255,255,0.4)', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg></a>
                  <a href="#" aria-label="Twitter" style={{ color: 'rgba(255,255,255,0.4)', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" /></svg></a>
                  <a href="#" aria-label="Instagram" style={{ color: 'rgba(255,255,255,0.4)', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" /></svg></a>
                </div>
              </div>

              {/* Contact info */}
              <div style={{ textAlign: 'left', minWidth: '200px' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '20px' }}>Contact Us</div>
                <a href="mailto:info@wags.sa" style={{ display: 'inline-block', fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '12px', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#00f0ff'} onMouseLeave={e => e.currentTarget.style.color = '#fff'}>info@wags.sa</a>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>Taawun Area, Riyadh<br/>Saudi Arabia</p>
              </div>

            </div>

            {/* Bottom Section */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}>© 2025 WAGS Tech EST. All rights reserved.</div>
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                <a href="/privacy" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>Privacy Policy</a>
                <a href="#" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>Terms of Service</a>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}
