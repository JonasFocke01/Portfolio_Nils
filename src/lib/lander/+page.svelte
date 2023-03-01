<script lang="ts">
	import Text from '@jonas_focke/svelcon/Wrapper/Text.svelte';
	import MediaQuery from '@jonas_focke/svelcon/Wrapper/MediaQuery.svelte';
	import { scrollTo } from 'svelte-scrolling';
	import Logo from '$lib/Logo/+page.svelte';
</script>

<div class="absolute w-full h-screen flex flex-row mt-6 justify-between">
	<div class="w-[11rem] ml-6">
		<Logo />
	</div>
	<div class="w-[20rem] mr-6 h-20 bg-surface">Sozial media</div>
</div>
<img class="h-screen object-cover" src="/Title_Nils_Focke.jpg" alt="Title Nils Focke" />

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
