'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const { t, language, toggleLanguage } = useLanguage();
  const isAr = language === 'ar';
  const font = isAr ? 'font-arabic' : 'font-inter';

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close the drawer as soon as the layout grows past the mobile breakpoint
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1280px)');
    const onChange = () => mq.matches && setIsOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.whyus'), href: '#why' },
    { name: t('nav.process'), href: '#process' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.integrations'), href: '#integrations' },
    { name: t('nav.team'), href: '#team' },
    { name: t('nav.clients'), href: '#clients' },
    { name: t('nav.faq'), href: '#faq' },
  ];

  const Logo = ({ className = '' }: { className?: string }) => (
    <span className={`flex items-center gap-[10px] font-bold tracking-[0.02em] text-wg-text ${className}`}>
      <Image
        src="/logo.png"
        alt="WAGS Tech"
        width={440}
        height={256}
        priority
        className="h-7 w-auto shrink-0 sm:h-8"
      />
      <span className="whitespace-nowrap">{isAr ? 'واجز تك' : 'WAGS Tech'}</span>
    </span>
  );

  return (
    <>
      {/* scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[3px] z-[200] bg-gradient-to-r from-wg-purple to-wg-teal transition-[width] duration-100 ease-linear"
        style={{ width: `${progress}%` }}
      />

      <header className="fixed top-0 left-0 right-0 z-[100] bg-[rgba(251,249,250,0.7)] backdrop-blur-[14px] border-b border-wg-line transition-[background,box-shadow] duration-300">
        <nav className="flex items-center justify-between gap-3 py-3 px-5 sm:py-4 sm:px-6 lg:px-8 max-w-[1180px] mx-auto">

          {/* Logo — reference: Inter 700, 18px / 27px, letter-spacing .02em */}
          <Link href="/" onClick={() => setIsOpen(false)} className={`min-w-0 no-underline ${font}`}>
            <Logo className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[27px]" />
          </Link>

          {/* Desktop links — reference: Inter 400, 14px / 21px, --muted */}
          <div className={`hidden xl:flex gap-6 text-[14px] leading-[21px] text-wg-muted ${font}`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative py-1 whitespace-nowrap transition-colors duration-200 hover:text-wg-text after:content-[''] after:absolute after:-bottom-[2px] ${isAr ? 'after:right-0' : 'after:left-0'} after:w-0 after:h-[1px] after:bg-wg-teal after:transition-[width] after:duration-[250ms] hover:after:w-full`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className={`inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-[11px] rounded-full border border-wg-line text-wg-text text-[13px] sm:text-[14px] leading-[21px] font-semibold transition-colors duration-200 hover:border-wg-teal ${font}`}
            >
              <FaGlobe />
              {language === 'en' ? 'AR' : 'EN'}
            </button>

            <a
              href="#contact"
              className={`hidden md:inline-flex items-center gap-2 bg-wg-teal text-[#0B0710] font-semibold text-[14px] leading-[21px] px-[22px] py-[11px] rounded-full transition-[transform,box-shadow] duration-[250ms] ease-[cubic-bezier(.2,.8,.2,1)] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(0,217,192,.35)] ${font}`}
            >
              {t('nav.book')}
            </a>

            <button
              className="flex xl:hidden items-center justify-center p-[9px] sm:p-[10px] rounded-full border border-wg-line text-wg-text transition-colors duration-200 hover:border-wg-teal"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile backdrop */}
      <div
        className={`fixed inset-0 bg-[rgba(20,10,20,0.35)] backdrop-blur-sm z-[101] transition-opacity duration-300 xl:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile side drawer */}
      <aside
        aria-hidden={!isOpen}
        className={`fixed top-0 bottom-0 ${isAr ? 'left-0 border-r' : 'right-0 border-l'} w-[86%] max-w-[340px] bg-[rgba(251,249,250,0.97)] backdrop-blur-[18px] border-wg-line shadow-[0_20px_60px_rgba(20,10,20,0.18)] z-[102] flex flex-col transition-transform duration-300 ease-[cubic-bezier(.2,.8,.2,1)] xl:hidden ${
          isOpen ? 'translate-x-0' : isAr ? '-translate-x-full' : 'translate-x-full'
        } ${font}`}
      >
        {/* Drawer header — logo + close */}
        <div className="flex items-center justify-between gap-3 px-6 py-4 border-b border-wg-line">
          <Logo className="text-[16px] leading-[24px]" />
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="w-9 h-9 shrink-0 rounded-full border border-wg-line text-wg-text flex items-center justify-center transition-colors duration-200 hover:border-wg-teal"
          >
            <FaTimes size={16} />
          </button>
        </div>

        {/* Links — scroll if the viewport is short */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-6 py-4">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[16px] font-medium text-wg-text py-[13px] border-b border-wg-line transition-colors duration-200 hover:text-wg-teal"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Drawer footer — CTA */}
        <div className="px-6 py-5 border-t border-wg-line">
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full inline-flex items-center justify-center bg-wg-teal text-[#0B0710] font-semibold text-[15px] px-[22px] py-[13px] rounded-full"
          >
            {t('nav.book')}
          </a>
        </div>
      </aside>
    </>
  );
}
