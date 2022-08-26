<script>
	export let prayer;
</script>

<div class="p-5 shadow-lg rounded-xl flex flex-col justify-between">
	<div>
		<h2 class="text-xl font-semibold mb-8">{prayer.doa}</h2>
		<p class="text-3xl text-right arab-font mb-5 leading-extra-loose">{prayer.ayat}</p>
	</div>
	<div>
		<p class="text-xs mb-4 text-gray-500">{prayer.latin}</p>
		<p class="text-sm">{prayer.artinya}</p>
	</div>
</div>
