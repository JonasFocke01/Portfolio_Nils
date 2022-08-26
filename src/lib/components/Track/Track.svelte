<script lang="ts">
	import { onMount } from 'svelte';
	import { leftTrack, rightTrack } from '$lib/stores/tracks';
	import type { Track } from '$lib/stores/tracks';

	export let side: 'left' | 'right' | undefined = undefined;

	let height: number;
	let width: number;
	let scrollY: number;

	let progress = 0;
	let audio: any;

	let thisTrack: Track = {
		title: '',
		path: '',
		level: 0,
		playing: false,
		progress: 0
	};

	$: {
		if (audio) {
			thisTrack.playing ? audio.play() : audio.pause();
		}
	}

	$: {
		if (audio) {
			audio.setVolume(thisTrack.level);
		}
	}

	onMount(() => {
		setInterval(() => {
			if (audio) {
				progress = audio.getCurrentTime();
				thisTrack.progress = progress;
				if (side === 'left') {
					leftTrack.update((e) => {
						e.progress = progress;
						return e;
					});
				} else {
					rightTrack.update((e) => {
						e.progress = progress;
						return e;
					});
				}
			}
		}, 50);
	});

	onMount(() => {
		if (side === 'left') {
			leftTrack.subscribe((e) => (thisTrack = e));
		} else {
			rightTrack.subscribe((e) => (thisTrack = e));
		}
	});

	async function initProgress() {
		try {
			const waveSurfer = (await import('wavesurfer.js')).default;
			audio = waveSurfer.create({
				container: `#${thisTrack.title}`,
				waveColor: '#ed5e93',
				backgroundColor: '#000000',
				progressColor: '#d3b8c2',
				barHeight: 1,
				vertical: true,
				height: width / 6
			});
			audio.load(`/media/${thisTrack.path}`);
		} catch (error) {
			console.error(error);
		}
	}

	onMount(() => {
		initProgress();
	});
</script>

<svelte:window bind:innerHeight={height} bind:innerWidth={width} bind:scrollY />
<div
	class="flex w-full  flex-row justify-center"
	style="height: {height}px; transform: translate(0px, {scrollY}px)"
	id={thisTrack.title}
/>
