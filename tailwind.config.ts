// tailwind.config.ts
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
        // ✨ Свадебный “скриптовый” (заголовки/имена)
        wedding: ["var(--font-wedding)", "cursive"],

        // Основной читаемый “курсив” (текст)
        cursive: ["var(--font-body)", "ui-serif", "Georgia", "serif"],

        // Оставил алиас, чтобы не ломать существующие классы в компонентах
        handwritten: ["var(--font-wedding)", "cursive"],

        // Оставил алиас, чтобы не ломать существующие классы в компонентах
        rounded: ["var(--font-body)", "ui-serif", "Georgia", "serif"],
      },
      fontSize: {
        h1: "clamp(2.75rem, 8vw, 4.5rem)",
        h2: "clamp(2.5rem, 7vw, 4rem)",
        h3: "clamp(2rem, 6vw, 3.25rem)",
        title: "clamp(2.25rem, 6.5vw, 3.75rem)",
        "text-lg": "clamp(1.375rem, 4.5vw, 2rem)",
        "text-xl": "clamp(1.5rem, 5vw, 2.25rem)",
      },
      letterSpacing: {
        wedding: "0.05em",
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