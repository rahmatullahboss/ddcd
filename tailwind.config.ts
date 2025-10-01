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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "brand-teal": {
          DEFAULT: "#0f766e",
          "50": "#e0f2f1",
          "100": "#b2dfdb",
          "200": "#80cbc4",
          "300": "#4db6ac",
          "400": "#26a69a",
          "500": "#009688",
          "600": "#00897b",
          "700": "#00796b",
          "800": "#00695c",
          "900": "#004d40",
        },
      },
    },
  },
  plugins: [],
};

export default config;