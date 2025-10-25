import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
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
        brand: {
          25: "hsl(var(--brand-25))",
          50: "hsl(var(--brand-50))",
          100: "hsl(var(--brand-100))",
          200: "hsl(var(--brand-200))",
          300: "hsl(var(--brand-300))",
          400: "hsl(var(--brand-400))",
          500: "hsl(var(--brand-500))",
          600: "hsl(var(--brand-600))",
          700: "hsl(var(--brand-700))",
          800: "hsl(var(--brand-800))",
          900: "hsl(var(--brand-900))",
          950: "hsl(var(--brand-950))",
        },
        "gray-cool": {
          25: "hsl(var(--gray-cool-25))",
          50: "hsl(var(--gray-cool-50))",
          100: "hsl(var(--gray-cool-100))",
          200: "hsl(var(--gray-cool-200))",
          300: "hsl(var(--gray-cool-300))",
          400: "hsl(var(--gray-cool-400))",
          500: "hsl(var(--gray-cool-500))",
          600: "hsl(var(--gray-cool-600))",
          700: "hsl(var(--gray-cool-700))",
          800: "hsl(var(--gray-cool-800))",
          900: "hsl(var(--gray-cool-900))",
          950: "hsl(var(--gray-cool-950))",
        },
      },
      fontFamily: {
        sans: ['DM Sans', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
        roboto: ['Roboto', '-apple-system', 'Helvetica', 'sans-serif'],
        mono: ['DM Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      typography: {
        // Display styles
        'display-2xl': {
          fontFamily: 'DM Sans',
          fontSize: '72px',
          lineHeight: '90px',
          letterSpacing: '-0.02em',
        },
        'display-2xl-medium': {
          fontFamily: 'DM Sans',
          fontSize: '72px',
          fontWeight: '500',
          lineHeight: '90px',
          letterSpacing: '-0.02em',
        },
        'display-2xl-semibold': {
          fontFamily: 'DM Sans',
          fontSize: '72px',
          fontWeight: '600',
          lineHeight: '90px',
          letterSpacing: '-0.02em',
        },
        'display-2xl-bold': {
          fontFamily: 'DM Sans',
          fontSize: '72px',
          fontWeight: '700',
          lineHeight: '90px',
          letterSpacing: '-0.02em',
        },
        'display-xl': {
          fontFamily: 'DM Sans',
          fontSize: '60px',
          lineHeight: '72px',
          letterSpacing: '-0.02em',
        },
        'display-xl-medium': {
          fontFamily: 'DM Sans',
          fontSize: '60px',
          fontWeight: '500',
          lineHeight: '72px',
          letterSpacing: '-0.02em',
        },
        'display-xl-semibold': {
          fontFamily: 'DM Sans',
          fontSize: '60px',
          fontWeight: '600',
          lineHeight: '72px',
          letterSpacing: '-0.02em',
        },
        'display-xl-bold': {
          fontFamily: 'DM Sans',
          fontSize: '60px',
          fontWeight: '700',
          lineHeight: '72px',
          letterSpacing: '-0.02em',
        },
        'display-lg': {
          fontFamily: 'DM Sans',
          fontSize: '48px',
          lineHeight: '60px',
          letterSpacing: '-0.02em',
        },
        'display-lg-medium': {
          fontFamily: 'DM Sans',
          fontSize: '48px',
          fontWeight: '500',
          lineHeight: '60px',
          letterSpacing: '-0.02em',
        },
        'display-lg-semibold': {
          fontFamily: 'DM Sans',
          fontSize: '48px',
          fontWeight: '600',
          lineHeight: '60px',
          letterSpacing: '-0.02em',
        },
        'display-lg-bold': {
          fontFamily: 'DM Sans',
          fontSize: '48px',
          fontWeight: '700',
          lineHeight: '60px',
          letterSpacing: '-0.02em',
        },
        'display-md': {
          fontFamily: 'DM Sans',
          fontSize: '36px',
          lineHeight: '44px',
          letterSpacing: '-0.02em',
        },
        'display-md-medium': {
          fontFamily: 'DM Sans',
          fontSize: '36px',
          fontWeight: '500',
          lineHeight: '44px',
          letterSpacing: '-0.02em',
        },
        'display-md-semibold': {
          fontFamily: 'DM Sans',
          fontSize: '36px',
          fontWeight: '600',
          lineHeight: '44px',
          letterSpacing: '-0.02em',
        },
        'display-md-bold': {
          fontFamily: 'DM Sans',
          fontSize: '36px',
          fontWeight: '700',
          lineHeight: '44px',
          letterSpacing: '-0.02em',
        },
        'display-sm': {
          fontFamily: 'DM Sans',
          fontSize: '30px',
          lineHeight: '38px',
        },
        'display-sm-medium': {
          fontFamily: 'DM Sans',
          fontSize: '30px',
          fontWeight: '500',
          lineHeight: '38px',
        },
        'display-sm-semibold': {
          fontFamily: 'DM Sans',
          fontSize: '30px',
          fontWeight: '600',
          lineHeight: '38px',
        },
        'display-sm-bold': {
          fontFamily: 'DM Sans',
          fontSize: '30px',
          fontWeight: '700',
          lineHeight: '38px',
        },
        'display-xs': {
          fontFamily: 'DM Sans',
          fontSize: '24px',
          lineHeight: '32px',
        },
        'display-xs-medium': {
          fontFamily: 'DM Sans',
          fontSize: '24px',
          fontWeight: '500',
          lineHeight: '32px',
        },
        'display-xs-semibold': {
          fontFamily: 'DM Sans',
          fontSize: '24px',
          fontWeight: '600',
          lineHeight: '32px',
        },
        'display-xs-bold': {
          fontFamily: 'DM Sans',
          fontSize: '24px',
          fontWeight: '700',
          lineHeight: '32px',
        },
        // Text styles
        'text-xl': {
          fontFamily: 'DM Sans',
          fontSize: '20px',
          lineHeight: '30px',
        },
        'text-xl-medium': {
          fontFamily: 'DM Sans',
          fontSize: '20px',
          fontWeight: '500',
          lineHeight: '30px',
        },
        'text-xl-semibold': {
          fontFamily: 'DM Sans',
          fontSize: '20px',
          fontWeight: '600',
          lineHeight: '30px',
        },
        'text-xl-bold': {
          fontFamily: 'DM Sans',
          fontSize: '20px',
          fontWeight: '700',
          lineHeight: '30px',
        },
        'text-lg': {
          fontFamily: 'DM Sans',
          fontSize: '18px',
          lineHeight: '28px',
        },
        'text-lg-medium': {
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '500',
          lineHeight: '28px',
        },
        'text-lg-semibold': {
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '600',
          lineHeight: '28px',
        },
        'text-lg-bold': {
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '700',
          lineHeight: '28px',
        },
        'text-md': {
          fontFamily: 'DM Sans',
          fontSize: '16px',
          lineHeight: '24px',
        },
        'text-md-medium': {
          fontFamily: 'DM Sans',
          fontSize: '16px',
          fontWeight: '500',
          lineHeight: '24px',
        },
        'text-md-semibold': {
          fontFamily: 'DM Sans',
          fontSize: '16px',
          fontWeight: '600',
          lineHeight: '24px',
        },
        'text-md-bold': {
          fontFamily: 'DM Sans',
          fontSize: '16px',
          fontWeight: '700',
          lineHeight: '24px',
        },
        'text-sm': {
          fontFamily: 'DM Sans',
          fontSize: '14px',
          lineHeight: '20px',
        },
        'text-sm-medium': {
          fontFamily: 'DM Sans',
          fontSize: '14px',
          fontWeight: '500',
          lineHeight: '20px',
        },
        'text-sm-semibold': {
          fontFamily: 'DM Sans',
          fontSize: '14px',
          fontWeight: '600',
          lineHeight: '20px',
        },
        'text-sm-bold': {
          fontFamily: 'DM Sans',
          fontSize: '14px',
          fontWeight: '700',
          lineHeight: '20px',
        },
        'text-xs': {
          fontFamily: 'DM Sans',
          fontSize: '12px',
          lineHeight: '18px',
        },
        'text-xs-medium': {
          fontFamily: 'DM Sans',
          fontSize: '12px',
          fontWeight: '500',
          lineHeight: '18px',
        },
        'text-xs-semibold': {
          fontFamily: 'DM Sans',
          fontSize: '12px',
          fontWeight: '600',
          lineHeight: '18px',
        },
        'text-xs-bold': {
          fontFamily: 'DM Sans',
          fontSize: '12px',
          fontWeight: '700',
          lineHeight: '18px',
        },
        // Mono Display styles
        'mono-display-xl-medium': {
          fontFamily: 'DM Mono',
          fontSize: '60px',
          fontWeight: '500',
          lineHeight: '72px',
          letterSpacing: '-0.02em',
        },
        'mono-display-lg-medium': {
          fontFamily: 'DM Mono',
          fontSize: '48px',
          fontWeight: '500',
          lineHeight: '60px',
          letterSpacing: '-0.02em',
        },
        'mono-display-sm-medium': {
          fontFamily: 'DM Mono',
          fontSize: '30px',
          fontWeight: '500',
          lineHeight: '38px',
        },
        'mono-display-xs': {
          fontFamily: 'DM Mono',
          fontSize: '24px',
          lineHeight: 'normal',
        },
        'mono-display-xs-medium': {
          fontFamily: 'DM Mono',
          fontSize: '24px',
          fontWeight: '500',
          lineHeight: '32px',
        },
        // Mono Text styles
        'mono-text-xl-medium': {
          fontFamily: 'DM Mono',
          fontSize: '20px',
          fontWeight: '500',
          lineHeight: '30px',
        },
        'mono-text-lg-medium': {
          fontFamily: 'DM Mono',
          fontSize: '18px',
          fontWeight: '500',
          lineHeight: '28px',
        },
        'mono-text-md': {
          fontFamily: 'DM Mono',
          fontSize: '16px',
          lineHeight: 'normal',
        },
        'mono-text-xs-medium': {
          fontFamily: 'DM Mono',
          fontSize: '12px',
          fontWeight: '500',
          lineHeight: '18px',
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #16BCF9 0%, #1CDDF4 100%)',
        'dark-gradient': 'linear-gradient(180deg, #011C25 0%, #00C1DB 100%)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities, theme }: any) {
      const typography = theme('typography');
      const typographyUtilities: Record<string, any> = {};
      
      Object.keys(typography).forEach((key) => {
        const style = typography[key];
        typographyUtilities[`.${key}`] = style;
      });
      
      addUtilities(typographyUtilities);
    },
  ],
} satisfies Config;

