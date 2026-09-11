import type { NextConfig } from "next";
const isPagesBuild = process.env.GITHUB_ACTIONS === "true";
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isPagesBuild ? "/mistsmp" : "",
  assetPrefix: isPagesBuild ? "/mistsmp/" : ""
};
export default nextConfig;
