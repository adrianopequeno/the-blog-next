import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // reactStrictMode: true,
  // productionBrowserSourceMaps: true,
  output: 'export',
  basePath: '/blog-ssg-nextjs',
  assetPrefix: '/blog-ssg-nextjs/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
