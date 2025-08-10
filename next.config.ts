import type { NextConfig } from "next";

// GitHub Pages 配信 (repo: /sasa_LP) を想定した設定
// ローカル開発でも basePath は有効になります
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/sasa_LP",
  assetPrefix: "/sasa_LP/",
  images: {
    // 静的エクスポートでは最適化を無効化
    unoptimized: true,
  },
};

export default nextConfig;
