<script lang="ts">
	import Text from '@jonas_focke/svelcon/Wrapper/Text.svelte';
	import { scrollTo, scrollBottom } from 'svelte-scrolling';
</script>

<div class="w-full h-screen flex flex-row justify-center mainBackground">
	<div class="h-screen flex flex-col justify-center">
		<div class="text-7xl p-4">
			<Text text="*NILS FOCKE*" textColor="secondary" />
		</div>
		<div class="text-3xl w-full p-4">
			<Text text="*Professioneller EDM DJ*" textColor="secondary" typewriterSpeed={0.3} />
		</div>
		<div class="w-full mt-4 flex flex-col lg:flex-row lg:space-x-10 justify-center">
			<div
				use:scrollTo={{ ref: 'about', offset: -window.innerHeight / 2, duration: 1000 }}
				class="mt-4 w-full text-2xl flex flex-row justify-center bg-secondary font-bold p-2 border rounded-md"
			>
				<Text text="*Hörbeispiele*" />
			</div>
			<div
				use:scrollTo={{ ref: 'contact', offset: -window.innerHeight * 0.8, duration: 1500 }}
				class="mt-4 w-full text-2xl flex flex-row justify-center bg-secondary font-bold p-2 border rounded-md"
			>
				<Text text="*Kontakt*" />
			</div>
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
