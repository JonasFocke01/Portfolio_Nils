<script lang="ts">
	import MediaQuery from '@jonas_focke/svelcon/Wrapper/MediaQuery.svelte';
	import ImageCarousel from '$lib/ImageCarousel/+page.svelte';

	type Medium = { path: string; id: string };
	type Media = Array<Medium>;

	const images: Media = [
		{ path: '/gallery/lazer_in_your_face.jpg', id: 'lazer_in_your_face' },
		{ path: '/gallery/picture_3.jpg', id: 'picture_3' },
		{ path: '/gallery/picture_4.jpg', id: 'picture_4' },
		{ path: '/gallery/close_up.jpg', id: 'close_up' }
	];

	const openImage = (image: Medium) => {
		window.open(image.path);
	};

	let innerWidth = 0;
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
</div>
