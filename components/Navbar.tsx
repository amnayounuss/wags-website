'use client';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

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
      <nav id="navbar" className="glass-navbar fixed top-5 left-1/2 -translate-x-1/2 z-[1000] w-[calc(100vw-8vw)] max-w-[1420px] rounded-[24px] bg-gradient-to-br from-[rgba(2,4,10,0.35)] to-[rgba(2,4,10,0.15)] backdrop-blur-[24px] backdrop-saturate-[2] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5),inset_0_-1px_1px_rgba(255,255,255,0.05)] transition-all duration-300 ease-in-out">
        <div className="flex items-center justify-between h-[80px] w-full px-5 sm:px-8">

              {/* Brand Logo */}
              <a href="/" className="flex items-center gap-3.5 no-underline" onClick={() => setIsOpen(false)}>
                <img src="/logo.svg" alt="WAGS Tech Logo" className="w-[42px] h-[42px] object-contain" />
                <span className="text-[22px] font-extrabold font-sora text-white tracking-[-0.02em]">WAGS Tech</span>
              </a>

              {/* Desktop Links */}
              <div id="desktop-links" className="hidden lg:flex gap-7 items-center flex-nowrap whitespace-nowrap">
                <a href="#about" className="text-[14px] font-medium text-white/60 no-underline transition-colors duration-300 hover:text-white">About</a>
                <a href="#why" className="text-[14px] font-medium text-white/60 no-underline transition-colors duration-300 hover:text-white">Why Us</a>
                <a href="#integrations" className="text-[14px] font-medium text-white/60 no-underline transition-colors duration-300 hover:text-white">Integrations</a>
                <a href="#process" className="text-[14px] font-medium text-white/60 no-underline transition-colors duration-300 hover:text-white">Process</a>
                <a href="#services" className="text-[14px] font-medium text-white/60 no-underline transition-colors duration-300 hover:text-white">Services</a>
                <a href="#clients" className="text-[14px] font-medium text-white/60 no-underline transition-colors duration-300 hover:text-white">Clients</a>
              </div>

              {/* CTA & Hamburger */}
              <div className="flex items-center gap-4">
                <a href="#contact" id="desktop-cta" className="hidden lg:flex py-2.5 px-6 bg-white/5 border border-white/10 rounded-full text-[14px] font-semibold text-white no-underline transition-all duration-300 hover:bg-[rgba(0,240,255,0.1)] hover:border-[rgba(0,240,255,0.3)] hover:text-[#00f0ff]">Book a Call</a>
                <button id="hamburger-btn" className={`hamburger flex lg:hidden flex-col justify-center items-center gap-1.5 bg-transparent border-none cursor-pointer p-1 z-[101] text-white`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                  {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
              </div>
            </div>
      </nav>

      {/* Mobile Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[1001] transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 hidden'}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Drawer (Right Side) */}
      <div className={`fixed top-0 right-0 bottom-0 w-4/5 max-w-[320px] bg-white border-l border-black/5 shadow-[-10px_0_30px_rgba(0,0,0,0.5)] z-[1002] flex flex-col p-[30px] gap-6 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        {/* Close Button */}
        <div className="flex justify-end mb-2.5">
          <button onClick={() => setIsOpen(false)} className="bg-black/5 border border-black/10 text-black w-9 h-9 rounded-full flex items-center justify-center cursor-pointer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </div>

        <a href="#about" onClick={() => setIsOpen(false)} className="text-[18px] font-semibold text-slate-900 no-underline font-sora py-2.5">About</a>
        <a href="#why" onClick={() => setIsOpen(false)} className="text-[18px] font-semibold text-slate-900 no-underline font-sora py-2.5">Why Us</a>
        <a href="#integrations" onClick={() => setIsOpen(false)} className="text-[18px] font-semibold text-slate-900 no-underline font-sora py-2.5">Integrations</a>
        <a href="#process" onClick={() => setIsOpen(false)} className="text-[18px] font-semibold text-slate-900 no-underline font-sora py-2.5">Process</a>
        <a href="#services" onClick={() => setIsOpen(false)} className="text-[18px] font-semibold text-slate-900 no-underline font-sora py-2.5">Services</a>

        <a href="#contact" onClick={() => setIsOpen(false)} className="mt-5 text-[16px] p-4 bg-gradient-to-br from-[#00E5C7] to-[#00B8E6] text-[#03241F] rounded-xl font-bold no-underline text-center shadow-[0_8px_20px_-6px_rgba(0,229,199,0.4)]">Book a Call</a>
      </div>
    </>
  );
}
