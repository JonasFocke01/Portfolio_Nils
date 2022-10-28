<script lang="ts">
	import Text from '@jonas_focke/svelcon/Wrapper/Text.svelte';
	import Textarea from '@jonas_focke/svelcon/Input/Textarea.svelte';
	import Textfield from '@jonas_focke/svelcon/Input/Textfield.svelte';
	import Button from '@jonas_focke/svelcon/Input/Button.svelte';
	import RadioGroup from '@jonas_focke/svelcon/Input/RadioGroup.svelte';
	import Checkbox from '@jonas_focke/svelcon/Input/Checkbox.svelte';
	import Datepicker from '@jonas_focke/svelcon/Input/Date.svelte';
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	let booking: boolean;
</script>

<div id="contact" class="w-full mb-36">
	<div class="w-full flex flex-row justify-center">
		<div class="w-1/2 flex flex-col space-y-5">
			<div class="mt-16 text-5xl flex flex-row justify-center">
				<Text text="*Kontakt*" />
			</div>
			<!-- Kalender -->
			<div class="mt-10 mb-10 flex flex-row w-full justify-center space-x-10">
				<Textfield label="Deine Email" placeholder="test-test@test.de" />
				<Textfield label="Deine Telefonnummer" placeholder="+49 0123456 789" />
			</div>
			<div class="w-full flex flex-row justify-center">
				<Textarea label="Deine Nachricht" placeholder="Hey Nils" />
			</div>
			<div class="flex flex-row justify-center">
				<div class="w-1/2 flex flex-row justify-center">
					<Checkbox label="Ich möchte dich buchen" bind:checked={booking} />
				</div>
				{#if booking}
					<div
						in:fly={{ duration: 500, x: -100, easing: cubicInOut }}
						class="flex flex-col space-y-5"
					>
						<RadioGroup
							items={[
								'Du brauchst keine Lichter',
								'Bring ein paar Lichter mit.',
								'Mach die Bude richtig hell!!'
							]}
						/>
						<RadioGroup
							items={['Soundtechnisch sind wir ausgestattet', 'Wir können noch Boxen gebrauchen']}
						/>
						<Textfield
							label="Musikrichtungen die uns gefallen"
							placeholder="Country, Blues, Jazz"
						/>
						<Datepicker label="Dann würden wir dich gern buchen" />
					</div>
				{/if}
			</div>
			<div class="flex flex-row justify-center">
				<div class="w-1/2">
					<Button text="Absenden" />
				</div>
			</div>
		</div>
	</div>
</div>
