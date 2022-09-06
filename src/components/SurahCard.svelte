<script>
	export let surah,
		isHover = true;
</script>

<a
	sveltekit:prefetch
	href="/baca/{surah.number}"
	aria-label="Surah's Card"
	class="bg-white dark:bg-slate-800 shadow-lg p-5 rounded-xl flex items-center {isHover
		? 'hover:scale-105 transition-all duration-300'
		: ''}"
>
	<p class="px-5 py-3 bg-slate-800 dark:bg-slate-700 text-white font-bold rounded-xl mr-4">
		{surah.number}
	</p>
	<div>
		<p class="font-bold text-lg dark:text-slate-300">{surah.name}</p>
		<p class="text-xs text-gray-500 mt-1">
			{surah.translationId} &bullet; {surah.numberOfAyahs} Ayat
		</p>
	</div>
</a>
