<script>
	import Seo from '../components/SEO.svelte';
	import SurahCard from '../components/SurahCard.svelte';

	export let data;
	let keyword = '';
	let surahs = [];
	$: if (keyword) {
		surahs = surahs.filter((surah) => surah.name.toLowerCase().includes(keyword.toLowerCase()));
	} else {
		surahs = [...data.surahs.data];
	}
</script>

<Seo />

<section id="home">
	<div class="flex items-center shadow-lg p-4 rounded-xl bg-white">
		<i class="far fa-fw fa-search mr-3 text-gray-400" />
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
