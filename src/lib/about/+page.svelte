<script lang="ts">
	import Icon from '@iconify/svelte';
	import Text from '@jonas_focke/svelcon/Wrapper/Text.svelte';
</script>

<div id="audiosamples" class="w-full text-center flex flex-row justify-center space-x-10 pt-16">
	<div class="w-1/4">
		<Icon icon="emojione-monotone:optical-disk" height={70} width={70} />
		<div class="mt-2">
			<Text text="*Über mich als DJ*" />
			<div class="mt-2">
				<Text
					text="
                Ich bin Professioneller blabla... 
                Für Privatpartys, Clubs ...
                Am liebsten bin ich natürlich in meinen Musikrichtungen unterwegs, 
                jedoch kann ich gerne zeitweise auch ganz anderes spielen (z.B. Rock, Pop, Klassiker, Frenchcore...), 
                nur gegen Schlager bin ich etwas allergisch, obwohl ein oder zwei auch kein Problem sind. 
                Spontane Songwünsche sind natürlich gar kein Problem!!
                "
				/>
			</div>
		</div>
	</div>
	<div class="w-1/4">
		<Icon icon="akar-icons:location" height={70} width={70} />
		<div class="mt-2">
			<Text text="*Standort*" />
			<div class="mt-2">
				<Text
					text="
                100Km Fahrtweg um den Bereich Ottmarsbocholt. 
                Inbegriffen ist z.B. das Münsterland und Dortmund. Bei längeren Strecken bitte einfach kontaktieren.
                Hier wohne ich:
                "
				/>
			</div>
			<div class="flex flex-row justify-center w-full">
				<a href="https://goo.gl/maps/NZSb25TiK5B92JaS7" target="_blank" rel="noreferrer">
					<Icon icon="arcticons:maps" height={70} width={70} />
				</a>
			</div>
		</div>
	</div>
</div>
<div class="w-full mt-10 text-center flex flex-row justify-center space-x-10 pb-16">
	<div class="w-1/4">
		<Icon icon="bi:music-note-beamed" height={70} width={70} />
		<div class="mt-2">
			<Text text="*Musikrichtungen...*" />
			<Text text="...bei denen ich mich zuhause fühle" />
			<div class="mt-2">
				<a href="https://www.youtube.com/watch?v=KB2iWaCuq0I" target="_blank" rel="noreferrer"
					><Text text="_Bigroom_" textColor="accent" />
				</a>
				<a href="https://www.youtube.com/c/BassHouseMusic" target="_blank" rel="noreferrer"
					><Text text="_Basshouse_" textColor="accent" />
				</a>
				<a href="https://www.youtube.com/watch?v=sXBDD8qtHI8" target="_blank" rel="noreferrer"
					><Text text="_Hardstyle_" textColor="accent" />
				</a>
				<a href="https://www.youtube.com/watch?v=Pey5MZgoVAU" target="_blank" rel="noreferrer"
					><Text text="_Rawstyle_" textColor="accent" />
				</a>
			</div>
		</div>
	</div>
	<div class="w-1/4">
		<Icon icon="bi:collection-play-fill" height={70} width={70} />
		<div class="mt-2">
			<Text text="*Hörbeispiele*" />
			<div class="mt-2">
				<Text
					text="
                Aufgrund von Copyright, kann ich eine Hörprobe nur auf eine kurze Anfrage versenden. 
                Eine kurze Anfrage und Sie erhalten ein irgendwie langes DJ!-Set mit Video. 
                Andernfalls bin ich dann und dann bei Twitch oder so.
                "
				/>
				<a href="#contact">
					<Text text="_Stell hier deine Set!-Anfrage_" textColor="accent" />
				</a>
			</div>
		</div>
	</div>
</div>
