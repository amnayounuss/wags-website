import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <footer className="relative pt-[80px] pb-[40px] mt-[100px] bg-transparent">
        {/* Top Glow Line Separator */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,240,255,0.4)] to-transparent"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent opacity-50 blur-[2px]"></div>
        <div className="container">
          <div className="flex flex-col gap-[60px]">

            {/* Top Section */}
            <div className="flex justify-between items-start flex-wrap gap-[40px]">

              {/* Brand */}
              <div className="max-w-[400px]">
                <div className="flex items-center gap-4 mb-6">
                  <img src="/logo.svg" alt="WAGS Tech Logo" className="w-[44px] h-[44px] object-contain" />
                  <div>
                    <div className="text-[22px] font-extrabold font-sora text-white tracking-[-0.02em] leading-[1.2]">WAGS Tech EST.</div>
                    <div className="text-[13px] text-[#00f0ff] font-semibold tracking-[0.05em]">Odoo ERP & IT Solutions</div>
                  </div>
                </div>
                <p className="text-[16px] text-white/60 leading-[1.6] mb-8">
                  Empowering Saudi businesses with tailored Odoo ERP solutions, ZATCA-compliant from day one.
                </p>
                <div className="flex gap-4">
                  <a href="#" aria-label="LinkedIn" className="text-white/40 transition-colors duration-300 hover:text-white"><FaLinkedin size={20} /></a>
                  <a href="#" aria-label="Twitter" className="text-white/40 transition-colors duration-300 hover:text-white"><FaTwitter size={20} /></a>
                  <a href="#" aria-label="Instagram" className="text-white/40 transition-colors duration-300 hover:text-white"><FaInstagram size={20} /></a>
                </div>
              </div>

              {/* Contact info */}
              <div className="text-left min-w-[200px]">
                <div className="text-[13px] font-bold tracking-[0.1em] uppercase text-white/30 mb-5">Contact Us</div>
                <a href="mailto:info@wags.sa" className="inline-block text-[20px] font-semibold text-white mb-3 no-underline transition-colors duration-300 hover:text-[#00f0ff]">info@wags.sa</a>
                <p className="text-[15px] text-white/50 leading-[1.6]">Taawun Area, Riyadh<br />Saudi Arabia</p>
              </div>

            </div>

            {/* Bottom Section */}
            <div className="flex justify-between items-center flex-wrap gap-5 pt-8 border-t border-white/5">
              <div className="text-[14px] text-white/40">© 2025 WAGS Tech EST. All rights reserved.</div>
              <div className="flex gap-6 flex-wrap">
                <a href="/privacy" className="text-white/60 text-[14px] no-underline transition-colors duration-300 hover:text-white">Privacy Policy</a>
                <a href="#" className="text-white/60 text-[14px] no-underline transition-colors duration-300 hover:text-white">Terms of Service</a>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}
