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
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === 'production' ? '/sasa_LP' : '',
  },
};

export default nextConfig;
