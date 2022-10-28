/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/@jonas_focke/**/*.{html,js,svelte,ts}'
	],
	theme: {
		colors: {
			primary: '#170405',
			secondary: '#d3fbd8',
			accent: '#fe5172',
			success: '#4dea3f',
			warning: '#f4bb50',
			error: '#f74838',
			info: '#62acfc',
			surface: '#b0a8b9',
			text: '#36171b',
			black: '#000000'
		},
		extend: {}
	},
	plugins: []
};
