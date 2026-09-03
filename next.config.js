/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  // Static export: Apache/shared hosting serves plain files. trailingSlash makes
  // every route a directory with index.html (e.g. /privacy/ -> privacy/index.html)
  // so nested routes like /privacy and /ar/policy resolve instead of 404-ing.
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
