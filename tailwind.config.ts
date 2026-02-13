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
        'card-border': '#282828',
        'card-border-hover': '#444444',
        'muted': '#888888',
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
        'icon-x': '17px',
        'icon-y': '21px',
        'label-bottom': '35px',
      },
      aspectRatio: {
        'card': '440 / 497',
      },
    },
  },
  plugins: [],
};
export default config;
