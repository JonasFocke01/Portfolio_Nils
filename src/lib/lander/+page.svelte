<script lang="ts">
	import Text from '@jonas_focke/svelcon/Wrapper/Text.svelte';
	import MediaQuery from '@jonas_focke/svelcon/Wrapper/MediaQuery.svelte';
	import { scrollTo } from 'svelte-scrolling';
	import Icon from 'svelte-awesome';
	import instagram from 'svelte-awesome/icons/instagram';
	import facebook from 'svelte-awesome/icons/facebook';
	import soundcloud from 'svelte-awesome/icons/soundcloud';
	import Logo from '$lib/Logo/+page.svelte';
</script>

<div class="absolute w-full h-screen flex flex-row mt-6 justify-between">
	<div class="w-[11rem] ml-6">
		<Logo />
	</div>
	<div class="mr-6 text-surface flex flex-row space-x-8 mt-3">
		<a href="https://www.instagram.com/nilsfocke/" target="_blank" rel="noreferrer">
			<Icon data={instagram} scale={4} />
		</a>
		<a
			href="https://www.facebook.com/profile.php?id=100090589291874"
			target="_blank"
			rel="noreferrer"
		>
			<Icon data={facebook} scale={4} />
		</a>
		<a href="https://www.tiktok.com/@nilsfocke" target="_blank" rel="noreferrer">
			<svg
				fill="#fef7ff"
				width="60px"
				height="60px"
				viewBox="0 0 512 512"
				id="icons"
				xmlns="http://www.w3.org/2000/svg"
				><path
					d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"
				/></svg
			>
		</a>
		<a
			href="https://soundcloud.com/nils-focke/nils-focke-dj-mix-tech-house-01"
			target="_blank"
			rel="noreferrer"
			class="mt-1"
		>
			<Icon data={soundcloud} scale={5} />
		</a>
		<a
			href="https://www.youtube.com/channel/UC1uHkS5xC6arSac2EjK_Elg"
			target="_blank"
			rel="noreferrer"
			class="-mt-1"
		>
			<svg
				fill="#fef7ff"
				width="80px"
				height="80px"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M19.67 8.14002C19.5811 7.7973 19.4028 7.48433 19.1533 7.23309C18.9038 6.98185 18.5921 6.80134 18.25 6.71001C16.176 6.4654 14.0883 6.35517 12 6.38001C9.91174 6.35517 7.82405 6.4654 5.75001 6.71001C5.40793 6.80134 5.09622 6.98185 4.84674 7.23309C4.59725 7.48433 4.41894 7.7973 4.33001 8.14002C4.10282 9.41396 3.99236 10.706 4.00001 12C3.99198 13.3007 4.10244 14.5994 4.33001 15.88C4.42355 16.2172 4.60391 16.5239 4.85309 16.7696C5.10226 17.0153 5.41153 17.1913 5.75001 17.28C7.82405 17.5246 9.91174 17.6349 12 17.61C14.0883 17.6349 16.176 17.5246 18.25 17.28C18.5885 17.1913 18.8978 17.0153 19.1469 16.7696C19.3961 16.5239 19.5765 16.2172 19.67 15.88C19.8976 14.5994 20.008 13.3007 20 12C20.0077 10.706 19.8972 9.41396 19.67 8.14002ZM10.36 14.39V9.63001L14.55 12L10.36 14.38V14.39Z"
				/>
			</svg>
		</a>
	</div>
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
