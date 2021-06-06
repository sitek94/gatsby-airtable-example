module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
