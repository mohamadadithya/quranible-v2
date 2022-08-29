<script>
	import { transliterationChoice } from './../stores/SettingStore.js';
	import { ayahs } from './../stores/surahStore.js';
	import { isPlaying, id } from '../stores/audioStore';

	export let ayah, surah;
	let bookmarkedAyah;

	const saveAyah = () => {
		let savedAyah = {
			surahId: surah.number,
			name: surah.name,
			id: ayah.verseId,
			text: ayah.ayahText
		};
		ayahs.update((currentAyahs) => {
			if (currentAyahs.length > 0) {
				let filteredAyahs = [];
				let sameAyah = currentAyahs.find(
					(singleAyah) => singleAyah.id == savedAyah.id && singleAyah.surahId == savedAyah.surahId
				);
				if (sameAyah) {
					filteredAyahs = currentAyahs.filter((ayah) => ayah.surahId != sameAyah.surahId);
					savedAyah = {};
				} else {
					filteredAyahs = currentAyahs.filter(
						(ayah) => ayah.surahId != savedAyah.surahId && Object.keys(ayah).length > 0
					);
				}
				currentAyahs = [...filteredAyahs, savedAyah];
			} else {
				currentAyahs = [...currentAyahs, savedAyah];
			}
			return currentAyahs;
		});
	};

	$: bookmarkedAyah = $ayahs.find(
		(singleAyah) => singleAyah.id == ayah.verseId && singleAyah.surahId == surah.number
	);
</script>

<div id={ayah.verseId} class="py-8 mb-10 border-b-2 border-gray-300 dark:border-slate-500">
	<h3 class="text-3xl md:text-4xl mb-14 text-right arab-font leading-extra dark:text-slate-300">
		{ayah.ayahText}
	</h3>
	{#if $transliterationChoice}
		<p class="text-sm mb-2 dark:text-slate-500">{ayah.verseId}. {ayah.readText}</p>
	{/if}
	<p class="text-gray-500 dark:text-slate-300">{ayah.indoText}</p>
	<div id="actions" class="flex items-center mt-5 text-xl dark:text-slate-300">
		<button type="button" on:click class="mr-2"
			><i
				class="far fa-fw fa-{$isPlaying && $id == ayah.verseId ? 'pause' : 'play'}"
				title="Mainkan"
			/></button
		>
		<button type="button" on:click={saveAyah}
			><i class="{bookmarkedAyah ? 'fas' : 'far'} fa-fw fa-bookmark" title="Simpan" /></button
		>
	</div>
</div>
