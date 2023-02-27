<script lang="ts">
	import Text from '@jonas_focke/svelcon/Wrapper/Text.svelte';
	import Icon from '@iconify/svelte';

	let booking: boolean;
</script>

<div id="contact" class="w-full mb-36">
	<div class="w-full flex flex-row justify-center">
		<div class="w-1/2 flex flex-col space-y-5">
			<div class="mt-16 text-5xl flex flex-row justify-center">
				<Text text="*Kontakt*" />
			</div>
			<div class="w-full flex lg:flex-row flex-col justify-center ">
				<a
					class="w-full"
					href="https://goo.gl/maps/79QRMUPwPN5gsfxo6"
					target="_blank"
					rel="noreferrer"
				>
					<div class="w-full lg:w-1/2 p-2">
						<div class="w-full flex flex-row justify-center text-text">
							<Icon icon="akar-icons:location" height={70} width={70} />
						</div>
						<div class="flex flex-row justify-center">
							<div class="mt-2">
								<Text text="*Mein Standort*" />
								<div class="mt-2">
									<Text text="48143 Münster" />
								</div>
							</div>
						</div>
					</div>
				</a>
				<a
					class="w-full lg:w-1/2 cursor-pointer"
					href="#"
					on:click={() =>
						window.open(
							'mailto:info@nilsfocke.de?subject=Hallo Nils&body=Das möchten wir dir sagen:'
						)}
				>
					<div class="w-full lg:mt-0 mt-6 flex flex-row justify-center text-text">
						<Icon icon="ic:baseline-mail-outline" height={70} width={70} />
					</div>
					<div class="flex flex-row justify-center">
						<div class="mt-2 p-2">
							<Text text="*So kannst du mich erreichen*" />
							<div class="mt-2 flex flex-row">
								<div>
									<Text text="Phone:" />
									<div class="mt-1">
										<Text text="Mail:" />
									</div>
								</div>
								<div class="ml-4">
									<Text text="+49 173 123321" />
									<div class="mt-1">
										<Text text="info@nilsfocke.de" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</a>
			</div>
		</div>
	</div>
</div>
