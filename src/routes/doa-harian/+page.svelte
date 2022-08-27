<script>
	import DailyPrayer from '../../components/DailyPrayer.svelte';
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
		<DailyPrayer {prayer} {index} />
	{/each}
</section>
