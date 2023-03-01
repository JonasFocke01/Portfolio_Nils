<script lang="ts">
	import Icon from '@iconify/svelte';
	import Text from '@jonas_focke/svelcon/Wrapper/Text.svelte';
	import { inview } from 'svelte-inview';

	let isInView: boolean;
	const options = {};
</script>

<div
	id="audiosamples"
	class="w-full text-center flex flex-row justify-center space-x-10 pt-5 mb-16"
>
	<div class="w-3/4 lg:w-1/2 text-text">
		<div class="mt-2 flex 2xl:flex-row flex-col">
			<img
				class="w-[30rem] object-scale-down"
				src="/Portrait_Nils_Focke.jpg"
				alt="Portrait Nils Focke"
			/>
			<div class="mt-2 ml-4">
				<div class="mt-2">
					<Text
						text="
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor aliquam nulla facilisi cras. Magna fermentum iaculis eu non. A diam sollicitudin tempor id eu. Ac orci phasellus egestas tellus rutrum tellus pellentesque. At in tellus integer feugiat scelerisque varius. Blandit aliquam etiam erat velit scelerisque. Convallis posuere morbi leo urna molestie at elementum eu. Ipsum nunc aliquet bibendum enim. Ornare massa eget egestas purus viverra accumsan in nisl. Aliquam faucibus purus in massa tempor nec feugiat nisl. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Eget nulla facilisi etiam dignissim diam quis. Tempor nec feugiat nisl pretium fusce. Id cursus metus aliquam eleifend. Dui vivamus arcu felis bibendum ut tristique.

					"
					/>
				</div>
			</div>
		</div>
	</div>
</div>
