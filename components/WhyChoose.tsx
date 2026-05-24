'use client';
import React from 'react';

export default function WhyChoose() {
  const features = [
    {
      title: "Tailored Odoo Solutions",
      desc: "Every ERP is fully customized to your industry, workflow, and business size — no one-size-fits-all systems.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>
    },
    {
      title: "ZATCA Compliant",
      desc: "Full compliance with Saudi regulations including VAT, e-invoicing, and all ZATCA Phase 2 standards.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
    },
    {
      title: "Long-term Partnership",
      desc: "Training, ongoing support, and continuous system improvement post go-live.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    },
    {
      title: "Local Expertise",
      desc: "Deep knowledge of the Saudi market, VAT regulations, and business culture.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    },
    {
      title: "Dedicated Team",
      desc: "Specialized ERP consultants, developers, and engineers on your project.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="9" height="9" rx="1.5"/><rect x="13" y="2" width="9" height="9" rx="1.5"/><rect x="13" y="13" width="9" height="9" rx="1.5"/><rect x="2" y="13" width="9" height="9" rx="1.5"/></svg>
    },
    {
      title: "Fast Deployment",
      desc: "Structured implementation plans ensure on-time go-live with minimal business disruption.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>
    }
  ];

  return (
    <>
      <section id="why" style={{ padding: '100px 0', position: 'relative' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div className="section-label" style={{ display: 'inline-block', marginBottom: '24px', background: 'rgba(0, 240, 255, 0.1)', border: '1px solid rgba(0, 240, 255, 0.3)', color: '#00f0ff', padding: '6px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Why Choose Us</div>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, marginBottom: '24px', fontWeight: 800, fontFamily: 'Sora', color: '#fff' }}>Why Partner with <span style={{ background: 'linear-gradient(135deg, #00f0ff, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>WAGS?</span></h2>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>We don't just provide an ERP system — we build long-term partnerships that help your business grow in an ever-changing environment.</p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
            {features.map((feature, i) => (
              <div 
                key={i} 
                style={{ 
                  flex: '1 1 280px',
                  maxWidth: '420px',
                  background: 'rgba(8, 10, 15, 0.65)', 
                  backdropFilter: 'blur(20px)', 
                  WebkitBackdropFilter: 'blur(20px)', 
                  border: '1px solid rgba(255, 255, 255, 0.04)', 
                  borderTop: '1px solid rgba(0, 240, 255, 0.15)', 
                  borderRadius: '24px', 
                  padding: '40px', 
                  boxShadow: '0 20px 40px -10px rgba(0,0,0,0.8)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderTop = '1px solid rgba(0, 240, 255, 0.6)';
                  e.currentTarget.style.boxShadow = '0 30px 60px -10px rgba(0, 240, 255, 0.15)';
                  e.currentTarget.style.background = 'rgba(12, 15, 25, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderTop = '1px solid rgba(0, 240, 255, 0.15)';
                  e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.8)';
                  e.currentTarget.style.background = 'rgba(8, 10, 15, 0.65)';
                }}
              >
                <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00f0ff', marginBottom: '24px' }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '16px', fontFamily: 'Sora' }}>{feature.title}</h3>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{feature.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
