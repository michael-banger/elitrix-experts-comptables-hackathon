import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = "elitrix-experts-comptables-hackathon";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: isGithubPages ? "export" : undefined,
  trailingSlash: isGithubPages,
  basePath: isGithubPages ? `/${repositoryName}` : undefined,
  assetPrefix: isGithubPages ? `/${repositoryName}/` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
