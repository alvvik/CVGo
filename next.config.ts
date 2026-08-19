import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://placehold.net/avatar.svg")],
  },
};

export default nextConfig;
