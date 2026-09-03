/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  // Served by a Next.js node server (next start) behind nginx on :3000.
  // Do NOT use output:'export' here — it produces a static out/ folder that
  // the running server can't serve (assets 400), which strips all styling.
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
