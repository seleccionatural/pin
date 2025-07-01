/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // Optional, fixes image issues
  trailingSlash: true // Optional, avoids 404s on GitHub Pages
};

module.exports = nextConfig;
