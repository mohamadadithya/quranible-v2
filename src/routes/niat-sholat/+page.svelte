<script>
	import Heading from '../../components/Heading.svelte';
	import List from '../../components/List.svelte';
	import SEO from './../../components/SEO.svelte';
	export let data;
	let intentions = data.intentions;
</script>

<SEO title="Niat Sholat | Quranible" description="Kumpulan niat-niat sholat lengkap dengan arti" keywords="niat, niat-niat sholat, niat sholat" />

<section>
	<Heading title="Niat Sholat" />
	{#each intentions as intention, index}
		<List url="/niat-sholat/{intention.id}" name={intention.name} {index} />
	{/each}
</section>
