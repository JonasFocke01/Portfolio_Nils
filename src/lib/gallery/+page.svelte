<script lang="ts">
	import Text from '@jonas_focke/svelcon/Wrapper/Text.svelte';
	import ImageCarousel from '$lib/ImageCarousel/+page.svelte';

	const images = [
		{ path: '/gallery/picture_1.jpg', id: 'picture_1' },
		{ path: '/gallery/picture_2.jpg', id: 'picture_2' },
		{ path: '/gallery/picture_3.jpg', id: 'picture_3' },
		{ path: '/gallery/picture_4.jpg', id: 'picture_4' }
	];

	const videos = [
		{ path: 'www.asdf.de', id: 'video1' },
		{ path: 'www.asdf.de', id: 'video1' }
	];
</script>

<div class="flex flex-col w-full justify-center text-5xl">
	<div class="pt-10 flex flex-row justify-center">
		<Text text="*So sehen meine Auftritte aus*" />
	</div>
	<div class="mt-10 flex flex-row">
		<ImageCarousel medias={images} />
	</div>
	<div class="mt-10 mb-28 flex flex-row justify-center space-x-10">
		{#each videos as video}
			<iframe
				width="420"
				height="315"
				title="video"
				src="https://www.youtube.com/embed/tgbNymZ7vqY"
			/>
		{/each}
	</div>
</div>
