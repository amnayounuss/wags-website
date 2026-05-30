'use client';
import React from 'react';
import { Briefcase, ShieldCheck, Users, Globe, LayoutGrid, Zap } from 'lucide-react';

export default function WhyChoose() {
  const features = [
    {
      title: "Tailored Odoo Solutions",
      desc: "Every ERP is fully customized to your industry, workflow, and business size — no one-size-fits-all systems.",
      icon: <Briefcase size={24} strokeWidth={2} />
    },
    {
      title: "ZATCA Compliant",
      desc: "Full compliance with Saudi regulations including VAT, e-invoicing, and all ZATCA Phase 2 standards.",
      icon: <ShieldCheck size={24} strokeWidth={2} />
    },
    {
      title: "Long-term Partnership",
      desc: "Training, ongoing support, and continuous system improvement post go-live.",
      icon: <Users size={24} strokeWidth={2} />
    },
    {
      title: "Local Expertise",
      desc: "Deep knowledge of the Saudi market, VAT regulations, and business culture.",
      icon: <Globe size={24} strokeWidth={2} />
    },
    {
      title: "Dedicated Team",
      desc: "Specialized ERP consultants, developers, and engineers on your project.",
      icon: <LayoutGrid size={24} strokeWidth={2} />
    },
    {
      title: "Fast Deployment",
      desc: "Structured implementation plans ensure on-time go-live with minimal business disruption.",
      icon: <Zap size={24} strokeWidth={2} />
    }
  ];

  return (
    <>
      <section id="why" className="py-[100px] relative">
        <div className="container">

          <div className="text-center mb-[80px]">
            <div className="section-label inline-block mb-6 bg-[rgba(0,240,255,0.1)] border border-[rgba(0,240,255,0.3)] text-[#00f0ff] py-[6px] px-4 rounded-full text-[13px] font-bold tracking-[0.1em] uppercase">Why Choose Us</div>
            <h2 className="text-[clamp(36px,5vw,56px)] leading-[1.1] mb-6 font-extrabold font-sora text-white">Why Partner with <span className="bg-gradient-to-br from-[#00f0ff] to-[#8b5cf6] bg-clip-text text-transparent">WAGS?</span></h2>
            <p className="text-[18px] text-white/70 leading-[1.6] max-w-[600px] mx-auto">We don't just provide an ERP system — we build long-term partnerships that help your business grow in an ever-changing environment.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-[30px]">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex-1 min-w-[280px] max-w-[420px] bg-[rgba(8,10,15,0.65)] backdrop-blur-[20px] border border-white/5 border-t-[rgba(0,240,255,0.15)] rounded-[24px] p-10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer hover:-translate-y-2 hover:border-t-[rgba(0,240,255,0.6)] hover:shadow-[0_30px_60px_-10px_rgba(0,240,255,0.15)] hover:bg-[rgba(12,15,25,0.8)]"
              >
                <div className="w-[52px] h-[52px] rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-[#00f0ff] mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-[20px] font-bold text-white mb-4 font-sora">{feature.title}</h3>
                <p className="text-[15px] text-white/60 leading-[1.6]">{feature.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
