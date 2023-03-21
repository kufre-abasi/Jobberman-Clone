module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Satoshi400: ["Satoshi-Regular"],
        Satoshi500: ["Satoshi-Medium"],
        Satoshi700: ["Satoshi-Bold"],
        Satoshi900: ["Satoshi-Black"],
      },
      colors: {
      'primary': '#004ab9',
			'brand-secondary': '#7c3aed',
			'brand-tertiary': '#F3F4F63D',
			'content-background' : '#f7f8fa',
        'brand-opaque': '#f2ebfd',
        'primary-light': '#FFFFFF',
      



			// 'brand-linked': '#004ab9',
			// 'secondary' : '#ce6933',
			// 'secondary-light': '#FFFFFF',
			// 'ternary-light': '#f6f7f8',
			// 'primary-dark': '#020001',
			// 'secondary-dark': '#161514',
			// 'ternary-dark': '#1E3851',
			// 'brand-primary': '#004ab9',
			// 'brand-primary-hover': '#00388b',
			// 'brand-tertiary-hover': '#e6edf8',
			// 'gray-300': '#d1d5db',
			// 'gray-500': '#6b7280',
			// 'gray-700': '#374151',
      },
      utilities: {
        ".tick": {
          display: "inline-block",
          width: "1.55rem",
          height: "0.5rem",
          border: "2px solid currentColor",
          borderTop: "none",
          borderRight: "none",
          transform: "rotate(-45deg)",
          marginRight: "0.25rem",
        },
      },
    },
  },
  plugins: [],
};
