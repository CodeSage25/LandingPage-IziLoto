// tailwind.config.ts — VERSION COMPLÈTE MISE À JOUR
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
        "loto-gold": "#F5C518",
        "loto-dark": "#1a1a2e",
        "loto-red": "#E63946",
        "loto-gray": "#F8F9FB",
        "loto-border": "#E5E7EB",
        "loto-muted": "#6B7280",
      },
      fontFamily: {
        // Roboto Flex pour les grands titres (custom weight via CSS)
        "roboto-flex": ["'Roboto Flex'", "sans-serif"],
        // Roboto Flex Bold pour les autres titres
        "roboto-bold": ["'Roboto Flex'", "sans-serif"],
        // On garde Poppins et Inter en fallback
      },
      keyframes: {
        bounce_arrow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(8px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
      },
      animation: {
        bounce_arrow: "bounce_arrow 1.5s ease-in-out infinite",
        fadeInUp: "fadeInUp 0.6s ease-out forwards",
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.08)",
        "card-hover": "0 12px 40px rgba(0,0,0,0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
