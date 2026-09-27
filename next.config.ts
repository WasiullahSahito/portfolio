import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons/si", "react-icons/fa6"],
  },
};

export default nextConfig;
