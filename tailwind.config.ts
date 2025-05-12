// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B35', // Laranja vibrante (CTA)
        dark: '#1A1A2E',    // Fundo escuro
        light: '#F5F5F5',   // Fundo claro
      },
      animation: {
        'pulse-slow': 'pulse 3s infinite',
      },
    },
  },
  plugins: [],
};

export default config;
