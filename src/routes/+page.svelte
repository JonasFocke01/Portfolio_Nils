<script lang="ts">
	import Lander from '$lib/lander/+page.svelte';
	import Contact from '$lib/contact/+page.svelte';
	import About from '$lib/about/+page.svelte';
	import Gallery from '$lib/gallery/+page.svelte';
	import { scrollRef } from 'svelte-scrolling';
	//import SvelteSeo from 'svelte-seo';

	let scrollPosition = 0;
</script>

<!-- <SvelteSeo
	title="DJ Nils Focke"
	description="Mein Name ist Nils Focke. Ich bin DJ und kenne mich in der House- und Hardstyle Szene aus."
	keywords="dj, house, hardstyle, music, dancing, jumping"
	base="www.nilsfocke.de"
	themeColor="#26162D"
	applicationName="DJ Nils Focke"
/> -->
<div class="w-full min-h-screen flex flex-row justify-center bg-black scroll-smooth">
	<div class="w-screen flex flex-col">
		<div class="bg-black z-0" style="transform: translateY({scrollPosition * 0.5}px)">
			<Lander />
		</div>
		<div use:scrollRef={'gallery'} class="bg-secondary z-10 opacity-95">
			<Gallery />
		</div>
		<div use:scrollRef={'about'} class="bg-black z-10 ">
			<About />
		</div>
		<div use:scrollRef={'contact'} class="bg-secondary z-10">
			<Contact />
		</div>
	</div>
</div>
