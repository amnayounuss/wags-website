'use client';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Why Us', href: '#why' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'Process', href: '#process' },
    { name: 'Services', href: '#services' },
    { name: 'Clients', href: '#clients' },
  ];

  return (
    <>
      <nav 
        id="navbar" 
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
          isScrolled 
            ? 'bg-gradient-to-r from-[rgba(2,4,10,0.7)] to-[rgba(10,20,40,0.7)] backdrop-blur-[20px] backdrop-saturate-[1.5] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5),inset_0_-1px_1px_rgba(255,255,255,0.1)] py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 flex items-center justify-between">

          {/* Brand Logo */}
          <a href="/" className="flex items-center gap-3 no-underline group z-50 relative" onClick={() => setIsOpen(false)}>
            <div className="relative">
              <div className="absolute inset-0 bg-[#00f0ff] blur-[16px] opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-full"></div>
              <img src="/logo.svg" alt="WAGS Tech Logo" className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] object-contain relative z-10 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3" />
            </div>
            <span className="text-[20px] font-extrabold font-sora text-white tracking-[-0.02em] transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#00f0ff]">WAGS Tech</span>
          </a>

          {/* Desktop Links (Center) */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="relative text-[14px] font-medium text-white/70 no-underline transition-colors duration-300 group hover:text-white"
              >
                {link.name}
                <span className="absolute left-1/2 -bottom-1.5 w-0 h-[2px] bg-gradient-to-r from-[#00E5C7] to-[#00f0ff] transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
              </a>
            ))}
          </div>

          {/* CTA & Hamburger */}
          <div className="flex items-center gap-4 z-50 relative">
            <a 
              href="#contact" 
              className="relative hidden lg:flex items-center justify-center py-2.5 px-8 rounded-full bg-white/5 border border-white/10 overflow-hidden group transition-all duration-500 hover:border-transparent hover:shadow-[0_0_24px_rgba(0,240,255,0.3)] hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00E5C7] to-[#00f0ff] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
              <span className="relative text-[14px] font-bold text-white group-hover:text-[#03241F] transition-colors duration-300 z-10">Book a Call</span>
            </a>
            <button 
              className={`hamburger flex lg:hidden flex-col justify-center items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-300 cursor-pointer p-2.5 rounded-full text-white`} 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
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

        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={() => setIsOpen(false)} 
            className="text-[18px] font-semibold text-slate-900 no-underline font-sora py-2.5"
          >
            {link.name}
          </a>
        ))}

        <a href="#contact" onClick={() => setIsOpen(false)} className="mt-5 text-[16px] p-4 bg-gradient-to-br from-[#00E5C7] to-[#00B8E6] text-[#03241F] rounded-xl font-bold no-underline text-center shadow-[0_8px_20px_-6px_rgba(0,229,199,0.4)]">Book a Call</a>
      </div>
    </>
  );
}
