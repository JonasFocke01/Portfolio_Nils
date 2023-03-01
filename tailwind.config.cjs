/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/@jonas_focke/**/*.{html,js,svelte,ts}'
	],
	theme: {
		colors: {
			primary: '#510c32',
			secondary: '#0e1a8c',
			accent: '#9d89b3',
			success: '#4dea3f',
			warning: '#f4bb50',
			error: '#f74838',
			info: '#62acfc',
			surface: '#fef7ff',
			text: '#D2D3F2',
			black: '#000000'
		},
		extend: {}
	},
	plugins: []
};
