'use client';
import React from 'react';

export default function About() {
  return (
    <>
      <section id="about" style={{ padding: '100px 0', position: 'relative' }}>
        <div className="container">
          <div className="about-grid">
            
            {/* Left Side - Text */}
            <div className="about-text">
              <div className="section-label" style={{ display: 'inline-block', marginBottom: '24px', background: 'rgba(0, 240, 255, 0.1)', border: '1px solid rgba(0, 240, 255, 0.3)', color: '#00f0ff', padding: '6px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Introduction</div>
              <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, marginBottom: '24px', fontWeight: 800, fontFamily: 'Sora', color: '#fff' }}>Who We <span style={{ background: 'linear-gradient(135deg, #00f0ff, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Are</span></h2>
              <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: '24px' }}>WAGS is a leading provider of ERP implementation and customized Odoo modules, delivering cutting-edge solutions designed to streamline business operations and boost efficiency across Saudi Arabia.</p>
              <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>We believe every organization has unique needs. Our seasoned team brings deep industry knowledge — enabling smart, flexible solutions that support growth and drive successful digital transformation.</p>
            </div>
            
            {/* Right Side - Bento Grid */}
            <div className="about-bento">
              
              {/* Vision */}
              <div style={{ 
                gridColumn: '1 / -1', 
                background: 'rgba(8, 10, 15, 0.65)', 
                backdropFilter: 'blur(20px)', 
                WebkitBackdropFilter: 'blur(20px)', 
                border: '1px solid rgba(255, 255, 255, 0.04)', 
                borderTop: '1px solid rgba(139, 92, 246, 0.3)', 
                borderRadius: '24px', 
                padding: '40px', 
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.8)' 
              }}>
                <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8b5cf6', marginBottom: '12px' }}>Vision</div>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginBottom: '16px', fontFamily: 'Sora' }}>Premier ERP Provider in the Region</h3>
                <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>To be recognized for our commitment to innovation, client success, and technical excellence — leading digital transformation across KSA and beyond.</p>
              </div>

              {/* Mission */}
              <div style={{ 
                background: 'rgba(8, 10, 15, 0.65)', 
                backdropFilter: 'blur(20px)', 
                WebkitBackdropFilter: 'blur(20px)', 
                border: '1px solid rgba(255, 255, 255, 0.04)', 
                borderTop: '1px solid rgba(0, 240, 255, 0.2)', 
                borderRadius: '24px', 
                padding: '32px 24px', 
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.8)' 
              }}>
                <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#00f0ff', marginBottom: '12px' }}>Mission</div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '16px', fontFamily: 'Sora' }}>Partnerships That Drive Growth</h3>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>Through deep collaboration and local expertise, we ensure every implementation delivers measurable results.</p>
              </div>

              {/* Value */}
              <div style={{ 
                background: 'rgba(8, 10, 15, 0.65)', 
                backdropFilter: 'blur(20px)', 
                WebkitBackdropFilter: 'blur(20px)', 
                border: '1px solid rgba(255, 255, 255, 0.04)', 
                borderTop: '1px solid rgba(244, 63, 94, 0.2)', 
                borderRadius: '24px', 
                padding: '32px 24px', 
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.8)' 
              }}>
                <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#f43f5e', marginBottom: '12px' }}>Value</div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '16px', fontFamily: 'Sora' }}>Innovation</h3>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>Continuously advancing to meet evolving business needs and industry standards.</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
