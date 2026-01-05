/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // enables static HTML export
  trailingSlash: true,     // helps GitHub Pages serve files correctly
  reactStrictMode: true,   // optional
};

module.exports = nextConfig;
