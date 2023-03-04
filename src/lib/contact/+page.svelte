<script lang="ts">
	import MediaQuery from '@jonas_focke/svelcon/Wrapper/MediaQuery.svelte';

	import Icon from '@iconify/svelte';
</script>

<div class="flex w-full">
	<MediaQuery query="desktop">
		<div class="flex w-1/3 justify-center">
			<Icon icon="ic:baseline-mail-outline" height={70} width={70} />
		</div>
	</MediaQuery>
	<div class="flex w-2/3 justify-start">
		<div class="flex flex-col text-left">
			<a
				class="underline"
				href="https://goo.gl/maps/79QRMUPwPN5gsfxo6"
				target="_blank"
				rel="noreferrer"
			>
				48308 Senden
			</a>
			<p>+49 1525 6594780</p>
			<input
				class="cursor-pointer underline"
				type="button"
				value="info@nilsfocke.de"
				on:click={() =>
					window.open(
						'mailto:info@nilsfocke.de?subject=Hallo Nils&body=Das möchten wir dir sagen:'
					)}
			/>
		</div>
	</div>
</div>
