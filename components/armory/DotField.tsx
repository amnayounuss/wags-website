'use client';
import React, { useEffect, useRef } from 'react';

/**
 * Animated dot-matrix field.
 *
 * A halftone grid whose cells brighten and dim as a slow two-octave value-noise
 * field drifts through them, so soft luminous forms appear to move across the
 * mesh. Written from scratch as a procedural effect - nothing is downloaded,
 * and it costs about 2KB instead of a multi-megabyte video loop.
 *
 * Sampling the noise with a lower vertical frequency (scaleY < scaleX) stretches
 * the forms downward, which is what produces the reference's vertical streaking.
 *
 * Behaviour:
 *   - pauses whenever it scrolls out of view (IntersectionObserver)
 *   - renders a single static frame under prefers-reduced-motion
 *   - capped at ~30fps and redrawn on resize at the device pixel ratio
 */

type Props = {
  className?: string;
  /** px between cell centres */
  spacing?: number;
  /** cell width / height in px - a taller cell reads as a vertical streak */
  dotW?: number;
  dotH?: number;
  /** noise frequency; lower scaleY stretches the forms vertically */
  scaleX?: number;
  scaleY?: number;
  /** field drift per second */
  speed?: number;
  /** dim base visible everywhere, and the crest gain on top of it */
  floor?: number;
  gain?: number;
};

/** Deterministic hash -> 0..1, stable for a given lattice point. */
function hash(x: number, y: number, z: number) {
  const n = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453;
  return n - Math.floor(n);
}

const fade = (t: number) => t * t * (3 - 2 * t);

/** Two-dimensional value noise, animated on a third axis. */
function noise(x: number, y: number, z: number) {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
  const xf = fade(x - xi), yf = fade(y - yi), zf = fade(z - zi);
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const c = (dz: number) =>
    lerp(
      lerp(hash(xi, yi, zi + dz), hash(xi + 1, yi, zi + dz), xf),
      lerp(hash(xi, yi + 1, zi + dz), hash(xi + 1, yi + 1, zi + dz), xf),
      yf
    );

  return lerp(c(0), c(1), zf);
}

export default function DotField({
  className = '',
  spacing = 9,
  dotW = 1.7,
  dotH = 1.7,
  scaleX = 0.055,
  scaleY = 0.055,
  speed = 0.045,
  floor = 0.055,
  gain = 0.85,
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = 0, h = 0, dpr = 1;
    let raf = 0;
    let visible = true;
    let last = 0;

    const draw = (now: number) => {
      const t = reduced ? 0 : now * 0.001 * speed;
      ctx.clearRect(0, 0, w, h);

      const cols = Math.ceil(w / spacing);
      const rows = Math.ceil(h / spacing);

      for (let iy = 0; iy <= rows; iy++) {
        for (let ix = 0; ix <= cols; ix++) {
          // three octaves. The lowest frequency is the important one: it drifts
          // large bright regions across the mesh, which is what reads as a soft
          // form moving through the grid rather than uniform static.
          const n =
            noise(ix * scaleX * 0.26, iy * scaleY * 0.26, t * 0.5) * 0.64 +
            noise(ix * scaleX, iy * scaleY, t) * 0.24 +
            noise(ix * scaleX * 2.7, iy * scaleY * 2.7, t * 1.7) * 0.12;

          // remap around the field's mean so the crests separate hard from the
          // troughs - a flat curve here is what made it read as uniform static
          const v = Math.max(0, (n - 0.34) / 0.46);
          ctx.globalAlpha = Math.min(1, floor + v * v * gain);
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(ix * spacing, iy * spacing, dotW, dotH);
        }
      }
      ctx.globalAlpha = 1;
    };

    const resize = () => {
      const r = cv.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.max(1, Math.round(r.width));
      h = Math.max(1, Math.round(r.height));
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(performance.now());
    };

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (!visible) return;
      if (now - last < 33) return; // ~30fps is plenty for a background
      last = now;
      draw(now);
    };

    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0 });
    io.observe(cv);

    resize();
    window.addEventListener('resize', resize);
    if (!reduced) raf = requestAnimationFrame(loop);

    return () => {
      io.disconnect();
      window.removeEventListener('resize', resize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [spacing, dotW, dotH, scaleX, scaleY, speed, floor, gain]);

  return <canvas ref={ref} aria-hidden="true" className={`block h-full w-full ${className}`} />;
}
