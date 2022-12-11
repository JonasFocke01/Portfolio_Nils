<script lang="ts">
	import Lander from '$lib/lander/+page.svelte';
	import Contact from '$lib/contact/+page.svelte';
	import About from '$lib/about/+page.svelte';
	import Gallery from '$lib/gallery/+page.svelte';
	import { scrollRef } from 'svelte-scrolling';
</script>

<div class="w-full min-h-screen flex flex-row justify-center bg-primary scroll-smooth">
	<div class="w-screen flex flex-col space-y-3">
		<div use:scrollRef={'lander'} class="bg-black">
			<Lander />
		</div>
		<div use:scrollRef={'about'} class="bg-secondary">
			<About />
		</div>
		<div use:scrollRef={'gallery'} class="bg-black">
			<Gallery />
		</div>
		<div use:scrollRef={'contact'} class="bg-secondary">
			<Contact />
		</div>
	</div>
</div>
