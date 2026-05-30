'use client';
import React from 'react';

export default function About() {
  return (
    <>
      <section id="about" className="py-[100px] relative">
        <div className="container">
          <div className="about-grid">

            {/* Left Side - Text */}
            <div className="about-text">
              <div className="section-label inline-block mb-6 bg-[rgba(0,240,255,0.1)] border border-[rgba(0,240,255,0.3)] text-[#00f0ff] py-[6px] px-4 rounded-full text-[13px] font-bold tracking-[0.1em] uppercase">Introduction</div>
              <h2 className="text-[clamp(36px,5vw,56px)] leading-[1.1] mb-6 font-extrabold font-sora text-white">Who We <span className="bg-gradient-to-br from-[#00f0ff] to-[#8b5cf6] bg-clip-text text-transparent">Are</span></h2>
              <p className="text-[18px] text-white/70 leading-[1.7] mb-6">WAGS is a leading provider of ERP implementation and customized Odoo modules, delivering cutting-edge solutions designed to streamline business operations and boost efficiency across Saudi Arabia.</p>
              <p className="text-[18px] text-white/70 leading-[1.7]">We believe every organization has unique needs. Our seasoned team brings deep industry knowledge — enabling smart, flexible solutions that support growth and drive successful digital transformation.</p>
            </div>

            {/* Right Side - Bento Grid */}
            <div className="about-bento">

              {/* Vision */}
              <div className="col-span-full bg-[rgba(8,10,15,0.65)] backdrop-blur-[20px] border border-white/5 border-t-[rgba(139,92,246,0.3)] rounded-[24px] p-10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)]">
                <div className="text-[12px] font-bold tracking-[0.15em] uppercase text-[#8b5cf6] mb-3">Vision</div>
                <h3 className="text-[24px] font-bold text-white mb-4 font-sora">Premier ERP Provider in the Region</h3>
                <p className="text-[16px] text-white/60 leading-[1.6]">To be recognized for our commitment to innovation, client success, and technical excellence — leading digital transformation across KSA and beyond.</p>
              </div>

              {/* Mission */}
              <div className="bg-[rgba(8,10,15,0.65)] backdrop-blur-[20px] border border-white/5 border-t-[rgba(0,240,255,0.2)] rounded-[24px] py-8 px-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)]">
                <div className="text-[12px] font-bold tracking-[0.15em] uppercase text-[#00f0ff] mb-3">Mission</div>
                <h3 className="text-[20px] font-bold text-white mb-4 font-sora">Partnerships That Drive Growth</h3>
                <p className="text-[15px] text-white/60 leading-[1.6]">Through deep collaboration and local expertise, we ensure every implementation delivers measurable results.</p>
              </div>

              {/* Value */}
              <div className="bg-[rgba(8,10,15,0.65)] backdrop-blur-[20px] border border-white/5 border-t-[rgba(244,63,94,0.2)] rounded-[24px] py-8 px-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)]">
                <div className="text-[12px] font-bold tracking-[0.15em] uppercase text-[#f43f5e] mb-3">Value</div>
                <h3 className="text-[20px] font-bold text-white mb-4 font-sora">Innovation</h3>
                <p className="text-[15px] text-white/60 leading-[1.6]">Continuously advancing to meet evolving business needs and industry standards.</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
