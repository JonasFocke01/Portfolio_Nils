<script lang="ts">
	import Text from '@jonas_focke/svelcon/Wrapper/Text.svelte';
</script>

<div class="w-full h-screen flex flex-row justify-center mainBackground">
	<div class="h-screen flex flex-col justify-center">
		<div class="text-7xl flex flex-col justify-center">
			<Text text="*NILS FOCKE*" />
		</div>
		<div class="text-3xl w-full flex flex-row justify-center">
			<Text text="*Professioneller EDM DJ*" />
		</div>
		<div class="w-full mt-4 flex flex-row space-x-10 justify-center">
			<a class="w-full" href="#audiosamples">
				<div
					class="mt-4 w-full text-2xl flex flex-row justify-center bg-accent font-bold p-2 border rounded-md"
				>
					<Text text="*Hörbeispiele*" />
				</div>
			</a>
			<a class="w-full" href="#contact">
				<div class="mt-4 w-full text-2xl text-center bg-accent font-bold p-2 border rounded-md">
					Kontakt
				</div>
			</a>
		</div>
	</div>
</div>

<style>
	.mainBackground {
		background-image: url('/gallery/dj_placeholder.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-size: 100% 100%;
	}
</style>
