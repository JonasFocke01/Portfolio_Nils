<script>
	import '../app.css';
	import Track from '$lib/components/Track/+page.svelte';

	let sliderValue = 100;
</script>

<!-- mixing console -->
<div class="absolute flex flex-row justify-center w-full h-screen z-10">
	<div class="flex flex-col justify-end h-screen ">
		<input type="range" bind:value={sliderValue} />
	</div>
</div>

<div class="flex flex-row bg-secondary">
	<!-- left side track -->
	<div class="w-1/6 min-h-screen">
		<Track track="demo_123.mp3" positionInMs={100} />
	</div>

	<div class="w-2/3 min-h-screen ">
		<slot />
	</div>

	<!-- right side track -->
	<div class="w-1/6 min-h-screen">
		<Track track="demo_321.mp3" positionInMs={0} />
	</div>
</div>
