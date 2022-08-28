<script>
	import Heading from '../../components/Heading.svelte';
	import List from '../../components/List.svelte';
	import Seo from '../../components/SEO.svelte';
	import { ayahs } from './../../stores/surahStore.js';

	const filteredAyahs = $ayahs.filter((ayah) => Object.keys(ayah).length > 0).reverse();
</script>

<Seo title="Penanda Surah | Quranible" />

<section>
	<Heading title="Penanda Surah" />
	{#if filteredAyahs.length}
		{#each filteredAyahs as ayah, index}
			<List url="/baca/{ayah.surahId}#{ayah.id}" name={ayah.name} ayahId={ayah.id} {index} />
		{/each}
	{:else}
		<p>Belum ada penanda surah...</p>
	{/if}
</section>
