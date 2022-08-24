<script>
	import { onMount } from 'svelte';
	import Ayat from '../../../components/Ayat.svelte';
	import SurahCard from '../../../components/SurahCard.svelte';
	import { audioSource, isPlaying, id } from '../../../stores/audioStore';

	export let data;
	let surah = data.surah;
	let nextSurah = data.nextSurah;
	let prevSurah = data.prevSurah;

	let audio;
	onMount(() => {
		audio.onended = () => {
			id.set($id + 1);
			const nextSurah = surah.ayahs.find((ayah) => ayah.verseId == $id);
			if (nextSurah) {
				playSurah(nextSurah.audio, nextSurah.verseId);
			}
		};
	});

	const playSurah = async (source, verseId) => {
		await id.set(verseId);
		await audioSource.set(source);
		audio.paused ? audio.play() : audio.pause();
		audio.paused ? isPlaying.set(false) : isPlaying.set(true);
	};

	$: {
		surah = data.surah;
		prevSurah = data.prevSurah;
		nextSurah = data.nextSurah;
	}
</script>

<svelte:head>
	<title>Surah {surah.name} | Quranible</title>
</svelte:head>

<section id="surah" class="pb-10 pt-5">
	{#if surah.nomor != 1}
		<h1 class="text-center text-4xl md:text-5xl mb-14 md:mb-20 arab-font">
			بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
		</h1>
	{/if}
	{#each surah.ayahs as ayah}
		<Ayat {ayah} {surah} on:click={() => playSurah(ayah.audio, ayah.verseId)} />
	{/each}
	<audio bind:this={audio} src={$audioSource} />

	<div class="grid grid-cols-1 md:grid-cols-2 gap-10">
		{#if prevSurah}
			<div>
				<p class="mb-3"><i class="far fa-fw fa-chevron-left" /> Surah Sebelumnya</p>
				<SurahCard isHover={false} surah={prevSurah} />
			</div>
		{:else}
			<div />
		{/if}
		<div>
			<p class="mb-3 text-right">Surah Selanjutnya <i class="far fa-fw fa-chevron-right" /></p>
			<SurahCard isHover={false} surah={nextSurah} />
		</div>
	</div>
</section>
