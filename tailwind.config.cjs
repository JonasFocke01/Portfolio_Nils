/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/@jonas_focke/**/*.{html,js,svelte,ts}'
	],
	theme: {
		colors: {
			primary: '#007594',
			secondary: '#574141',
			surface: '#bfa5a5',
			accent: '#b5273d',
			success: '#4dea3f',
			warning: '#f4bb50',
			error: '#f74838',
			info: '#62acfc',
			text: '#00abca',
			black: '#000000'
		},
		plugins: []
	}
};
