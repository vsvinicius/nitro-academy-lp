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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'theme-orange': '#f54a12',
        'blue-light': '#599fe9',
      },
      fontFamily: {
        "gilroy-extrabold": "var(--font-gilroy-extrabold)",
        "gilroy-light": "var(--fonts-gilroy-light)",
        helvetica: "var(--font-helvetica)",
        "montserrat-black": "var(--font-montserrat-black)",
        "montserrat-light": "var(--font-montserrat-light)",
        "montserrat-regular": "var(--font-montserrat-regular)",
      },
    },
  },
  plugins: [],
};
export default config;
