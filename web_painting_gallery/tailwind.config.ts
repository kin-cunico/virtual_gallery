import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				primary: "#FBEAAB",
				secondary: "#3797A4",
				tertiary: "#8CCBBE",
				quaternary: "#E4E4E4",
			},
			fontFamily: {
				primary: ["Neucha", "cursive"],
				secondary: ["Roboto"],
			},
		},
	},

	plugins: [],
};
export default config
