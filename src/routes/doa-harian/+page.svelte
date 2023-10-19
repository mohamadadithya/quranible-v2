<script>
	import Heading from '$components/Heading.svelte';
	import List from '$components/List.svelte';
	import Seo from '$components/SEO.svelte';
	export let data;

	const dailyPrayers = data.dailyPrayers;
</script>

<Seo
	title="Doa Harian | Quranible"
	description="Kumpulan doa-doa harian lengkap dengan arti"
	keywords="doa harian, doa-doa"
/>

<section>
	<Heading title="Doa Harian" />
	{#each dailyPrayers as prayer, index}
		<List url="/doa-harian/{prayer.id}" name={prayer.doa} {index} />
	{/each}
</section>
