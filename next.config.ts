import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    PORT: process.env.PORT,
  },
};

export default nextConfig;
