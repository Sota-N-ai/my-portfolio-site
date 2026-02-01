import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopackを無効化（安定性のため）
  experimental: {
    turbo: undefined,
  },
  // ビルドの最適化
  typescript: {
    // ビルド時に型チェックをスキップ（高速化）
    ignoreBuildErrors: false,
  },
  eslint: {
    // ビルド時にESLintをスキップ（高速化）
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
