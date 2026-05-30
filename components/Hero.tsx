'use client';
import React, { useEffect, useState } from 'react';
import { Check, CreditCard, Activity, ArrowRight, Zap, Database, BarChart3, TrendingUp, ShieldCheck, Play } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <style>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(15px) rotate(-2deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.05); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-10px) translateX(10px); }
        }
        @keyframes draw-line {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes fade-up-reveal {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
        .hero-dashboard-glass {
          background: linear-gradient(135deg, rgba(8, 12, 20, 0.8) 0%, rgba(2, 4, 10, 0.95) 100%);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-top: 1px solid rgba(0, 240, 255, 0.3);
          box-shadow: 0 40px 80px -20px rgba(0, 0, 0, 1), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(0,240,255,0.05);
        }
        .animated-chart-path {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw-line 3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.5s;
        }
        .fade-up-1 { opacity: 0; animation: fade-up-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.1s; }
        .fade-up-2 { opacity: 0; animation: fade-up-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s; }
        .fade-up-3 { opacity: 0; animation: fade-up-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.3s; }
        .fade-up-4 { opacity: 0; animation: fade-up-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.4s; }
      `}</style>

      <section id="hero" className="min-h-screen flex items-center relative pt-[180px] pb-[100px] overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/4 left-[10%] w-[400px] h-[400px] bg-[#00f0ff] opacity-[0.06] rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-[#8b5cf6] opacity-[0.08] rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[80px] items-center">

            {/* Left Content Side */}
            <div className="hero-content relative z-20">
              {/* Badge */}
              <div className="fade-up-1 inline-flex items-center gap-3 py-2 px-5 bg-gradient-to-r from-[rgba(0,240,255,0.1)] to-transparent rounded-full border border-[rgba(0,240,255,0.2)] mb-8 shadow-[0_0_20px_rgba(0,240,255,0.05)] backdrop-blur-md">
                <div className="relative flex items-center justify-center w-2 h-2">
                  <div className="absolute inset-0 bg-[#00f0ff] rounded-full animate-ping opacity-75"></div>
                  <div className="relative w-2 h-2 bg-[#00f0ff] rounded-full shadow-[0_0_10px_#00f0ff]"></div>
                </div>
                <span className="text-[13px] font-bold tracking-[0.15em] uppercase text-[#00f0ff] font-sora">Saudi Arabia's Premier ERP</span>
              </div>

              {/* Title */}
              <h1 className="fade-up-2 text-[clamp(40px,6vw,72px)] font-extrabold font-sora text-white leading-[1.05] tracking-[-0.03em] mb-6">
                Transform Your <br /> Business with <br />
                <span className="relative inline-block mt-2">
                  <span className="absolute -inset-2 bg-[#00f0ff]/20 blur-[30px] rounded-full"></span>
                  <span className="relative bg-gradient-to-r from-[#00f0ff] via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent animate-gradient-x">Intelligent ERP</span>
                </span>
              </h1>

              {/* Subtitle */}
              <p className="fade-up-3 text-[18px] sm:text-[20px] leading-[1.7] text-white/70 max-w-[540px] mb-10 font-light">
                We build fully customized, ZATCA-compliant Odoo systems that automate your workflows and accelerate growth.
              </p>

              {/* Actions */}
              <div className="fade-up-4 flex flex-col sm:flex-row gap-4 items-center flex-wrap">
                <a href="#contact" className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 py-4 px-8 bg-white text-black rounded-full text-[16px] font-bold no-underline transition-all duration-300 hover:bg-[#00f0ff] hover:text-black hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Book a Free Demo <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
                <a href="#process" className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 py-4 px-8 bg-[rgba(255,255,255,0.03)] text-white rounded-full border border-white/10 text-[16px] font-semibold no-underline transition-all duration-300 hover:bg-[rgba(255,255,255,0.08)] hover:border-white/20 backdrop-blur-md">
                  <Play size={16} className="text-[#00f0ff] fill-[#00f0ff]/20 transition-transform group-hover:scale-110" /> Watch How it Works
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="fade-up-4 mt-12 pt-8 border-t border-white/10 flex items-center gap-6 opacity-80">
                <div className="flex -space-x-3">
                  {[
                    { name: 'Camel Step', url: '/client-camelstep.png' },
                    { name: 'Peacock Roaster', url: '/client-peacock.png' },
                    { name: 'Codeco', url: '/client-codeco.png' },
                    { name: 'Anoosh', url: '/client-anoosh.png' }
                  ].map((client, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#02040a] bg-white overflow-hidden flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)]" title={client.name}>
                      <img src={client.url} alt={client.name} className="w-full h-full object-contain p-1" />
                    </div>
                  ))}
                </div>
                <div className="text-[13px] text-white/60">
                  Trusted by <strong className="text-white">50+</strong> businesses in KSA
                </div>
              </div>
            </div>

            {/* Right Visual Side */}
            <div className="hero-visual relative h-[600px] w-full hidden lg:flex items-center justify-center perspective-[1000px]">
              
              {/* Main Dashboard UI */}
              <div className="hero-dashboard-glass relative w-full max-w-[580px] h-[440px] rounded-[24px] z-10 flex flex-col overflow-hidden animate-[float-1_8s_ease-in-out_infinite] transform rotate-y-[-5deg] rotate-x-[5deg]">
                
                {/* macOS style Header */}
                <div className="h-12 border-b border-white/5 flex items-center px-5 bg-white/[0.02]">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div className="mx-auto text-[12px] font-medium text-white/40 tracking-wider">WAGS CLOUD ERP</div>
                </div>

                {/* Dashboard Body */}
                <div className="flex flex-1 p-6 gap-6">
                  {/* Sidebar Mini */}
                  <div className="w-12 flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#00f0ff]/10 flex items-center justify-center text-[#00f0ff] border border-[#00f0ff]/20 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                      <BarChart3 size={18} />
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white/80 transition-colors cursor-pointer">
                      <Database size={18} />
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white/80 transition-colors cursor-pointer">
                      <Activity size={18} />
                    </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="flex-1 flex flex-col gap-6">
                    {/* Top Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/5 rounded-2xl p-4 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-[#00f0ff]/10 rounded-full blur-[20px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[#00f0ff]/20 transition-colors"></div>
                        <div className="text-[12px] text-white/50 mb-1">Monthly Revenue</div>
                        <div className="text-[24px] font-bold text-white font-sora">SAR 4.2M</div>
                        <div className="text-[12px] text-[#00f0ff] flex items-center gap-1 mt-1"><TrendingUp size={12}/> +24.5%</div>
                      </div>
                      <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/5 rounded-2xl p-4 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-[#8b5cf6]/10 rounded-full blur-[20px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[#8b5cf6]/20 transition-colors"></div>
                        <div className="text-[12px] text-white/50 mb-1">Active Operations</div>
                        <div className="text-[24px] font-bold text-white font-sora">1,284</div>
                        <div className="text-[12px] text-[#8b5cf6] flex items-center gap-1 mt-1"><Activity size={12}/> Live Sync</div>
                      </div>
                    </div>

                    {/* Chart Area */}
                    <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-2xl p-4 relative flex flex-col">
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-[13px] text-white/70 font-medium">Growth Analytics</div>
                        <div className="text-[11px] py-1 px-2 bg-white/10 rounded-md text-white/60">This Year</div>
                      </div>
                      <div className="flex-1 relative w-full mt-2">
                        {/* Custom SVG Line Chart */}
                        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 100">
                          <defs>
                            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#8b5cf6" />
                              <stop offset="50%" stopColor="#3b82f6" />
                              <stop offset="100%" stopColor="#00f0ff" />
                            </linearGradient>
                            <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.2" />
                              <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
                            </linearGradient>
                            <filter id="glow">
                              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                              <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                              </feMerge>
                            </filter>
                          </defs>
                          {/* Grid lines */}
                          <line x1="0" y1="25" x2="400" y2="25" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
                          <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
                          <line x1="0" y1="75" x2="400" y2="75" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
                          
                          {/* Area Fill */}
                          <path d="M0,80 Q50,70 100,50 T200,60 T300,30 T400,10 L400,100 L0,100 Z" fill="url(#areaGrad)" className="opacity-50" />
                          
                          {/* Animated Line */}
                          <path 
                            d="M0,80 Q50,70 100,50 T200,60 T300,30 T400,10" 
                            fill="none" 
                            stroke="url(#lineGrad)" 
                            strokeWidth="3" 
                            strokeLinecap="round"
                            filter="url(#glow)"
                            className="animated-chart-path"
                          />
                          
                          {/* Data Points */}
                          {mounted && (
                            <>
                              <circle cx="100" cy="50" r="4" fill="#02040a" stroke="#3b82f6" strokeWidth="2" className="animate-pulse" />
                              <circle cx="200" cy="60" r="4" fill="#02040a" stroke="#8b5cf6" strokeWidth="2" className="animate-pulse" />
                              <circle cx="300" cy="30" r="4" fill="#02040a" stroke="#00f0ff" strokeWidth="2" className="animate-pulse" />
                              <circle cx="400" cy="10" r="4" fill="#fff" stroke="#00f0ff" strokeWidth="3" className="shadow-[0_0_10px_#00f0ff]" />
                            </>
                          )}
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Element 1: ZATCA */}
              <div className="absolute top-[10%] right-[5%] bg-[rgba(10,15,25,0.9)] backdrop-blur-xl border border-[rgba(0,240,255,0.2)] rounded-2xl p-4 flex items-center gap-4 shadow-[0_20px_40px_rgba(0,0,0,0.6)] z-20 animate-[float-2_6s_ease-in-out_infinite]">
                <div className="w-10 h-10 rounded-full bg-[rgba(0,240,255,0.1)] flex items-center justify-center text-[#00f0ff] border border-[#00f0ff]/20 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                  <ShieldCheck size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-white font-bold text-[14px]">ZATCA Phase 2</div>
                  <div className="text-[11px] text-[#00f0ff]">Fully Compliant</div>
                </div>
              </div>

              {/* Floating Element 2: POS */}
              <div className="absolute bottom-[20%] left-[-5%] bg-[rgba(10,15,25,0.9)] backdrop-blur-xl border border-[rgba(139,92,246,0.2)] rounded-2xl p-4 flex items-center gap-4 shadow-[0_20px_40px_rgba(0,0,0,0.6)] z-20 animate-[float-3_7s_ease-in-out_infinite]">
                <div className="w-10 h-10 rounded-full bg-[rgba(139,92,246,0.1)] flex items-center justify-center text-[#8b5cf6] border border-[#8b5cf6]/20">
                  <CreditCard size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-white font-bold text-[14px]">POS Synced</div>
                  <div className="text-[11px] text-white/50">Real-time updates</div>
                </div>
              </div>

              {/* Floating Element 3: Speed */}
              <div className="absolute bottom-[10%] right-[10%] bg-[rgba(10,15,25,0.9)] backdrop-blur-xl border border-white/10 rounded-full py-2 px-4 flex items-center gap-2 shadow-[0_15px_30px_rgba(0,0,0,0.5)] z-0 animate-[float-4_5s_ease-in-out_infinite]">
                <Zap size={14} className="text-[#ffbd2e]" fill="#ffbd2e" />
                <span className="text-[12px] font-semibold text-white">Lightning Fast</span>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
