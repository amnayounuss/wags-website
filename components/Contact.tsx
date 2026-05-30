import React from 'react';
import { Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <section id="contact" className="py-[100px] relative overflow-hidden">
        <div className="container relative z-10">
          {/* Single Massive Card */}
          <div className="bg-[rgba(15,20,35,0.5)] backdrop-blur-[40px] border border-white/5 border-t-[rgba(255,255,255,0.15)] rounded-[32px] p-[clamp(24px,6vw,60px)] shadow-[0_30px_60px_rgba(0,0,0,0.4)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[clamp(30px,6vw,60px)] items-center">

            {/* Left Side: Info */}
            <div className="contact-info">
              <div className="section-label inline-block mb-6 bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.3)] text-[#d8b4fe] py-[6px] px-4 rounded-full text-[13px] font-bold tracking-[0.1em] uppercase">Get In Touch</div>
              <h2 className="text-[clamp(32px,8vw,56px)] leading-[1.1] mb-6 font-extrabold font-sora text-white">Ready to <br /><span className="bg-gradient-to-br from-[#00f0ff] to-[#8b5cf6] bg-clip-text text-transparent">Transform</span><br /> Your Business?</h2>
              <p className="text-[16px] text-white/70 leading-[1.6] mb-10 max-w-[400px]">Let's discuss your ERP requirements — free consultation, no commitment. Our team will respond within 24 hours.</p>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 p-5 bg-white/5 border border-white/5 rounded-[20px]">
                  <div className="w-12 h-12 rounded-[14px] bg-[rgba(0,240,255,0.1)] text-[#00f0ff] flex items-center justify-center">
                    <Mail size={24} strokeWidth={2} />
                  </div>
                  <span className="text-[16px] font-medium text-white">info@wags.sa</span>
                </div>
                <div className="flex items-center gap-4 p-5 bg-white/5 border border-white/5 rounded-[20px]">
                  <div className="w-12 h-12 rounded-[14px] bg-[rgba(139,92,246,0.1)] text-[#8b5cf6] flex items-center justify-center">
                    <MapPin size={24} strokeWidth={2} />
                  </div>
                  <span className="text-[16px] font-medium text-white">Taawun Area, Riyadh</span>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full">
              <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 mb-5">
                <div><label className="form-label" htmlFor="name">Full Name</label><input type="text" id="name" className="modern-input" placeholder="e.g. Ahmed Al-Rashidi" /></div>
                <div><label className="form-label" htmlFor="company">Company</label><input type="text" id="company" className="modern-input" placeholder="e.g. Acme Corp" /></div>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 mb-5">
                <div><label className="form-label" htmlFor="email">Email</label><input type="email" id="email" className="modern-input" placeholder="ahmed@company.sa" /></div>
                <div><label className="form-label" htmlFor="phone">Phone</label><input type="tel" id="phone" className="modern-input" placeholder="+966 5x xxx xxxx" /></div>
              </div>
              <div className="mb-5">
                <label className="form-label" htmlFor="service">Service Needed</label>
                <select id="service" className="modern-input appearance-none cursor-pointer" defaultValue="">
                  <option value="" disabled>Select a service...</option>
                  <option>ERP Implementation</option>
                  <option>POS Integration</option>
                  <option>ZATCA Compliance</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="mb-8">
                <label className="form-label" htmlFor="message">Project Details</label>
                <textarea id="message" className="modern-input resize-none" placeholder="Briefly describe your requirements..." rows={4}></textarea>
              </div>
              <button className="solid-btn">
                Book Free Consultation <ArrowRight size={20} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
