<script>
	import List from '$components/List.svelte';
	import Seo from '$components/SEO.svelte';

	export let data;
	let intention = data.intention;
	let otherIntentions = data.otherIntentions;

	$: {
		intention = data.intention;
		otherIntentions = data.otherIntentions;
	}
</script>

<Seo title="{intention.name} | Quranible" />

<section class="dark:text-slate-300">
	<h1 class="text-2xl md:text-3xl font-bold mb-10 capitalize">{intention.name}</h1>
	<p class="text-3xl md:text-4xl arab-font text-right mb-10 leading-extra">{intention.arab}</p>
	<p class="text-gray-500 text-sm mb-2">{intention.latin}</p>
	<p>{intention.means}</p>

	<div class="flex items-center mb-5 mt-14">
		<h2 class="text-2xl font-semibold">Doa Harian Lainnya</h2>
		<div class="w-full h-0.5 bg-gray-300 flex-1 ml-3" />
	</div>
	{#each otherIntentions as intention, index}
		<List url="/niat-sholat/{intention.id}" name={intention.name} {index} />
	{/each}
</section>
