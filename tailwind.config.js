/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media", // Adapts automatically to browser/system settings
  content: [
    "./src/app/**/*.{js,jsx,mdx}",
    "./src/components/**/*.{js,jsx,mdx}",
    "./src/pages/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-bricolage)", "ui-sans-serif", "sans-serif"],
        sans: ["var(--font-poppins)", "ui-sans-serif", "sans-serif"],
      },
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        card: {
          DEFAULT: "rgb(var(--card) / <alpha-value>)",
          foreground: "rgb(var(--card-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
          foreground: "rgb(var(--secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--muted) / <alpha-value>)",
          foreground: "rgb(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          foreground: "rgb(var(--accent-foreground) / <alpha-value>)",
        },
        border: "rgb(var(--border) / <alpha-value>)",
        input: "rgb(var(--input) / <alpha-value>)",
        ring: "rgb(var(--ring) / <alpha-value>)",

        // Static brand helper tokens
        brand: {
          purple: "#4C1D95",
          orange: "#F97316",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 0.25rem)",
        sm: "calc(var(--radius) - 0.5rem)",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
        "4xl": "2.5rem",
      },
      fontSize: {
        "display-lg": ["clamp(3rem, 7vw, 5.5rem)", { lineHeight: "1.08" }],
        "display-md": ["clamp(2.4rem, 5vw, 4rem)", { lineHeight: "1.1" }],
        "display-sm": ["clamp(2.2rem, 4.5vw, 3.6rem)", { lineHeight: "1.1" }],
        quote: ["clamp(1.4rem, 3vw, 2rem)", { lineHeight: "1.45" }],
        cta: ["clamp(1.5rem, 3vw, 2.2rem)", { lineHeight: "1.2" }],
      },
    },
  },
  plugins: [],
};
