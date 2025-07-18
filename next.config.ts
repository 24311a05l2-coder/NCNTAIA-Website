import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sreenidhi.edu.in',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
