/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{html,js}",
		"./node_modules/tw-elements/dist/js/**/*.js",

		// "./node_modules/flowbite/**/*.js",
	],
	theme: {
		extend: {
			fontFamily: {
				burtons: "Burtons", //custom font otf

				// google fonts //
				inter: ["Inter", "sans-serif"],
				// playfairDisplay: ["Playfair Display", "sans-serif"],
				// poppins: ["Poppins", "sans-serif"],
				// google fonts //
			},
			backgroundImage: {
				"intro-bg": "url('../public/intro_bg.jpg')",
			},
		},
	},
	// plugin: [],
	plugins: [require("flowbite/plugin"), require("tw-elements/dist/plugin")],
}
