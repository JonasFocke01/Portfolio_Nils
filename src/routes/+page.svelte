<script lang="ts">
	import Lander from '$lib/lander/+page.svelte';
	import Contact from '$lib/contact/+page.svelte';
	import About from '$lib/about/+page.svelte';
	import Gallery from '$lib/gallery/+page.svelte';
	import { scrollRef } from 'svelte-scrolling';

	let scrollPosition = 0;
</script>

<svelte:window bind:scrollY={scrollPosition} />

<div class="w-full min-h-screen flex flex-row justify-center bg-black scroll-smooth">
	<div class="w-screen flex flex-col">
		<div class="bg-black z-0" style="transform: translateY({scrollPosition * 0.5}px)">
			<Lander />
		</div>
		<div use:scrollRef={'about'} class="bg-secondary z-10 opacity-95">
			<Gallery />
		</div>
		<div use:scrollRef={'gallery'} class="bg-black z-10">
			<About />
		</div>
		<div use:scrollRef={'contact'} class="bg-secondary z-10">
			<Contact />
		</div>
	</div>
</div>
