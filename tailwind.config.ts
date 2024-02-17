import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      DEFAULT: '#303030',
      'gray': '#7D7D7D',
      'light-gray': '#F1F1F1',
      'black': '#303030',
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        'sm': '100%',
        'md': '100%',
        'lg': '1024px',
        'xl': '1280px',
      }
    }
  },
  plugins: [],
}
export default config
