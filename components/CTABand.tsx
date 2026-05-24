'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function CTABand() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.cta-band .reveal')
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 50)
          revealObserver.unobserve(e.target)
        }
      })
    }, { threshold: 0.08 })
    reveals.forEach(r => revealObserver.observe(r))
  }, [])

  return (
    <section className="py-[120px] relative">
      <div className="container">
        <div className="cta-band reveal bg-gradient-to-br from-navy-2 to-[#0D1F3C] border border-[rgba(0,229,199,0.18)] rounded-[24px] p-[48px_60px] flex items-center justify-between gap-8 shadow-[0_20px_60px_-16px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]">
          <div className="cta-content">
            <h2 className="text-[clamp(24px,3vw,38px)] font-black text-white leading-[1.15] -tracking-[0.03em] mb-3">
              Ready to Simplify Your <span className="bg-gradient-to-r from-teal to-teal-2 bg-clip-text text-transparent">Business Operations</span>?
            </h2>
            <p className="text-sm md:text-base text-[rgba(255,255,255,0.6)] leading-[1.7] max-w-[520px]">
              Book a free consultation with our ERP specialists — no commitment, just clarity.
            </p>
          </div>
          <Link href="#contact" className="btn-primary flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M8 2h6v6M14 2l-8 8" />
              <path d="M6 4H2v10h10v-4" />
            </svg>
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  )
}