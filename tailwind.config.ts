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
        // Wabisabi カラーパレット（コード内で使用しているカラー名）
        "deep-black": "#1a1a1a",
        "charcoal": "#2d2d2d",
        "gold": "#c9a961",
        "off-white": "#f5f5f0",
        "beige": "#ede8df",
        "moss": "#5a6b4a",
        "stone": "#8a8580",
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
