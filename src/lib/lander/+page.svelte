<script lang="ts">
	import MediaQuery from '@jonas_focke/svelcon/Wrapper/MediaQuery.svelte';
	import Logo from '$lib/Logo/+page.svelte';
	import Icononify from '@iconify/svelte';
	import { toast } from '@zerodevx/svelte-toast';

	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();

	const MOBILE_LAYOUT_SWITCH_IN_PX = 1024;

	let innerWidth = 0;

	onMount(() => setTimeout(() => dispatch('loaded'), 100));
</script>

<svelte:window bind:innerWidth />

<div class="fixed w-full">
	<div class="absolute mt-6 flex w-full flex-col-reverse justify-between px-2 lg:flex-row">
		<div class="mr-2 mb-2 ml-auto w-[8rem] pt-4 sm:ml-6 sm:w-[12rem] lg:pt-0">
			<Logo />
		</div>
		<div
			class=" ml-auto flex text-surface lg:mr-6  {innerWidth > MOBILE_LAYOUT_SWITCH_IN_PX
				? 'space-x-8'
				: 'space-x-4'} mt-3 h-full sm:h-16"
		>
			<a
				href="https://www.instagram.com/nilsfocke/"
				target="_blank"
				rel="noreferrer"
				class="mx-auto"
			>
				<Icononify
					icon="mdi:instagram"
					class="transition duration-150 hover:text-[#c13584]"
					height={innerWidth > MOBILE_LAYOUT_SWITCH_IN_PX ? 70 : 25}
					width={innerWidth > MOBILE_LAYOUT_SWITCH_IN_PX ? 70 : 25}
				/>
			</a>
			<a
				href="https://www.facebook.com/profile.php?id=100090589291874"
				target="_blank"
				rel="noreferrer"
				class="mx-auto"
			>
				<Icononify
					icon="ic:baseline-facebook"
					class="transition duration-150 hover:text-[#4267b2]"
					height={innerWidth > MOBILE_LAYOUT_SWITCH_IN_PX ? 70 : 25}
					width={innerWidth > MOBILE_LAYOUT_SWITCH_IN_PX ? 70 : 25}
				/>
			</a>
			<a href="https://www.tiktok.com/@nilsfocke" target="_blank" rel="noreferrer" class="mx-auto">
				<Icononify
					icon="ic:baseline-tiktok"
					class="transition duration-150 hover:text-[#fe2c55]"
					height={innerWidth > MOBILE_LAYOUT_SWITCH_IN_PX ? 70 : 25}
					width={innerWidth > MOBILE_LAYOUT_SWITCH_IN_PX ? 70 : 25}
				/>
			</a>
			<a
				href="https://soundcloud.com/nils-focke/nils-focke-dj-mix-tech-house-01"
				target="_blank"
				rel="noreferrer"
				class="mx-auto mt-1"
			>
				<Icononify
					icon="ri:soundcloud-fill"
					class="transition duration-150 hover:text-[#f26f23]"
					height={innerWidth > MOBILE_LAYOUT_SWITCH_IN_PX ? 70 : 25}
					width={innerWidth > MOBILE_LAYOUT_SWITCH_IN_PX ? 70 : 25}
				/>
			</a>
			<a
				href="https://www.youtube.com/channel/UC1uHkS5xC6arSac2EjK_Esm"
				target="_blank"
				rel="noreferrer"
				class="mx-auto mt-1"
			>
				<Icononify
					icon="mdi:youtube"
					class="transition duration-150 hover:text-[#ff0000]"
					height={innerWidth > MOBILE_LAYOUT_SWITCH_IN_PX ? 70 : 25}
					width={innerWidth > MOBILE_LAYOUT_SWITCH_IN_PX ? 70 : 25}
				/>
			</a>
			<button
				class="cursor-pointer"
				on:click={() =>
					innerWidth > MOBILE_LAYOUT_SWITCH_IN_PX
						? navigator.clipboard
								.writeText('info@nilsfocke.de')
								.then(() => toast.push('Mail copied to clipboard'))
						: window.open(
								'mailto:info@nilsfocke.de?subject=Hello Nils&body=We want you to know that...'
						  )}
			>
				<Icononify
					icon="ic:baseline-mail-outline"
					class="mt-0.5 transition duration-150 hover:text-[#16dd19]"
					height={innerWidth > MOBILE_LAYOUT_SWITCH_IN_PX ? 70 : 25}
					width={innerWidth > MOBILE_LAYOUT_SWITCH_IN_PX ? 70 : 25}
				/>
			</button>
			<button
				class="cursor-pointer"
				on:click={() =>
					innerWidth > MOBILE_LAYOUT_SWITCH_IN_PX
						? navigator.clipboard
								.writeText('+4915256594780')
								.then(() => toast.push('Phone copied to clipboard'))
						: window.open('tel:+49 1525 6594780')}
			>
				<Icononify
					icon="material-symbols:phone-enabled"
					class="mt-0.5 transition duration-150 hover:text-[#29c6e5]"
					height={innerWidth > MOBILE_LAYOUT_SWITCH_IN_PX ? 70 : 25}
					width={innerWidth > MOBILE_LAYOUT_SWITCH_IN_PX ? 70 : 25}
				/>
			</button>
			<a
				class="underline"
				href="https://goo.gl/maps/79QRMUPwPN5gsfxo6"
				target="_blank"
				rel="noreferrer"
			>
				<Icononify
					icon="mdi:google-maps"
					class="mt-0.5 transition duration-150 hover:text-[#f4b400]"
					height={innerWidth > MOBILE_LAYOUT_SWITCH_IN_PX ? 70 : 25}
					width={innerWidth > MOBILE_LAYOUT_SWITCH_IN_PX ? 70 : 25}
				/>
			</a>
		</div>
	</div>

	<MediaQuery query="desktop">
		<img
			on:load={() => setTimeout(() => dispatch('loaded'), 100)}
			class="block h-screen w-full bg-black object-cover"
			src="/Title_Nils_Focke.jpg"
			alt="Title Nils Focke"
		/>
	</MediaQuery>
	<MediaQuery query="tablet">
		<img
			on:load={() => setTimeout(() => dispatch('loaded'), 100)}
			class="block h-screen w-full bg-black object-cover"
			src="/Title_Nils_Focke_Mobile.jpg"
			alt="Title Nils Focke"
		/>
	</MediaQuery>
</div>
