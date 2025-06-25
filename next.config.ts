import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Ensure static export works for GitHub Pages
  distDir: 'out',
};

export default nextConfig;
