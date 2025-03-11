import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // images: {
  //   loader: "custom",
  //   loaderFile: "./lib/loader.ts",
  // },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, "styles")],
  //   additionalData: `@use "./variables.module.scss" as *;`,
  // },
};

export default nextConfig;
