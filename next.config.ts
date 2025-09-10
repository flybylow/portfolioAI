import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generate a fully static export in ./out for deployment on any static host
  output: 'export',
  images: {
    // Required for static export when using next/image
    unoptimized: true,
  },
};

export default nextConfig;