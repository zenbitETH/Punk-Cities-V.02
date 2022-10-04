/** @type {import('tailwindcss').Config} */ 
module.exports = {

	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	enabled: true,
	darkMode: "class",
	variants: {
	  fill: ['hover', 'focus'], // this line does the trick
	},
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
			  },
			maxHeight: {
				'half': '50%',
			  },
			colors: {
				display: ["group-hover"],
				hover: {
					900: "#719CE4",//backgrounnd dark
					800: "#2765cc",
					700: "#CB3837",//npm
					600: "#238636",//github
					500: "#02500F",//lens
					400: "#D5005E",//instagram
					300: "#007AB9",//linkedin
					200: "#55ACEF",//twitter
					100: "#5865F2",//discord
				},

				glass: {
					900: "#19191a00",
					100: "#19191a41",
					200: "#ffffff20",
					300: "#ffffff71",
					400: "#fdb04e00",
					500: "#fdb04e51",
					600: "#11919551",
					700: "#e03fba71",
					800: "#49e9f871",
				},
  

				solar: {
					900: "#aaa6a1",
					800: "#bfa98c",
					700: "#cdaa7e",
					600: "#daac71",
					500: "#e1ad6a",
					400: "#e8ad63",
					300: "#efae5c",
					200: "#f6af55",
					100: "#fdb04e",
				},

				cyber: {
					100: "#119195",
					200: "#0b979b",
					300: "#119195",
					400: "#178b8f",
					500: "#247f82",
					600: "#376d6f",
					700: "#3e6768",
					800: "#4a5b5c",
					900: "#515555",
				},
				night: {
					300: "#014875",
					200: "#01304E",
					100: "#192024",
				},


			},
			spacing: {
				88: "22rem",
			},
			screens: {
				'fhd': '1920px',
				'qhd': '2560px',
				'uhd': '3840px',
			  },
			borderRadius: {
				'dc': '12px',
				'dd': '22px',
				'gen': '32px',
				'med': '20px',
				'but': '52px',
			},
			fontFamily: {
				Poppins: ["Poppins, sans-serif"],
				exo: ['"Exo 2"'],
				lex: ['"Lexend"'],
				bal: ['"Baloo 2"'],
			},
			container: {
				center: true,
			},
		},
	},
	plugins: [

		// ...
	  ],
  };