<script lang="ts">
	import { onMount } from 'svelte';

	let images: { path: string; id: string }[] = [];

	const getItemId = (index: number) => `carousel-item-${index}`;

	onMount(() => {
		images = [
			{ path: '/gallery/lazer_in_your_face.avif', id: 'lazer_in_your_face' },
			{ path: '/gallery/Pointing.avif', id: 'Pointing' },
			{
				path: '/gallery/close_up.avif',
				id: 'close_up'
			},
			{ path: '/Title_Nils_Focke_Mobile.avif', id: 'Title_Nils_Focke_Mobile.avif' }
		];
	});
</script>

<div class="px-10 pb-2">
	<ul
		class="custom_scroll_bar flex snap-x snap-mandatory gap-16 overflow-x-auto p-10 before:w-16 before:shrink-0 after:w-16 after:shrink-0"
	>
		{#each images as image, index}
			<li id={getItemId(index)} class="shrink-0 snap-center">
				<button on:click={() => window.open(image.path)}>
					<img src={image.path} alt={image.id} class="h-[20vh]" />
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
