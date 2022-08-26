<script>
	import Seo from '../../components/SEO.svelte';

	export let data;

	const dailyPrayers = data.dailyPrayers;
</script>

<Seo title="Doa Harian | Quranible" />

<section class="pb-10">
	<div class="flex items-center mb-5">
		<h1 class="text-3xl font-semibold">Doa Harian</h1>
		<div class="w-full h-0.5 bg-gray-300 flex-1 ml-3" />
	</div>
	{#each dailyPrayers as prayer, index}
		<a
			sveltekit:prefetch
			href="/doa-harian/{prayer.id}"
			class="text-xl hover:bg-slate-200 py-4 font-medium border-b-2 border-gray-300 block capitalize"
			>{index + 1}. {prayer.doa}</a
		>
	{/each}
</section>
