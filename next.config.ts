import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
