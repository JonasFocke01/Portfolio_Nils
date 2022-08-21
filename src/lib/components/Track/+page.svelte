<script lang="ts">
	import Text from '@jonas_focke/svelcon/Wrapper/Text.svelte';
	export let track = 'demo.mp3';
	export let positionInMs = 0;
	export let playing = false;
</script>

<div class="" style="transform: transition(0px, 0px)">
	<Text text="{track} at {positionInMs} is {playing ? 'playing' : 'pausing'}" />
</div>
