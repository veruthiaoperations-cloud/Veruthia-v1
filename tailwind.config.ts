import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        display: ["var(--font-cinzel)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        cinzel: ["var(--font-cinzel)", "serif"],
      },
      colors: {
        "rich-black": "#050505",
      },
    },
  },
  plugins: [],
};

export default config;
