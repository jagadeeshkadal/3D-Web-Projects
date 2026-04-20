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
        mango: {
          light: "#FFB74D",
          DEFAULT: "#FFA726",
          dark: "#F57C00",
        },
        chocolate: {
          light: "#8D6E63",
          DEFAULT: "#5D4037",
          dark: "#3E2723",
        },
        pomegranate: {
          light: "#E57373",
          DEFAULT: "#C62828",
          dark: "#B71C1C",
        },
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
