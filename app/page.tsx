'use client';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Clients from '@/components/Clients'
import About from '@/components/About'
import WhyChoose from '@/components/WhyChoose'
import Process from '@/components/Process'
import Services from '@/components/Services'
import Integrations from '@/components/Integrations'
import Team from '@/components/Team'
import CTABand from '@/components/CTABand'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Page() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/scripts/main.js?v=' + new Date().getTime();
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <>
      <div id='scroll-progress'></div>
      <button id='back-to-top' aria-label='Back to top'>
        <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round'><path d='M18 15l-6-6-6 6' /></svg>
        <svg className='progress-ring' viewBox='0 0 44 44'><circle cx='22' cy='22' r='20' /></svg>
      </button>
      <canvas id='particles-canvas'></canvas>
      <div className='app-bg'></div>

      <Navbar />
      <Hero />
      <Clients />
      <About />
      <WhyChoose />
      <Process />
      <Services />
      <Integrations />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}
