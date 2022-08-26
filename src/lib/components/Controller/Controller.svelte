<script lang="ts">
	import { leftTrack, rightTrack } from '$lib/stores/tracks';

	export let trackBalance = 0.5;
	let hidden: boolean = false;

	let scrollY: number;
</script>

<svelte:window bind:scrollY />
<div class=" flex flex-row justify-center h-96" style="transform: translate(0px, {scrollY}px)">
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
		<div class="flex flex-col">
			<div class="flex flex-row space-x-20 mt-10">
				<img
					class="cursor-grab transition duration-100"
					src="controller/record.png"
					alt="record"
					width="300"
					height="300"
					style="transform: rotate({$leftTrack.progress * 100}deg);"
				/>
				<img
					class="cursor-grab transition duration-100"
					src="controller/record.png"
					alt="record"
					width="300"
					height="300"
					style="transform: rotate({$rightTrack.progress * 100}deg);"
				/>
			</div>
			<div class="flex flex-row">
				<img
					src="controller/play_pause_button.jpg"
					alt="play_pause"
					width="100"
					height="100"
					class="cursor-pointer"
					on:click={() =>
						leftTrack.update((e) => {
							e.playing = !e.playing;
							return e;
						})}
				/>
				<div class="w-full justify-center flex flex-row">
					<input
						class="mb-14 w-1/2"
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
				</div>
				<img
					src="controller/play_pause_button.jpg"
					alt="play_pause"
					width="100"
					height="100"
					class="cursor-pointer ml-auto"
					on:click={() =>
						rightTrack.update((e) => {
							e.playing = !e.playing;
							return e;
						})}
				/>
			</div>
		</div>
	</div>
</div>
