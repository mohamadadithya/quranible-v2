<script>
	export let url, name, index, ayahId;
</script>

<a
	sveltekit:prefetch
	href={url}
	class="hover:bg-slate-200 hover:dark:bg-slate-800 py-4 border-b-2 border-gray-300 dark:border-slate-500 flex items-start dark:text-slate-300"
>
	{#if !ayahId}
		<span class="md:text-xl text-lg mr-2 font-medium">{index + 1}.</span>
	{/if}
	<div class="flex-column">
		<p class="md:text-xl text-lg font-medium block capitalize">{name}</p>
		{#if ayahId}
			<p class="text-xs mt-1 dark:text-slate-500">Terakhir dibaca ayat {ayahId}</p>
		{/if}
	</div>
</a>
