import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Wabisabi カラーパレット
        wabi: {
          stone: "#78716C",      // メインカラー（石灰）
          charcoal: "#292524",   // ダークグレー（炭）
          moss: "#44403C",       // 苔色
          sand: "#E7E5E4",       // 砂色
          paper: "#F5F5F4",      // 和紙色
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
