// Script injected by React
(function() {

try {
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      const scroll = window.scrollY;
      backToTop.classList.toggle('visible', scroll > 500);
    });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
} catch(e) { console.error('Error in scroll progress:', e); }

try {
  const canvas = document.getElementById('particles-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let W, H, particles = [];
    function resizeCanvas() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    const COUNT = 80;
    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5, a: Math.random() * 0.35 + 0.05
      });
    }
    function drawParticles() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(150,200,255,${p.a * 0.6})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(150,200,255,${0.04 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(drawParticles);
    }
    drawParticles();
  }
} catch(e) { console.error('Error in canvas:', e); }

try {
  const navbar = document.getElementById('navbar');
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
  const sections = document.querySelectorAll('section[id]');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
      });
    });
  }

  window.addEventListener('scroll', () => {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 60);
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 160) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  });
} catch(e) { console.error('Error in navbar:', e); }

try {
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 50);
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  reveals.forEach(r => revealObserver.observe(r));
} catch(e) { console.error('Error in reveals:', e); }

try {
  const stats = document.querySelectorAll('.stat-num[data-target]');
  const heroSection = document.getElementById('hero');
  let counted = false;
  if (heroSection && stats.length > 0) {
    const heroObs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !counted) {
        counted = true;
        stats.forEach(el => {
          const target = parseInt(el.dataset.target);
          let n = 0;
          const step = Math.max(1, Math.ceil(target / 40));
          const interval = setInterval(() => {
            n = Math.min(n + step, target);
            el.textContent = n + (target === 98 ? '%' : '+') + (target === 24 ? '/7' : '');
            if (n >= target) clearInterval(interval);
          }, 40);
        });
      }
    }, { threshold: 0.5 });
    heroObs.observe(heroSection);
  }
} catch(e) { console.error('Error in stats counter:', e); }

try {
  const intWrap = document.querySelector('.int-scroll-wrap');
  const intSteps = document.querySelectorAll('.int-step');
  if (intWrap && intSteps.length) {
    const updateIntStep = () => {
      const rect = intWrap.getBoundingClientRect();
      const total = intWrap.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      let progress = Math.max(0, Math.min(0.9999, total > 0 ? scrolled / total : 0));
      const idx = Math.min(intSteps.length - 1, Math.floor(progress * intSteps.length));
      intSteps.forEach((s, i) => s.classList.toggle('active', i === idx));
    };
    updateIntStep();
    window.addEventListener('scroll', updateIntStep, { passive: true });
    window.addEventListener('resize', updateIntStep);
  }
} catch(e) { console.error('Error in integration scroll:', e); }

})();
