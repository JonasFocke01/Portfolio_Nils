<script lang="ts">
	import Text from '@jonas_focke/svelcon/Wrapper/Text.svelte';
	import MediaQuery from '@jonas_focke/svelcon/Wrapper/MediaQuery.svelte';
	import { scrollTo } from 'svelte-scrolling';
	import Logo from '$lib/Logo/+page.svelte';
</script>

<div class="w-full h-screen flex flex-row justify-center mainBackground">
	<div class="h-screen flex flex-col justify-center w-1/2">
		<Logo />
		<!-- <MediaQuery query="desktop">
			<div class="w-full mt-4 flex flex-col lg:flex-row lg:space-x-10 justify-center">
				<div
					use:scrollTo={{ ref: 'contact', offset: -window.innerHeight * 0.8, duration: 1500 }}
					class="mt-4 w-full text-2xl flex flex-row justify-center bg-secondary font-bold p-2 border rounded-md"
				>
					<Text text="*Kontakt*" />
				</div>
				<a
					href="https://www.youtube.com/@nilsfocke"
					target="_blank"
					rel="noreferrer"
					class="mt-4 w-full text-2xl flex flex-row justify-center bg-secondary font-bold p-2 border rounded-md"
				>
					<Text text="*Live DJ Mix*" />
				</a>
			</div>
		</MediaQuery> -->
	</div>
</div>

<style>
	.mainBackground {
		background-image: url('/Lander.jpg');
		background-size: cover;
		background-position: center;
	}
</style>
