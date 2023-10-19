<script>
	import Seo from '$components/SEO.svelte';
	import SurahCard from '$components/SurahCard.svelte';
	import Icon from '@iconify/svelte';

	export let data;

	let keyword = '',
		surahs = [];

	$: if (keyword) {
		surahs = surahs.filter((surah) =>
			surah.name.transliteration.id.toLowerCase().includes(keyword.toLowerCase())
		);
	} else {
		surahs = [...data.surahs];
	}
</script>

<Seo />

<section id="home" class="min-h-screen">
	<div
		class="flex items-center border-2 border-white dark:border-slate-800 dark:focus-within:border-slate-700 focus-within:border-slate-200 shadow-lg p-4 rounded-xl bg-white dark:bg-slate-800 dark:text-slate-300"
	>
		<Icon icon="ph:magnifying-glass" class="mr-3 text-gray-400 text-3xl" />
		<input
			type="text"
			class="w-full outline-none bg-transparent"
			placeholder="Ingin baca surah apa hari ini?"
			bind:value={keyword}
		/>
	</div>
	<div class="grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6 md:gap-10 pb-12">
		{#each surahs as surah}
			<SurahCard {surah} />
		{/each}
	</div>
</section>
