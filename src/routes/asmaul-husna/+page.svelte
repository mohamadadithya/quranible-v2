<script>
	import Heading from '../../components/Heading.svelte';
	import Seo from '../../components/SEO.svelte';

	export let data;
	const goodNames = data.goodNames;
</script>

<Seo title="Asmaul Husna | Quranible" />

<section class="dark:text-slate-300">
	<Heading title="Asmaul Husna" />

	<div class="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-3 lg:grid-cols-4 mt-10">
		{#each goodNames as name}
			<div id="asmaul-husna" class="shadow-xl p-5 rounded-xl dark:bg-slate-800">
				<h2 class="arab-font text-3xl md:text-4xl text-right mb-6">{name.arab}</h2>
				<p class="text-xs text-gray-500">{name.latin}</p>
				<p class="text-xs">{name.arti}</p>
			</div>
		{/each}
	</div>
</section>
