'use client';
import React from 'react';

export default function Hero() {
  return (
    <>
      <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', paddingTop: '160px', paddingBottom: '100px', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-layout">
            
            {/* Content Side */}
            <div className="hero-content">
              {/* Badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 20px', background: 'rgba(0, 240, 255, 0.05)', borderRadius: '100px', border: '1px solid rgba(0, 240, 255, 0.2)', marginBottom: '32px' }}>
                <div style={{ width: '6px', height: '6px', background: '#00f0ff', borderRadius: '50%', boxShadow: '0 0 10px #00f0ff', animation: 'pulse 2s infinite' }}></div>
                <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#00f0ff' }}>Odoo ERP &nbsp;·&nbsp; ZATCA &nbsp;·&nbsp; KSA</span>
              </div>
              
              {/* Title */}
              <h1 style={{ fontSize: 'clamp(32px, 8vw, 72px)', fontWeight: 800, fontFamily: 'Sora', color: '#fff', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '24px' }}>
                Empowering Business with <br/>
                <span style={{ background: 'linear-gradient(135deg, #00f0ff, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Smart ERP</span> Solutions
              </h1>
              
              {/* Sub */}
              <p style={{ fontSize: '18px', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', maxWidth: '580px', marginBottom: '40px' }}>
                We build tailored Odoo ERP systems that streamline operations, ensure ZATCA compliance, and drive lasting growth for businesses across Saudi Arabia.
              </p>
              
              {/* Actions */}
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'nowrap', width: '100%', maxWidth: '480px' }}>
                <a href="#contact" style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '14px 16px', background: '#fff', color: '#000', borderRadius: '100px', fontSize: 'clamp(13px, 3.5vw, 15px)', fontWeight: 700, textDecoration: 'none', transition: 'all 0.3s', whiteSpace: 'nowrap' }} onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow='0 10px 20px -5px rgba(255,255,255,0.3)'}} onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='none'}}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M8 2h6v6M14 2l-8 8"/><path d="M6 4H2v10h10v-4"/></svg>
                  Consultation
                </a>
                <a href="#process" style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '14px 16px', background: 'rgba(255,255,255,0.05)', color: '#fff', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)', fontSize: 'clamp(13px, 3.5vw, 15px)', fontWeight: 600, textDecoration: 'none', transition: 'all 0.3s', whiteSpace: 'nowrap' }} onMouseEnter={e=>{e.currentTarget.style.background='rgba(255,255,255,0.1)';e.currentTarget.style.borderColor='rgba(255,255,255,0.2)'}} onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,0.05)';e.currentTarget.style.borderColor='rgba(255,255,255,0.1)'}}>
                  Our Process
                </a>
              </div>
            </div>

            {/* Visual Side */}
            <div className="hero-visual" style={{ position: 'relative', height: '100%', minHeight: '500px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(0, 240, 255, 0.1) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 0 }}></div>
              
              {/* Main Dashboard Card */}
              <div style={{ width: '90%', maxWidth: '500px', background: 'rgba(8, 10, 15, 0.7)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.05)', borderTop: '1px solid rgba(0, 240, 255, 0.3)', borderRadius: '24px', padding: '32px', boxShadow: '0 30px 60px -20px rgba(0,0,0,0.8)', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '32px', animation: 'float 8s ease-in-out infinite' }}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                  <div>
                    <div style={{ fontSize: '18px', fontWeight: 700, color: '#fff', fontFamily: 'Sora', marginBottom: '4px' }}>ERP Overview</div>
                    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>Real-time business metrics</div>
                  </div>
                  <div style={{ padding: '6px 12px', background: 'rgba(0, 240, 255, 0.1)', color: '#00f0ff', borderRadius: '100px', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '6px', height: '6px', background: '#00f0ff', borderRadius: '50%' }}></div>
                    Live
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', gap: '16px' }}>
                  {[ 
                    { label: 'Revenue', val: '248K', trend: '+18%' },
                    { label: 'Orders', val: '1,284', trend: '+12%' },
                    { label: 'Invoices', val: '962', trend: '+9%' }
                  ].map((kpi, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '16px', padding: '16px' }}>
                      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>{kpi.label}</div>
                      <div style={{ fontSize: '20px', fontWeight: 800, color: '#fff', fontFamily: 'Sora', marginBottom: '8px' }}>{kpi.val}</div>
                      <div style={{ fontSize: '11px', color: '#00f0ff', fontWeight: 600 }}>{kpi.trend}</div>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px', height: '100px', marginTop: '10px' }}>
                  {[40, 65, 45, 80, 55, 95, 75].map((h, i) => (
                    <div key={i} style={{ flex: 1, background: i % 2 === 0 ? 'rgba(255,255,255,0.05)' : 'linear-gradient(180deg, #00f0ff 0%, rgba(0, 240, 255, 0) 100%)', height: `${h}%`, borderRadius: '4px 4px 0 0' }}></div>
                  ))}
                </div>
              </div>

              {/* Floating Pills */}
              <div style={{ position: 'absolute', bottom: '10%', left: '0%', background: 'rgba(8, 10, 15, 0.8)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '100px', padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '12px', zIndex: 2, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)', animation: 'float2 10s ease-in-out infinite' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(0, 240, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00f0ff' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <span style={{ color: '#fff', fontWeight: 600, fontSize: '14px' }}>ZATCA Approved</span>
              </div>

              <div style={{ position: 'absolute', top: '15%', right: '0%', background: 'rgba(8, 10, 15, 0.8)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '100px', padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '12px', zIndex: 2, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)', animation: 'float3 12s ease-in-out infinite' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(139, 92, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8b5cf6' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/></svg>
                </div>
                <span style={{ color: '#fff', fontWeight: 600, fontSize: '14px' }}>POS Synced</span>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
