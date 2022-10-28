<script lang="ts">
	import Text from '@jonas_focke/svelcon/Wrapper/Text.svelte';
</script>

<div class="w-full h-screen flex flex-row justify-center mainBackground">
	<div class="h-screen flex flex-col justify-center">
		<div class="text-7xl text-center">
			<Text text="*NILS FOCKE*" textColor="black" />
		</div>
		<div class="text-3xl w-full flex flex-row justify-center">
			<Text text="*Professioneller EDM DJ*" textColor="black" />
		</div>
		<div class="w-full mt-4 flex flex-row space-x-10 justify-center">
			<div class="m-4 w-full text-center bg-accent font-bold p-2 border rounded-md">
				<a href="#Hörbeispiele">Hörbeispiele</a>
			</div>
			<div class="m-4 w-full text-center bg-accent font-bold p-2 border rounded-md">
				<a href="#Kontakt">Buchen</a>
			</div>
		</div>
	</div>
</div>

<style>
	.mainBackground {
		background-image: url('dj_placeholder.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-size: 100% 100%;
	}
</style>
