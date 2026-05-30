import { Search, Layers, CheckCircle, DollarSign } from 'lucide-react';

export default function Process() {
  return (
    <>
      <section id="process" className="py-[120px] relative">
        <div className="container">
          <div className="process-header reveal text-center mb-[80px]">
            <div className="section-label">How We Work</div>
            <h2 className="section-heading text-[clamp(36px,5vw,56px)] mb-6">A Clear Path from <br /><span className="grad">Discovery to Launch</span></h2>
            <p className="section-sub mx-auto max-w-[600px] text-[18px] text-white/70">Our proven 4-step methodology has delivered 50+ successful Odoo implementations across the Kingdom.</p>
          </div>

          {/* Modern Staggered Grid */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 items-start">

            {/* Step 01 */}
            <div className="process-step reveal bg-white/5 backdrop-blur-[20px] border border-white/5 rounded-[24px] py-10 px-8 relative overflow-hidden">
              <div className="absolute -top-5 -right-5 text-[120px] font-extrabold text-transparent z-0 pointer-events-none" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.03)' }}>01</div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[rgba(0,240,255,0.1)] border border-[rgba(0,240,255,0.3)] flex items-center justify-center mb-6 text-[#00f0ff]">
                  <Search size={24} strokeWidth={2} />
                </div>
                <h4 className="text-[22px] mb-4 text-white font-bold">Discovery</h4>
                <p className="text-white/60 leading-[1.6] text-[15px]">We map your workflows, pain points, and growth goals through deep stakeholder interviews.</p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="process-step reveal bg-white/5 backdrop-blur-[20px] border border-white/5 rounded-[24px] py-10 px-8 relative overflow-hidden mt-10">
              <div className="absolute -top-5 -right-5 text-[120px] font-extrabold text-transparent z-0 pointer-events-none" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.03)' }}>02</div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.3)] flex items-center justify-center mb-6 text-[#8b5cf6]">
                  <Layers size={24} strokeWidth={2} />
                </div>
                <h4 className="text-[22px] mb-4 text-white font-bold">Design</h4>
                <p className="text-white/60 leading-[1.6] text-[15px]">Architecture, module selection, and customization blueprint tailored to your business.</p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="process-step reveal bg-white/5 backdrop-blur-[20px] border border-white/5 rounded-[24px] py-10 px-8 relative overflow-hidden mt-20">
              <div className="absolute -top-5 -right-5 text-[120px] font-extrabold text-transparent z-0 pointer-events-none" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.03)' }}>03</div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[rgba(244,63,94,0.1)] border border-[rgba(244,63,94,0.3)] flex items-center justify-center mb-6 text-[#f43f5e]">
                  <CheckCircle size={24} strokeWidth={2} />
                </div>
                <h4 className="text-[22px] mb-4 text-white font-bold">Deploy</h4>
                <p className="text-white/60 leading-[1.6] text-[15px]">Agile rollout with data migration, integrations, ZATCA setup, and team training.</p>
              </div>
            </div>

            {/* Step 04 */}
            <div className="process-step reveal bg-white/5 backdrop-blur-[20px] border border-white/5 rounded-[24px] py-10 px-8 relative overflow-hidden mt-[120px]">
              <div className="absolute -top-5 -right-5 text-[120px] font-extrabold text-transparent z-0 pointer-events-none" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.03)' }}>04</div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[rgba(251,191,36,0.1)] border border-[rgba(251,191,36,0.3)] flex items-center justify-center mb-6 text-[#fbbf24]">
                  <DollarSign size={24} strokeWidth={2} />
                </div>
                <h4 className="text-[22px] mb-4 text-white font-bold">Support</h4>
                <p className="text-white/60 leading-[1.6] text-[15px]">Continuous improvement, 24/7 support, and quarterly performance reviews.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
