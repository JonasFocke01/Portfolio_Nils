<script lang="ts">
	import Text from '@jonas_focke/svelcon/Wrapper/Text.svelte';
	import { scrollTo } from 'svelte-scrolling';
</script>

<div class="w-full h-screen flex flex-row justify-center mainBackground">
	<div class="h-screen flex flex-col justify-center">
		<div class="text-7xl p-4">
			<Text text="*NILS FOCKE*" />
		</div>
		<div class="text-3xl w-full p-4">
			<Text text="*Professioneller EDM DJ*" />
		</div>
		<div class="w-full mt-4 flex flex-col lg:flex-row lg:space-x-10 justify-center">
			<div
				use:scrollTo={{ ref: 'contact', offset: -window.innerHeight * 0.8, duration: 1500 }}
				class="mt-4 w-full text-2xl flex flex-row justify-center bg-secondary font-bold p-2 border rounded-md"
			>
				<Text text="*Kontakt*" />
			</div>
			<div
				use:scrollTo={{ ref: 'about', offset: -window.innerHeight / 2, duration: 1000 }}
				class="mt-4 w-full text-2xl flex flex-row justify-center bg-secondary font-bold p-2 border rounded-md"
			>
				<Text text="*Live DJ Mix*" />
			</div>
		</div>
	</div>
</div>

<style>
	.mainBackground {
		background-image: url('/Lander.jpg');
		background-size: cover;
		background-position: center;
	}
</style>
