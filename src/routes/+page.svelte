<script lang="ts">
	import Lander from '$lib/lander/+page.svelte';
	import About from '$lib/about/+page.svelte';
	import Gallery from '$lib/gallery/+page.svelte';

	let loaded = false;
</script>

{#if !loaded}
	<div class="h-screen w-full bg-black" />
{/if}
<div class="flex min-h-screen w-full flex-row justify-center scroll-smooth bg-black">
	<div class="flex w-full flex-col">
		<div class="scanner_animation absolute z-10 w-full bg-black">
			<Lander on:loaded={() => (loaded = true)} />
		</div>
		<div class="z-20 mt-[100vh] mb-[100vh] rounded-3xl bg-gradient-to-r from-primary to-secondary">
			<Gallery />
		</div>
		<div class="fixed z-0 bg-black">
			<About />
		</div>
	</div>
</div>

<style>
	.scanner_animation {
		clip: rect(0px, 100vw, 100vh, 0px);
	}
</style>
