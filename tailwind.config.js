// tailwind.config.js
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        typography: {
          outlined: {
            css: {
              '--tw-text-opacity': '1',
              color: 'transparent',
              '-webkit-text-stroke': '1px #22c55e',
            },
          },
        },
      },
    },
    plugins: [],
  };
  