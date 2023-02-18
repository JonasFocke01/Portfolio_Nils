/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/@jonas_focke/**/*.{html,js,svelte,ts}'
	],
	theme: {
		colors: {
			primary: '#8945f9',
			secondary: '#26162D',
			accent: '#9d89b3',
			success: '#4dea3f',
			warning: '#f4bb50',
			error: '#f74838',
			info: '#62acfc',
			surface: '#fef7ff',
			text: '#D2D3F2',
			black: '#070502'
		},
		extend: {}
	},
	plugins: []
};
