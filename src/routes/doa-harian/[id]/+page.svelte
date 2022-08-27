<script>
    import DailyPrayer from "../../../components/DailyPrayer.svelte";
    import Seo from "../../../components/SEO.svelte";

    export let data;
    let prayer = data.dailyPrayer;
    let otherPrayers = data.otherPrayers;
    
    $: {
        prayer = data.dailyPrayer;
        otherPrayers = data.otherPrayers;
    }
</script>

<Seo title="{prayer.doa} | Quranible" />

<section class="pb-10">
    <h1 class="text-3xl font-bold mb-10 capitalize">{prayer.doa}</h1>
    <p class="text-3xl md:text-4xl arab-font text-right mb-10 leading-extra-loose">{prayer.ayat}</p>
    <p class="text-gray-500 text-sm mb-2">{prayer.latin}</p>
    <p>{prayer.artinya}</p>

    <div class="flex items-center mb-5 mt-14">
        <h2 class="text-2xl font-semibold">Doa Harian Lainnya</h2>
        <div class="w-full h-0.5 bg-gray-300 flex-1 ml-3" />
    </div>
    {#each otherPrayers as prayer, index }
        <DailyPrayer {prayer} {index} />
    {/each}
</section>
