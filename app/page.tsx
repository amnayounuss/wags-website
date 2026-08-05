'use client';
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Clients from '@/components/Clients'
import About from '@/components/About'
import WhyChoose from '@/components/WhyChoose'
import Solve from '@/components/Solve'
import Process from '@/components/Process'
import Services from '@/components/Services'
import Integrations from '@/components/Integrations'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SiteScripts from '@/components/SiteScripts'

export default function Page() {
  return (
    <>
      <SiteScripts />
      <button id='back-to-top' aria-label='Back to top'>
        <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round'><path d='M18 15l-6-6-6 6' /></svg>
      </button>
      <canvas id='particles-canvas'></canvas>
      <div className='app-bg'></div>

      <Navbar />
      <Hero />
      <Clients />
      <About />
      <WhyChoose />
      <Solve />
      <Process />
      <Services />
      <Integrations />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
