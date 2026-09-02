'use client';
import React, { useEffect, useRef } from 'react';

/**
 * RiyadhSkyline - Luxury Minimalist Horizon
 * Combines the iconic Riyadh skyline silhouette PNG with ambient glow,
 * subtle city lights, and smooth entrance animation.
 */
export default function RiyadhSkyline() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const p = Math.min(1, Math.max(0, window.scrollY / 640));
      el.style.setProperty('--rs-p', p.toFixed(4));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none select-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Ambient background glow behind skyline */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_90%,_rgba(0,229,199,0.15)_0%,_rgba(124,92,255,0.08)_40%,_transparent_75%)]" />

      {/* Riyadh Skyline PNG Silhouette Layer */}
      <div
        className="absolute bottom-0 inset-x-0 h-[265px] sm:h-[385px] tablet:h-[500px] opacity-[0.22] bg-contain bg-bottom bg-repeat-x transition-opacity duration-1000 ease-out z-[1]"
        style={{
          backgroundImage: `url('/assets/riyadh-skyline.png')`,
          filter: 'drop-shadow(0 0 20px rgba(0, 229, 199, 0.3))',
          transform: 'translate3d(calc(var(--rs-p, 0) * -15px), 0, 0)',
        }}
      />

      {/* Glowing City Lights Horizon Bar */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00A896]/40 to-transparent z-[3]" />
    </div>
  );
}
