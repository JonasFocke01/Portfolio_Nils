<script>
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import '../app.css';

	const options = {
		duration: 10000,
		reversed: true,
		
	};
</script>

<SvelteToast {options} />

<slot />
