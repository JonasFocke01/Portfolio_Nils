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
</script>

<div id="contact" class="w-full mb-36">
	<div class="w-full flex flex-row justify-center">
		<div class="w-1/2 flex flex-col space-y-5">
			<div class="mt-16 text-5xl flex flex-row justify-center">
				<Text text="*Kontakt*" />
			</div>
			<div class="flex flex-row">
				<div class="flex flex-row justify-center w-full">
					<a
						href="https://goo.gl/maps/WT5C7cw4eWgmVcXq5"
						target="_blank"
						rel="noreferrer"
						class="text-3xl w-1/2"
					>
						<Text text="Davertweg 25" />
						<Text text="48308 Senden" />
						<Icon icon="arcticons:google-maps-alt" height={70} width={70} />
					</a>
				</div>
				<div class="flex flex-row justify-center w-full">
					<a href="/booking" class="text-3xl w-1/2">
						<Button text="*Buchen !->*" />
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
