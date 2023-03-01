<script lang="ts">
	import Lander from '$lib/lander/+page.svelte';
	import Contact from '$lib/contact/+page.svelte';
	import About from '$lib/about/+page.svelte';
	import Gallery from '$lib/gallery/+page.svelte';
	import { scrollRef } from 'svelte-scrolling';
</script>

<div class="w-full min-h-screen flex flex-row justify-center bg-black scroll-smooth">
	<div class="w-screen flex flex-col">
		<div class="bg-black z-0">
			<Lander />
		</div>
		<div
			use:scrollRef={'gallery'}
			class="bg-gradient-to-r from-primary to-secondary z-20 rounded-3xl"
		>
			<Gallery />
		</div>
		<div use:scrollRef={'about'} class="bg-black z-10 ">
			<About />
		</div>
		<div use:scrollRef={'contact'} class="bg-gradient-to-r from-primary to-secondary z-10">
			<Contact />
		</div>
	</div>
</div>
