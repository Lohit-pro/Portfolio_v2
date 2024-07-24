import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark": "#151515",
        "light": "#EEEEEE",
        "primary": "#A91D3A",
        "secondary": "#C73659",
      }
    },
  },
  plugins: [],
};
export default config;
