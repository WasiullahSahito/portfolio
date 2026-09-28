import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons/si", "react-icons/fa6"],
  },
  async redirects() {
    // Earlier URL structures. Case studies that no longer exist land on the
    // experience page, where those projects are still described.
    return [
      { source: "/projects/onlymetric", destination: "/work/onlymetric", permanent: true },
      { source: "/project/onlymetric", destination: "/work/onlymetric", permanent: true },
      { source: "/project/happy-hour", destination: "/work/onlymetric", permanent: true },
      { source: "/projects/szabot", destination: "/work/szabot", permanent: true },
      { source: "/project/szabot", destination: "/work/szabot", permanent: true },
      { source: "/projects/:slug", destination: "/experience", permanent: true },
      { source: "/project/:slug", destination: "/experience", permanent: true },
    ];
  },
};

export default nextConfig;
