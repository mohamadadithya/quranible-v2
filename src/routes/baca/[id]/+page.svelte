<script>
	import { onMount } from 'svelte';
	import Ayat from '$components/Ayat.svelte';
	import SurahCard from '$components/SurahCard.svelte';
	import { audioSource, isPlaying, id } from '$stores/audioStore';
	import Seo from '$components/SEO.svelte';
	import { autoScrollChoice } from '$stores/SettingStore';
	import Icon from '@iconify/svelte';

	export let data;

	let surah = data.surah,
		nextSurah = data.nextSurah,
		prevSurah = data.prevSurah,
		scrollY;

	let audio;

	onMount(() => {
		audio.onended = () => {
			id.set($id + 1);
			const nextSurah = surah.ayahs.find((ayah) => ayah.number.inSurah == $id);

			if (nextSurah) {
				playSurah(nextSurah.audio.primary, nextSurah.number.inSurah);

				if ($autoScrollChoice) {
					window.location.hash = `#${$id}`;
				}
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

<Seo
	title="Surah {surah.name.transliteration.id} | Quranible"
	keywords="surah {surah.name.transliteration.id}, surah ke-{surah.number} dalam al-quran"
/>

<svelte:window bind:scrollY />

<section id="surah" class="pt-5">
	{#if surah.number != 1}
		<h1 class="text-center text-4xl md:text-5xl mb-14 md:mb-20 arab-font dark:text-slate-300">
			بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
		</h1>
	{/if}

	{#each surah.verses as ayah}
		<Ayat {ayah} {surah} on:click={() => playSurah(ayah.audio.primary, ayah.number.inSurah)} />
	{/each}

	<audio bind:this={audio} src={$audioSource} />

	<div class="grid grid-cols-1 md:grid-cols-2 gap-10">
		{#if prevSurah}
			<div class="dark:text-slate-300">
				<div class="flex items-center gap-2 mb-3">
					<Icon class="text-2xl" icon="mdi:arrow-left" />
					<p>Surah Sebelumnya</p>
				</div>
				<SurahCard isHover={false} surah={prevSurah} />
			</div>
		{:else}
			<div />
		{/if}
		<div class="dark:text-slate-300">
			<div class="flex items-center justify-end gap-2 mb-3">
				<p>Surah Selanjutnya</p>
				<Icon class="text-2xl" icon="mdi:arrow-right" />
			</div>
			<SurahCard isHover={false} surah={nextSurah} />
		</div>
	</div>
</section>

<button
	id="scroll-top"
	on:click={() => (scrollY = 0)}
	title="Scroll to Top"
	class="fixed bottom-8 right-4 {scrollY > 500
		? 'opacity-100'
		: 'opacity-0 pointer-events-none'} transition-opacity duration-300 bg-slate-800 rounded-full text-white dark:text-slate-300 w-12 h-12 grid place-items-center"
>
	<Icon class="text-3xl" icon="mdi:chevron-up" />
</button>
