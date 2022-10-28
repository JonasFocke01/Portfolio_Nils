<script lang="ts">
	import Lander from '$lib/lander/+page.svelte';
	import Contact from '$lib/contact/+page.svelte';
	import About from '$lib/about/+page.svelte';
	import Gallery from '$lib/gallery/+page.svelte';
</script>

<div class="w-full min-h-screen flex flex-row justify-center bg-primary scroll-smooth">
	<div class="w-screen flex flex-col space-y-36">
		<div>
			<Lander />
		</div>
		<div class="bg-surface">
			<About />
		</div>
		<div class="bg-surface">
			<Gallery />
		</div>
		<div class="bg-surface">
			<Contact />
		</div>
	</div>
</div>
