import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        josefine: ['Josefin Sans', 'sans-serif']
      },
      colors: {
        'mainbrown': '#85714D',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;

