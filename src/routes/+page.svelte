<script lang="ts">
	import Text from '@jonas_focke/svelcon/Wrapper/Text.svelte';
</script>

<div>
	<!-- headline -->

	<div class="pt-20 pb-16 w-full flex flex-row justify-center">
		<Text text="NILS FOCKE" size="large" />
	</div>

	<!-- picture -->

	<img src="/Nils_title.jpg" alt="testpicture" />

	<!-- bio / about -->

	<div class="pb-96 p-20">
		<Text
			text="Hallo, mein name ist Nils Focke. Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Sapiente earum eveniet natus fugiat dignissimos libero et, deserunt nostrum eligendi eaque quia
		fugit, tempora perspiciatis nisi impedit, in soluta pariatur recusandae!"
		/>
	</div>

	<!-- samples -->

	<div class="pb-96 p-20 bg-surface">
		<Text
			text="Hier gibt es noch mehr Beispiele von mir. Leg einfach ne platte auf, ab gehts..."
			textColor="black"
		/>
	</div>

	<!-- services -->
	<div class="pb-96 p-20">
		<Text
			text="Ich biete an, dass [Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, aliquam
		assumenda placeat quibusdam dolorem, quo architecto dicta qui vitae autem ab enim harum quam
		nisi minus deserunt ipsum rerum praesentium?]"
		/>
	</div>

	<!-- links, references and contact -->

	<div class="pb-96 p-20 bg-surface">
		<p><Text text="Hier gehts zu meinem Insta, Facebook usw.." textColor="black" /></p>
		<p><Text text="Kannst mir auch ne Mail schreiben an nilsfocke@web.de.." textColor="black" /></p>
		<p>
			<Text
				text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum corporis recusandae minima
			sunt? Reiciendis corrupti assumenda fuga iusto ex vero eveniet commodi, ad quisquam totam
			magnam, repellendus, alias facilis sapiente."
				textColor="black"
			/>
		</p>
	</div>

	<!-- impressum -->

	<div class="pb-96 p-20">
		<Text text="Copyright 2022 Nils Focke" />
		<p>
			<Text
				text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae velit, quaerat ratione id
			voluptatum adipisci vero obcaecati esse facilis, ipsa, earum omnis cumque aut! Minus, rerum
			qui! Maxime, ipsum voluptas?"
			/>
		</p>
	</div>
</div>
