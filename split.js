const fs = require('fs');

const pageTsx = fs.readFileSync('app/page.tsx', 'utf8');

function extractTag(tag, id, content) {
  let regex;
  if (id) {
    regex = new RegExp('<' + tag + ' id="' + id + '"[\\s\\S]*?</' + tag + '>', 'i');
  } else {
    regex = new RegExp('<' + tag + '[\\s\\S]*?</' + tag + '>', 'i');
  }
  const match = content.match(regex);
  return match ? match[0] : '';
}

function extractClass(tag, className, content) {
  const regex = new RegExp('<' + tag + ' className="' + className + '"[\\s\\S]*?</' + tag + '>', 'i');
  const match = content.match(regex);
  return match ? match[0] : '';
}

// Extract parts
const nav1 = extractTag('nav', 'navbar', pageTsx);
const nav2 = extractClass('div', 'mobile-menu', pageTsx);
const navbar = nav1 + '\\n' + nav2;

const hero = extractTag('section', 'hero', pageTsx);
const clients = extractTag('section', 'clients', pageTsx);
const about = extractTag('section', 'about', pageTsx);
const whyChoose = extractTag('section', 'why', pageTsx);
const processSection = extractTag('section', 'process', pageTsx);
const services = extractTag('section', 'services', pageTsx);
const integrations = extractTag('section', 'integrations', pageTsx);
const team = extractTag('section', 'team', pageTsx);
const footer = extractTag('footer', null, pageTsx);

const ctaBand = extractClass('div', 'cta-band', pageTsx) || ''; 
const contact = extractTag('section', 'contact', pageTsx);

function writeComponent(name, content) {
  if (!content) {
    console.log('Skipping ' + name);
    return;
  }
  const fileContent = "export default function " + name + "() {\\n  return (\\n    <>\\n      " + content + "\\n    </>\\n  );\\n}\\n";
  fs.writeFileSync('components/' + name + '.tsx', fileContent);
}

writeComponent('Navbar', navbar);
writeComponent('Hero', hero);
writeComponent('Clients', clients);
writeComponent('About', about);
writeComponent('WhyChoose', whyChoose);
writeComponent('Process', processSection);
writeComponent('Services', services);
writeComponent('Integrations', integrations);
writeComponent('Team', team);
if (ctaBand) writeComponent('CTABand', ctaBand);
writeComponent('Contact', contact);
writeComponent('Footer', footer);

const newPageTsx = "'use client';\\n" +
"import { useEffect } from 'react';\\n" +
"import Navbar from '@/components/Navbar'\\n" +
"import Hero from '@/components/Hero'\\n" +
"import Clients from '@/components/Clients'\\n" +
"import About from '@/components/About'\\n" +
"import WhyChoose from '@/components/WhyChoose'\\n" +
"import Process from '@/components/Process'\\n" +
"import Services from '@/components/Services'\\n" +
"import Integrations from '@/components/Integrations'\\n" +
"import Team from '@/components/Team'\\n" +
"import CTABand from '@/components/CTABand'\\n" +
"import Contact from '@/components/Contact'\\n" +
"import Footer from '@/components/Footer'\\n\\n" +
"export default function Page() {\\n" +
"  useEffect(() => {\\n" +
"    const script = document.createElement('script');\\n" +
"    script.src = '/scripts/main.js';\\n" +
"    document.body.appendChild(script);\\n" +
"    return () => {\\n" +
"      document.body.removeChild(script);\\n" +
"    }\\n" +
"  }, []);\\n\\n" +
"  return (\\n" +
"    <>\\n" +
"      <div id='scroll-progress'></div>\\n" +
"      <button id='back-to-top' aria-label='Back to top'>\\n" +
"        <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round'><path d='M18 15l-6-6-6 6'/></svg>\\n" +
"        <svg className='progress-ring' viewBox='0 0 44 44'><circle cx='22' cy='22' r='20'/></svg>\\n" +
"      </button>\\n" +
"      <canvas id='particles-canvas'></canvas>\\n" +
"      <div className='app-bg'></div>\\n" +
"      \\n" +
"      <Navbar />\\n" +
"      <Hero />\\n" +
"      <Clients />\\n" +
"      <About />\\n" +
"      <WhyChoose />\\n" +
"      <Process />\\n" +
"      <Services />\\n" +
"      <Integrations />\\n" +
"      <Team />\\n" +
(ctaBand ? "      <CTABand />\\n" : "") +
"      <Contact />\\n" +
"      <Footer />\\n" +
"    </>\\n" +
"  );\\n" +
"}\\n";

fs.writeFileSync('app/page.tsx', newPageTsx);

console.log('Components created successfully');
