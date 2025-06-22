
import type {NextConfig} from 'next';

// The name of your GitHub repository.
// This is used to set the basePath and assetPrefix for GitHub Pages.
// IMPORTANT: If your repository name is different, you must update this value.
const repoName = 'nextn'; 

const nextConfig: NextConfig = {
  // Enable static export
  output: 'export',

  // Set the base path and asset prefix for GitHub Pages.
  // This is necessary for your site's links and assets to work correctly
  // when hosted in a sub-path, like `https://<username>.github.io/<repoName>/`.
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,

  // Required for static export with next/image.
  // GitHub Pages does not support the default Next.js image optimization.
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
