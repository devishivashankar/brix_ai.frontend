import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
