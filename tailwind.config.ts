import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FEFDFB",
        creamAlt: "#FFF9F0",
        graphite: "#332E2A",
        forest: "#384637",
        pistachio: "#8B907C",
        lightGray: "#D0CCCC",
        softPink: "#FFB6C1",
        peach: "#FFB38E",
        orange: "#FF8C42",
      },
      fontFamily: {
        handwritten: ['Bad Script', 'Pink Mouse Script RUS', 'Comfortaa', 'cursive'],
        rounded: ['Comfortaa', 'cursive'],
        badscript: ['Bad Script', 'cursive'],
      },
      fontSize: {
        'h1': 'clamp(2.25rem, 6vw, 3.5rem)',
        'h2': 'clamp(2rem, 5.5vw, 3rem)',
        'h3': 'clamp(1.5rem, 4vw, 2.25rem)',
        'title': 'clamp(1.875rem, 5vw, 3rem)',
        'text-lg': 'clamp(1.125rem, 3.5vw, 1.5rem)',
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        drift: "drift 6s ease-in-out infinite",
        rotate: "rotate 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        drift: {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(15px)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;