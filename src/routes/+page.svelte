<script lang="ts">
	import Lander from '$lib/lander/+page.svelte';
	import Contact from '$lib/contact/+page.svelte';
</script>

<div class="w-full h-full flex flex-row justify-center scroll-smooth">
	<div class="w-full h-screen flex flex-col">
		<Lander on:contactClicked={() => (window.location.href = window.location.href + '#willst')} />
		<Contact />
	</div>
</div>

<style>
	html {
		scroll-behavior: smooth;
	}
</style>
