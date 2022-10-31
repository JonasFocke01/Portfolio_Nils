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
	import Icon from '@iconify/svelte';

	let booking: boolean;

	let personalText: string = '';

	function submitForm() {
		console.log('Form send...');
	}
</script>

<div class="w-full flex flex-row justify-center bg-primary min-h-screen">
	<div class="w-1/2 mt-20 p-5 flex flex-col bg-surface">
		<div class="flex flex-row">
			<div class="w-1/6">
				<a href="/">
					<Button text="<!- Zurück" />
				</a>
			</div>
			<div class="mt-2 w-full flex flex-row justify-center">
				<div class="text-4xl">
					<Text text="*Buchung anfragen*" />
				</div>
			</div>
			<div class="w-1/6" />
		</div>
		<div class="mt-10">
			<div class="flex flex-row">
				<div class="w-1/2 p-4">
					<Textarea
						label="Dein persönlicher Text"
						bind:value={personalText}
						placeholder="Hallo Nils, ich wollte mal hallo sagen :)"
					/>
				</div>
				<div class="w-1/2 p-4">
					<div class="text-2xl flex flex-row justify-center">
						<Text text="Vorschau" />
					</div>
					<Text text={personalText} />
				</div>
			</div>
			<Button text="Anfrage absenden" on:click={() => submitForm()} />
		</div>
	</div>
</div>
