/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/@jonas_focke/**/*.{html,js,svelte,ts}'
	],
	theme: {
		colors: {
			primary: '#feb363',
			secondary: '#1a1d2b',
			surface: '#523956',
			accent: '#db7a6d',
			success: '#4dea3f',
			warning: '#f4bb50',
			error: '#f74838',
			info: '#62acfc',
			text: '#f9f871',
			black: '#000000'
		},
		plugins: []
	}
};
