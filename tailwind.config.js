/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./{,components,hooks,src}/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'base-100': 'rgb(var(--base-100) / <alpha-value>)',
        'base-200': 'rgb(var(--base-200) / <alpha-value>)',
        'base-300': 'rgb(var(--base-300) / <alpha-value>)',
        'base-content': 'rgb(var(--base-content) / <alpha-value>)',
        'text-strong': 'rgb(var(--text-strong) / <alpha-value>)',
        'primary': 'rgb(var(--primary) / <alpha-value>)',
        'secondary': 'rgb(var(--secondary) / <alpha-value>)',
        'accent': 'rgb(var(--accent) / <alpha-value>)',
        'success': 'rgb(var(--success) / <alpha-value>)',
        'warning': '#FBBD23',
        'error': 'rgb(var(--error) / <alpha-value>)',
        'info': 'rgb(var(--info) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
