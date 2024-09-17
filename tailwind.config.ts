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
        "dark": "#0B0C10",
        "light": "#FFFFFF",
        "primary": "#66FCF1",
        "secondary": "#F06449"
      },
    },
  },
  plugins: [],
};
export default config;
