import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  output: "standalone",
  images: {
    remotePatterns: [{ hostname: "placehold.co" }],
  },
};

export default nextConfig;
