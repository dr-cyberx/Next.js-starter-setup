/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans' : ['Outfit', ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        'radius-default' : '48px'
      },
      gap: {
        'gap-btn-text' : '8px'
      },
      padding: {
        'padding-btn-default': '12px 24px',
        'padding-btn-lg': '14px 28px',
        'padding-btn-sm': '10px 20px',
      },
      boxShadow: {
         'shadow-default' : '0px 0px 8px 0px #00000026'
      },
      height: {
        'btn-height-default': '44px',
        'btn-height-lg': '48px',
        'btn-height-sm': '40px',
      },
      lineHeight: {
        'lh-btn-default': '20.16px'
      },
      fontWeight: {
        'fw-btn-default': '400'
      },
      fontSize:{
        'text-base': '16px'
      },
    },
    colors: {
      'color-primary': '#64FFD9',
      'color-secondary': '#110053',
      'color-danger': '#D80027',
      'color-white': '#FFFFFF',
      'color-link': '#715AE6',
      'color-link2' : '#8679F6',
      'color-link-hover': '#CCC5FF',
      'color-yellow' : '#FEE96E',
      'color-pink' : '#FF5DAD',
      'color-blue' : '#00CEF6',
      'color-green' : '#00F7BA',
      'color-bg-white' : '#FDFDFD'
    }
  },
  plugins: [],
}
