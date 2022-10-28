<script lang="ts">
	import { InlineCalendar } from 'svelte-calendar';
	const theme = {
		calendar: {
			width: '600px',
			shadow: '0px 0px 5px rgba(0, 0, 0, 0.25)'
		}
	};
</script>

<div class="w-full flex flex-col text-center">
	<div id="contact" />
	<p class="text-2xl">Du willst mich buchen?</p>
	<InlineCalendar {theme} />
</div>
