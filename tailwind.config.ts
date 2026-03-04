import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // Brand Identity colors mapped explicitly for Tailwind classes
        'cascade-void': 'var(--cascade-void)',
        'cascade-deep': 'var(--cascade-deep)',
        'cascade-surface': 'var(--cascade-surface)',
        'cascade-elevated': 'var(--cascade-elevated)',
        'cascade-border': 'var(--cascade-border)',
        'cascade-glow': 'var(--cascade-glow)',

        'cascade-blue': 'var(--cascade-blue)',
        'cascade-blue-glow': 'var(--cascade-blue-glow)',
        'cascade-blue-deep': 'var(--cascade-blue-deep)',

        'cascade-cyan': 'var(--cascade-cyan)',
        'cascade-indigo': 'var(--cascade-indigo)',
        'cascade-violet': 'var(--cascade-violet)',

        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "var(--cascade-surface)",
          foreground: "var(--text-primary)",
          border: "var(--cascade-border)",
          accent: "var(--cascade-elevated)",
          "accent-foreground": "var(--cascade-blue)",
          ring: "var(--cascade-blue)",
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(20px)" }
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        "slide-up": {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "scale-in": "scale-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
      },
      fontFamily: {
        'display': ['"Space Grotesk"', 'sans-serif'],
        'sans': ['"Inter"', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
