import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['drive.google.com','th.bing.com','businessguide.ezega.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  /* config options here */
};

export default nextConfig;
