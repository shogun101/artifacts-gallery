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
        'page': '#000000',
        'card-border': 'rgba(255, 255, 255, 0.12)',
        'card-border-hover': '#444444',
        'muted': '#888888',
        'label': '#ABABAB',        // brighter than muted for labels
        'primary': 'rgba(255,255,255,0.88)',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'body': ['15px', { lineHeight: '22.5px' }],
        'headline': ['20px', { lineHeight: '27px' }],
      },
      spacing: {
        'sidebar': '565px',
        'page-pad': '50px',
        'header-gap': '32px',
        'footer-gap': '16px',
        'card-label-px': '20px',
        'icon-x': '20px',
        'icon-y': '20px',
        'label-bottom': '20px',
      },
      aspectRatio: {
        'card': '440 / 497',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'toast-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'toast-out': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'toast-in': 'toast-in 0.3s ease-out',
        'toast-out': 'toast-out 0.3s ease-in forwards',
      },
    },
  },
  plugins: [],
};
export default config;
