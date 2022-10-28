<script lang="ts">
	import Lander from '$lib/lander/+page.svelte';
	import Contact from '$lib/contact/+page.svelte';
	import About from '$lib/about/+page.svelte';
</script>

<div class="w-full h-full flex flex-row justify-center scroll-smooth">
	<div class="w-full h-screen flex flex-col space-y-36">
		<Lander />
		<About />
		<Contact />
	</div>
</div>
