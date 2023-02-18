<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';
	import Text from '@jonas_focke/svelcon/Wrapper/Text.svelte';
	import { inview } from 'svelte-inview';

	let isInView: boolean;
	const options = {};
</script>

<div class="mt-16 w-full flex flex-row justify-center text-5xl">
	<Text text="*Das bin ich*" />
	<div
		class="flex flex-row justify-center transform duration-1000 ease-in-out text-text mt-2 h-[40px]"
		use:inview={options}
		on:enter={(event) => {
			const { inView } = event.detail;
			isInView = inView;
		}}
		class:rotate-180={isInView}
		class:-rotate-180={!isInView}
	>
		<Icon icon="emojione-monotone:optical-disk" height={40} width={40} />
	</div>
</div>
<div
	id="audiosamples"
	class="w-full text-center flex flex-row justify-center space-x-10 pt-5 mb-16"
>
	<div class="w-3/4 lg:w-1/2 text-text">
		<div class="mt-2 flex flex-row">
			<img class="mr-20 object-scale-down" src="/Portrait.jpg" alt="Mein Portrait" />
			<div class="mt-2 ml-4">
				<div class="mt-2">
					<Text
						text="
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor aliquam nulla facilisi cras. Magna fermentum iaculis eu non. A diam sollicitudin tempor id eu. Ac orci phasellus egestas tellus rutrum tellus pellentesque. At in tellus integer feugiat scelerisque varius. Blandit aliquam etiam erat velit scelerisque. Convallis posuere morbi leo urna molestie at elementum eu. Ipsum nunc aliquet bibendum enim. Ornare massa eget egestas purus viverra accumsan in nisl. Aliquam faucibus purus in massa tempor nec feugiat nisl. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Eget nulla facilisi etiam dignissim diam quis. Tempor nec feugiat nisl pretium fusce. Id cursus metus aliquam eleifend. Dui vivamus arcu felis bibendum ut tristique.

Amet consectetur adipiscing elit ut aliquam purus. Augue interdum velit euismod in pellentesque massa. Elit ullamcorper dignissim cras tincidunt lobortis. Natoque penatibus et magnis dis parturient montes. Eros in cursus turpis massa tincidunt. Viverra aliquet eget sit amet tellus cras adipiscing enim. Nunc non blandit massa enim. Praesent elementum facilisis leo vel fringilla. Tellus integer feugiat scelerisque varius morbi. Pellentesque habitant morbi tristique senectus et. Etiam erat velit scelerisque in dictum. Amet porttitor eget dolor morbi non arcu. Aliquet bibendum enim facilisis gravida neque convallis a. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Augue mauris augue neque gravida in fermentum et.
					"
					/>
				</div>
			</div>
		</div>
	</div>
</div>
