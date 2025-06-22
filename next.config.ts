import type { NextConfig } from 'next';

const repoName = 'chirag-ujeniya'; // Make sure this matches your GitHub repo name exactly

const nextConfig: NextConfig = {
  output: 'export', // Export as a static site
  basePath: process.env.NODE_ENV === 'production' ? `/${repoName}` : '', // Required for GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '', // Required for GitHub Pages
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Disable Next.js image optimization for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
