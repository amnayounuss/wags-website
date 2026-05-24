'use client';
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <>
      <nav id="navbar" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, background: 'rgba(2, 4, 10, 0.75)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(255,255,255,0.04)', transition: 'background 0.3s ease' }}>
        <style dangerouslySetInnerHTML={{__html: `
          .nav-container { padding: 0 2vw; margin: 0 auto; }
          @media (max-width: 1024px) {
            #desktop-links, #desktop-cta { display: none !important; }
            #hamburger-btn { display: flex !important; }
          }
          @media (max-width: 640px) {
            .nav-container { padding: 0 20px; }
          }
        `}} />
        <div className="nav-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px', maxWidth: '100%', width: '100%' }}>
          
          {/* Brand Logo */}
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }} onClick={() => setIsOpen(false)}>
            <img src="/logo.svg" alt="WAGS Tech Logo" style={{ width: '42px', height: '42px', objectFit: 'contain' }} />
            <span style={{ fontSize: '22px', fontWeight: 800, fontFamily: 'Sora', color: '#fff', letterSpacing: '-0.02em' }}>WAGS Tech</span>
          </a>
          
          {/* Desktop Links */}
          <div id="desktop-links" style={{ display: 'flex', gap: '28px', alignItems: 'center', flexWrap: 'nowrap', whiteSpace: 'nowrap' }}>
            <a href="#about" style={{ fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e=>e.currentTarget.style.color='#fff'} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.6)'}>About</a>
            <a href="#why" style={{ fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e=>e.currentTarget.style.color='#fff'} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.6)'}>Why Us</a>
            <a href="#integrations" style={{ fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e=>e.currentTarget.style.color='#fff'} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.6)'}>Integrations</a>
            <a href="#process" style={{ fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e=>e.currentTarget.style.color='#fff'} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.6)'}>Process</a>
            <a href="#services" style={{ fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e=>e.currentTarget.style.color='#fff'} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.6)'}>Services</a>
            <a href="#clients" style={{ fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e=>e.currentTarget.style.color='#fff'} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.6)'}>Clients</a>
          </div>

          {/* CTA & Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a href="#contact" id="desktop-cta" style={{ padding: '10px 24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '100px', fontSize: '14px', fontWeight: 600, color: '#fff', textDecoration: 'none', transition: 'all 0.3s' }} onMouseEnter={e=>{e.currentTarget.style.background='rgba(0, 240, 255, 0.1)'; e.currentTarget.style.borderColor='rgba(0, 240, 255, 0.3)'; e.currentTarget.style.color='#00f0ff'}} onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'; e.currentTarget.style.color='#fff'}}>Book a Call</a>
            <button id="hamburger-btn" className={isOpen ? 'hamburger active' : 'hamburger'} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" style={{ display: 'none', flexDirection: 'column', gap: '5px', background: 'none', border: 'none', cursor: 'pointer', padding: '4px', zIndex: 101 }}>
              <span style={{ display: 'block', width: '24px', height: '2px', background: '#fff', borderRadius: '4px', transition: 'all 0.3s', transformOrigin: 'center', transform: isOpen ? 'translateY(7px) rotate(45deg)' : 'none' }}></span>
              <span style={{ display: 'block', width: '24px', height: '2px', background: '#fff', borderRadius: '4px', transition: 'all 0.3s', opacity: isOpen ? 0 : 1 }}></span>
              <span style={{ display: 'block', width: '24px', height: '2px', background: '#fff', borderRadius: '4px', transition: 'all 0.3s', transformOrigin: 'center', transform: isOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }}></span>
            </button>
          </div>
          
        </div>
      </nav>

      {/* Mobile Backdrop */}
      <div 
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', zIndex: 1001, opacity: isOpen ? 1 : 0, visibility: isOpen ? 'visible' : 'hidden', transition: 'all 0.3s ease' }} 
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Drawer (Right Side) */}
      <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: '80%', maxWidth: '320px', background: '#ffffff', borderLeft: '1px solid rgba(0,0,0,0.05)', boxShadow: '-10px 0 30px rgba(0,0,0,0.5)', zIndex: 1002, display: 'flex', flexDirection: 'column', padding: '30px', gap: '24px', transform: isOpen ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)' }}>
        
        {/* Close Button */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
          <button onClick={() => setIsOpen(false)} style={{ background: 'rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.1)', color: '#000', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <a href="#about" onClick={() => setIsOpen(false)} style={{ fontSize: '18px', fontWeight: 600, color: '#0f172a', textDecoration: 'none', fontFamily: 'Sora', padding: '10px 0' }}>About</a>
        <a href="#why" onClick={() => setIsOpen(false)} style={{ fontSize: '18px', fontWeight: 600, color: '#0f172a', textDecoration: 'none', fontFamily: 'Sora', padding: '10px 0' }}>Why Us</a>
        <a href="#integrations" onClick={() => setIsOpen(false)} style={{ fontSize: '18px', fontWeight: 600, color: '#0f172a', textDecoration: 'none', fontFamily: 'Sora', padding: '10px 0' }}>Integrations</a>
        <a href="#process" onClick={() => setIsOpen(false)} style={{ fontSize: '18px', fontWeight: 600, color: '#0f172a', textDecoration: 'none', fontFamily: 'Sora', padding: '10px 0' }}>Process</a>
        <a href="#services" onClick={() => setIsOpen(false)} style={{ fontSize: '18px', fontWeight: 600, color: '#0f172a', textDecoration: 'none', fontFamily: 'Sora', padding: '10px 0' }}>Services</a>
        
        <a href="#contact" onClick={() => setIsOpen(false)} style={{ marginTop: '20px', fontSize: '16px', padding: '16px', background: 'linear-gradient(135deg, #00E5C7 0%, #00B8E6 100%)', color: '#03241F', borderRadius: '12px', fontWeight: 700, textDecoration: 'none', textAlign: 'center', boxShadow: '0 8px 20px -6px rgba(0, 229, 199, 0.4)' }}>Book a Call</a>
      </div>
    </>
  );
}
