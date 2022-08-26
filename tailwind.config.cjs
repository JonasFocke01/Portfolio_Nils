/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/@jonas_focke/**/*.{html,js,svelte,ts}'
	],
	theme: {
		colors: {
			primary: '#ed5e93',
			secondary: '#fb4f93',
			surface: '#bab7af',
			accent: '#d3fbd8',
			success: '#4dea3f',
			warning: '#f4bb50',
			error: '#f74838',
			info: '#62acfc',
			text: '#ffffff',
			black: '#000000'
		},
		plugins: []
	}
};
