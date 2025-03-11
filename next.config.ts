import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // images: {
  //   loader: "custom",
  //   loaderFile: "./lib/loader.ts",
  // },
};

export default nextConfig;
