<script lang="ts">
	import { onMount } from 'svelte';

	type Medium = { path: string; id: string };

	let images: Medium[] = [];

	const openImage = (image: Medium) => {
		window.open(image.path);
	};

	const getItemId = (index: number) => `carousel-item-${index}`;

	onMount(() => {
		images = [
			{ path: '/gallery/lazer_in_your_face.jpg', id: 'lazer_in_your_face' },
			{ path: '/gallery/Pointing.jpeg', id: 'Pointing' },
			{
				path: window.matchMedia('(min-width: 600px)')
					? '/gallery/close_up.jpg'
					: '/Title_Nils_Focke_Mobile.jpeg',
				id: 'close_up'
			}
		];
	});
</script>

<div class="px-10 pb-2">
	<ul
		class="custom_scroll_bar flex p-10 overflow-x-auto gap-16 snap-x snap-mandatory before:shrink-0 before:w-16 after:shrink-0 after:w-16"
	>
		{#each images as image, index}
			<li id={getItemId(index)} class="shrink-0 snap-center">
				<button on:click={() => openImage(image)}>
					<img src={image.path} alt={image.id} class="h-96" />
				</button>
			</li>
		{/each}
	</ul>
</div>

<style>
	.custom_scroll_bar {
		scrollbar-width: thin;
	}
</style>
