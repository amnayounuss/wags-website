'use client';
import React from 'react';
import { Check, CreditCard } from 'lucide-react';

export default function Hero() {
  return (
    <>
      <section id="hero" className="min-h-screen flex items-center relative pt-[160px] pb-[100px] overflow-hidden">
        <div className="container relative z-10">
          <div className="hero-layout">

            {/* Content Side */}
            <div className="hero-content">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 py-2 px-5 bg-[rgba(0,240,255,0.05)] rounded-full border border-[rgba(0,240,255,0.2)] mb-8">
                <div className="w-1.5 h-1.5 bg-[#00f0ff] rounded-full shadow-[0_0_10px_#00f0ff] animate-pulse"></div>
                <span className="text-[13px] font-bold tracking-[0.1em] uppercase text-[#00f0ff]">Odoo ERP &nbsp;·&nbsp; ZATCA &nbsp;·&nbsp; KSA</span>
              </div>

              {/* Title */}
              <h1 className="text-[clamp(32px,8vw,72px)] font-extrabold font-sora text-white leading-[1.1] tracking-[-0.03em] mb-6">
                Empowering Business with <br />
                <span className="bg-gradient-to-br from-[#00f0ff] to-[#8b5cf6] bg-clip-text text-transparent">Smart ERP</span> Solutions
              </h1>

              {/* Sub */}
              <p className="text-[18px] leading-[1.7] text-white/60 max-w-[580px] mb-10">
                We build tailored Odoo ERP systems that streamline operations, ensure ZATCA compliance, and drive lasting growth for businesses across Saudi Arabia.
              </p>

              {/* Actions */}
              <div className="flex gap-2.5 items-center flex-nowrap w-full max-w-[480px]">
                <a href="#contact" className="flex-1 inline-flex items-center justify-center gap-1.5 py-3.5 px-4 bg-white text-black rounded-full text-[clamp(13px,3.5vw,15px)] font-bold no-underline transition-all duration-300 whitespace-nowrap hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-5px_rgba(255,255,255,0.3)]">
                  Contact us
                </a>
                <a href="#process" className="flex-1 inline-flex items-center justify-center gap-1.5 py-3.5 px-4 bg-white/5 text-white rounded-full border border-white/10 text-[clamp(13px,3.5vw,15px)] font-semibold no-underline transition-all duration-300 whitespace-nowrap hover:bg-white/10 hover:border-white/20">
                  Our Process
                </a>
              </div>
            </div>

            {/* Visual Side */}
            <div className="hero-visual relative h-full min-h-[500px] w-full flex items-center justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-[radial-gradient(circle,rgba(0,240,255,0.1)_0%,transparent_70%)] blur-[60px] z-0"></div>

              {/* Main Dashboard Card */}
              <div className="w-[90%] max-w-[500px] bg-[rgba(8,10,15,0.7)] backdrop-blur-[24px] border border-white/5 border-t-[rgba(0,240,255,0.3)] rounded-[24px] p-8 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] z-10 flex flex-col gap-8 animate-[float_8s_ease-in-out_infinite]">

                <div className="flex justify-between items-center flex-wrap gap-2.5">
                  <div>
                    <div className="text-[18px] font-bold text-white font-sora mb-1">ERP Overview</div>
                    <div className="text-[13px] text-white/50">Real-time business metrics</div>
                  </div>
                  <div className="py-1.5 px-3 bg-[rgba(0,240,255,0.1)] text-[#00f0ff] rounded-full text-[12px] font-bold flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-[#00f0ff] rounded-full"></div>
                    Live
                  </div>
                </div>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-4">
                  {[
                    { label: 'Revenue', val: '248K', trend: '+18%' },
                    { label: 'Orders', val: '1,284', trend: '+12%' },
                    { label: 'Invoices', val: '962', trend: '+9%' }
                  ].map((kpi, i) => (
                    <div key={i} className="bg-white/2 border border-white/5 rounded-2xl p-4">
                      <div className="text-[12px] text-white/50 mb-2">{kpi.label}</div>
                      <div className="text-[20px] font-extrabold text-white font-sora mb-2">{kpi.val}</div>
                      <div className="text-[11px] text-[#00f0ff] font-semibold">{kpi.trend}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-end gap-3 h-[100px] mt-2.5">
                  {[40, 65, 45, 80, 55, 95, 75].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i % 2 === 0 ? 'rgba(255,255,255,0.05)' : 'linear-gradient(180deg, #00f0ff 0%, rgba(0, 240, 255, 0) 100%)' }}></div>
                  ))}
                </div>
              </div>

              {/* Floating Pills */}
              <div className="absolute bottom-[10%] left-0 bg-[rgba(8,10,15,0.8)] backdrop-blur-[20px] border border-white/10 rounded-full py-3 px-6 flex items-center gap-3 z-20 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] animate-[float2_10s_ease-in-out_infinite]">
                <div className="w-8 h-8 rounded-full bg-[rgba(0,240,255,0.1)] flex items-center justify-center text-[#00f0ff]">
                  <Check size={16} strokeWidth={3} />
                </div>
                <span className="text-white font-semibold text-[14px]">ZATCA Approved</span>
              </div>

              <div className="absolute top-[15%] right-0 bg-[rgba(8,10,15,0.8)] backdrop-blur-[20px] border border-white/10 rounded-full py-3 px-6 flex items-center gap-3 z-20 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] animate-[float3_12s_ease-in-out_infinite]">
                <div className="w-8 h-8 rounded-full bg-[rgba(139,92,246,0.1)] flex items-center justify-center text-[#8b5cf6]">
                  <CreditCard size={16} strokeWidth={2.5} />
                </div>
                <span className="text-white font-semibold text-[14px]">POS Synced</span>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
