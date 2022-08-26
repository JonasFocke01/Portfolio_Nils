<script>
	import '../app.css';
	import Track from '$lib/components/Track/Track.svelte';
	import Controller from '$lib/components/Controller/Controller.svelte';
	import { onMount } from 'svelte';
	import { leftTrack, rightTrack } from '$lib/stores/tracks';

	onMount(() => {
		leftTrack.set({
			title: 'demo',
			path: 'demo.mp3',
			level: 0.5,
			playing: false
		});

		rightTrack.set({
			title: 'demo_2',
			path: 'demo_2.mp3',
			level: 0.5,
			playing: false
		});
	});
</script>

<!-- mixing Controller  -->
<div class="absolute flex flex-row justify-center w-full max-w-1280 h-screen z-10">
	<div class="flex flex-col justify-end h-screen w-full ">
		<Controller />
	</div>
</div>

<div class="w-full flex flex-row min-h-screen bg-black">
	<!-- left side track -->
	<div class="w-1/6">
		<Track side="left" />
	</div>

	<div class="w-2/3 ">
		<slot />
	</div>

	<!-- right side track -->
	<div class="w-1/6">
		<Track side="right" />
	</div>
</div>
