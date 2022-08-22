<script lang="ts">
	import { leftTrack, rightTrack } from '$lib/stores/tracks';

	export let trackBalance = 0.5;
	let hidden: boolean = false;

	let scrollY: number;
</script>

<svelte:window bind:scrollY />
<div class=" flex flex-row justify-center h-1/3" style="transform: translate(0px, {scrollY}px)">
	<div
		class="flex flex-row w-1/2 h-full bg-primary justify-center rounded-md transition duration-300"
		style="transform: translate(0px, {hidden ? 80 : 0}%)"
		on:mouseenter={() => {
			hidden = false;
		}}
		on:mouseleave={() => {
			hidden = true;
		}}
	>
		<img
			src="controller/play_pause_button.jpg"
			alt="play_pause"
			class="mt-auto h-1/6 mr-auto ml-20 mb-16 cursor-pointer"
			on:click={() =>
				leftTrack.update((e) => {
					e.playing = !e.playing;
					return e;
				})}
		/>
		<input
			class="mt-auto mb-14"
			type="range"
			min="0"
			max="1"
			step="0.1"
			bind:value={trackBalance}
			on:input={() => {
				rightTrack.update((e) => {
					e.level = 1 - (1 - trackBalance);
					return e;
				});

				leftTrack.update((e) => {
					e.level = 1 - trackBalance;
					return e;
				});
			}}
		/>
		<img
			src="controller/play_pause_button.jpg"
			alt="play_pause"
			class="mt-auto h-1/6 ml-auto mr-20 mb-16 cursor-pointer"
			on:click={() =>
				rightTrack.update((e) => {
					e.playing = !e.playing;
					return e;
				})}
		/>
	</div>
</div>
