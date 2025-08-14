import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Support the correct spelling as an alias to the requested path
      { source: "/privacy-policy", destination: "/privicy-policy", permanent: true },
    ];
  },
};

export default nextConfig;
