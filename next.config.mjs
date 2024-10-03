/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  // Add trailing slash to improve routing consistency
  trailingSlash: true,
  // Optimize for static export
  reactStrictMode: true,
};

export default nextConfig;
