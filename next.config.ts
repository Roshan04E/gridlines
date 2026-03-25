import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gridlinesconsultancy.in",
      },
    ],
  },
};

export default nextConfig;
