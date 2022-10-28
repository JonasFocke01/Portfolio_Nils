/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/@jonas_focke/**/*.{html,js,svelte,ts}'
	],
	theme: {
		colors: {
			primary: '#0044ae',
			secondary: '#02adff',
			accent: '#ff8c00',
			success: '#4dea3f',
			warning: '#f4bb50',
			error: '#f74838',
			info: '#62acfc',
			surface: '#006bc6',
			text: '#ffffff',
			black: '#000000'
		},
		extend: {}
	},
	plugins: []
};
