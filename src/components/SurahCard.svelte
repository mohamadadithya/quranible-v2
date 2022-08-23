<script>
    export let surah;
</script>

<a sveltekit:prefetch href="/baca/{surah.nomor}" aria-label="Surah's Card" class="bg-white shadow-lg p-5 rounded-xl flex items-center hover:scale-105 transition-all duration-300">
    <p class="px-5 py-3 bg-slate-800 text-white font-bold rounded-xl mr-4">{surah.nomor}</p>
    <div>
        <a href="/" aria-label="Surah's link" class="font-bold text-lg">{surah.nama_latin}</a>
        <p class="text-xs text-gray-400 mt-1">{surah.arti} &bullet; {surah.jumlah_ayat} Ayat</p>
    </div>
</a>