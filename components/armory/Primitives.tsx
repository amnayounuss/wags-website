'use client';
import React from 'react';

/**
 * Shared primitives for the Armory-style layout.
 *
 * Every measurement here was read off the reference with Playwright rather than
 * eyeballed: the grid rules sit at 25/50/75% of the viewport (x = 359/720/1080
 * on a 1440 canvas) at rgba(255,255,255,.06), eyebrow labels are Geist Mono 13/17
 * w300 uppercase with +0.26px tracking, and the buttons are square-cornered with
 * a separate icon cell on the leading edge.
 */

/** The four-column hairline grid the whole page sits on. */
export function GridLines({ tone = 'dark', dots = false }: { tone?: 'dark' | 'light'; dots?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`am-grid ${tone === 'dark' ? 'am-on-dark' : 'am-on-light'} ${dots ? 'am-dots' : ''}`}
    />
  );
}

/** Hatched marker + mono uppercase label, the reference's section eyebrow. */
export function Eyebrow({ children, tone = 'dark', className = '' }: { children: React.ReactNode; tone?: 'dark' | 'light'; className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${tone === 'dark' ? 'text-white' : 'text-ink'} ${className}`}>
      <svg width="18" height="11" viewBox="0 0 18 11" aria-hidden="true" className="shrink-0">
        <g stroke="currentColor" strokeWidth="2">
          <path d="M0 11L6 0M5 11L11 0M10 11L16 0" />
        </g>
      </svg>
      <span className="am-eyebrow">{children}</span>
    </div>
  );
}

/** Square-cornered button with a leading icon cell. */
export function AmButton({
  href,
  children,
  variant = 'solid',
  tone = 'dark',
  flip = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'solid' | 'ghost';
  tone?: 'dark' | 'light';
  flip?: boolean;
}) {
  const onDark = tone === 'dark';
  const solid = variant === 'solid';
  const shell = solid
    ? onDark
      ? 'bg-white text-ink'
      : 'bg-ink text-white'
    : onDark
      ? 'bg-transparent text-white border border-white/20 hover:border-white/45'
      : 'bg-transparent text-ink border border-ink/20 hover:border-ink/45';
  const cell = solid
    ? onDark
      ? 'bg-ink text-white'
      : 'bg-white text-ink'
    : onDark
      ? 'bg-white/10 text-white'
      : 'bg-ink/10 text-ink';

  return (
    <a
      href={href}
      className={`group inline-flex items-stretch overflow-hidden transition-colors duration-200 ${shell}`}
    >
      <span className={`flex w-[38px] shrink-0 items-center justify-center ${cell}`} aria-hidden="true">
        <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor">
          <path d="M1 1h2v2H1zM5 3h2v2H5zM9 5h2v2H9zM3 5h2v2H3zM7 7h2v2H7zM1 9h2v2H1z" />
        </svg>
      </span>
      <span className="flex items-center gap-2 px-5 py-[13px] text-[14px] font-medium leading-none">
        {children}
        <svg
          width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
          className={`shrink-0 transition-transform duration-200 ${flip ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </a>
  );
}

/** Corner tick marks used on the reference's stat cells. */
export function CornerTicks({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const c = tone === 'dark' ? 'border-white/25' : 'border-ink/25';
  return (
    <>
      <span aria-hidden="true" className={`pointer-events-none absolute right-0 top-0 h-3 w-3 border-r border-t ${c}`} />
      <span aria-hidden="true" className={`pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b border-l ${c}`} />
    </>
  );
}

/** Section wrapper: tone, hairline grid, and the reference's vertical rhythm. */
export function Section({
  id,
  tone = 'dark',
  dots = false,
  grid = true,
  className = '',
  children,
}: {
  id?: string;
  tone?: 'dark' | 'light';
  dots?: boolean;
  grid?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const dark = tone === 'dark';
  return (
    <section
      id={id}
      className={`relative isolate overflow-hidden ${dark ? 'bg-ink text-white' : 'bg-paper text-ink'} ${className}`}
    >
      {grid && <GridLines tone={tone} dots={dots} />}
      <div className="relative z-[2] mx-auto max-w-[1440px] px-6 py-24 sm:px-10 tablet:py-32">{children}</div>
    </section>
  );
}

/** Section header: eyebrow, display heading, optional blurb. */
export function SectionHead({
  eyebrow,
  title,
  blurb,
  tone = 'dark',
  className = '',
}: {
  eyebrow?: string;
  title: string;
  blurb?: string;
  tone?: 'dark' | 'light';
  className?: string;
}) {
  return (
    <div className={`max-w-[760px] ${className}`}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2 className={`am-h2 ${eyebrow ? 'mt-6' : ''}`}>{title}</h2>
      {blurb && (
        <p className={`am-body-lg mt-6 max-w-[620px] ${tone === 'dark' ? 'text-white/85' : 'text-ink/70'}`}>
          {blurb}
        </p>
      )}
    </div>
  );
}

/**
 * Cell grid with hairline dividers, the reference's workhorse layout.
 * Borders are drawn per-cell so the rules meet cleanly at every junction.
 */
export function CellGrid({
  cols = 4,
  tone = 'dark',
  children,
}: {
  cols?: 2 | 3 | 4;
  tone?: 'dark' | 'light';
  children: React.ReactNode;
}) {
  const line = tone === 'dark' ? 'border-white/[0.09]' : 'border-ink/[0.09]';
  const colClass = cols === 4 ? 'tablet:grid-cols-4' : cols === 3 ? 'tablet:grid-cols-3' : 'tablet:grid-cols-2';
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 ${colClass} border-t ${line}`}>
      {React.Children.map(children, (child) => (
        <div className={`border-b ${line} ltr:border-r rtl:border-l ltr:last:border-r-0 rtl:last:border-l-0 p-7 tablet:p-9`}>
          {child}
        </div>
      ))}
    </div>
  );
}

/**
 * Word-by-word scroll reveal - the reference's signature effect. Words brighten
 * as the block travels through the viewport, driven by one rAF-throttled scroll
 * listener writing a single progress value.
 */
export function ScrollRevealText({
  text,
  tone = 'dark',
  className = '',
}: {
  text: string;
  tone?: 'dark' | 'light';
  className?: string;
}) {
  const ref = React.useRef<HTMLParagraphElement>(null);
  const [p, setP] = React.useState(0);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setP(1); return; }
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the block's top hits 85% of the viewport, 1 once it clears 35%
      const prog = (vh * 0.85 - r.top) / (vh * 0.5 + r.height * 0.4);
      setP(Math.min(1, Math.max(0, prog)));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const words = text.split(/(\s+)/);
  const total = words.filter(w => w.trim()).length;
  let seen = 0;

  return (
    <p ref={ref} className={`am-lead ${className}`}>
      {words.map((w, i) => {
        if (!w.trim()) return <span key={i}>{w}</span>;
        const lit = p * total >= seen + 1;
        seen++;
        return (
          <span
            key={i}
            className="transition-[color] duration-500 ease-out"
            style={{ color: lit ? (tone === 'dark' ? '#fff' : '#060606') : (tone === 'dark' ? 'rgba(255,255,255,.22)' : 'rgba(6,6,6,.22)') }}
          >
            {w}
          </span>
        );
      })}
    </p>
  );
}
