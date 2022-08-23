<script>
    import Ayat from "../../../components/Ayat.svelte";

    export let data;
    const surah = data.surah;
</script>

<svelte:head>
    <title>Surah {surah.nama_latin} | Quranible</title>
</svelte:head>

<section id="surah">
    {#if surah.nomor != 1 }
        <h1 class="text-center text-4xl md:text-5xl mb-14 md:mb-20 arab-font">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h1>
    {/if}
    {#each surah.ayat as ayat }
        <Ayat {ayat} {surah} />
    {/each}
</section>