<script lang="ts">
	import Text from '@jonas_focke/svelcon/Wrapper/Text.svelte';
	import MediaQuery from '@jonas_focke/svelcon/Wrapper/MediaQuery.svelte';
	import ImageCarousel from '$lib/ImageCarousel/+page.svelte';
	import { onMount } from 'svelte';

	type Medium = { path: string; id: string };
	type Media = Array<Medium>;

	const images: Media = [
		{ path: '/gallery/lazer_in_your_face.jpg', id: 'lazer_in_your_face' },
		{ path: '/gallery/picture_3.jpg', id: 'picture_3' },
		{ path: '/gallery/picture_4.jpg', id: 'picture_4' },
		{ path: '/gallery/close_up.jpg', id: 'close_up' }
	];

	const videos: Media = [
		{ path: 'https://www.youtube.com/embed/tgbNymZ7vqY', id: 'video1' },
		{ path: 'https://www.youtube.com/embed/UDcByDCeU-c', id: 'video2' }
	];

	const openImage = (image: Medium) => {
		window.open(image.path);
	};

	let mounted = false;
	let innerWidth = 0;
	// $: w = mounted && innerWidth < 1024 ? innerWidth : (innerWidth - 200) / 2;
	onMount(() => {
		mounted = true;
	});
</script>

<svelte:window bind:innerWidth />

<div class="flex flex-col w-full justify-center text-5xl">
	<div class="mt-10 mb-10 flex flex-col">
		<MediaQuery query="desktop">
			<ImageCarousel medias={images} />
		</MediaQuery>
		<MediaQuery query="tablet">
			{#each images as image}
				<a href="/" on:click={() => openImage(image)}>
					<img class="cursor-pointer" src={image.path} alt={image.id} />
				</a>
			{/each}
		</MediaQuery>
	</div>
	<!-- <div class="flex flex-row justify-center w-full">
		<div class="mt-10 mb-28 flex lg:flex-row flex-col justify-center lg:space-x-10">
			{#each videos as video}
				<iframe width={w} height={(w / 16) * 9} title="video" src={video.path} />
			{/each}
		</div>
	</div> -->
</div>
