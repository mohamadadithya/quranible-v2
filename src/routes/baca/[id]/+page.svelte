<script>
    import Ayat from "../../../components/Ayat.svelte";
    import { audioSource, isPlaying, id } from '../../../stores/audioStore';

    export let data;
    const surah = data.surah;
    let audio;
    
    const playSurah = async (source, verseId) => {
        await id.set(verseId);
        if(verseId == $id) {
            await audioSource.set(source);
            audio.paused ? audio.play() : audio.pause();
			audio.paused ? isPlaying.set(false) : isPlaying.set(true);
        }
    }
</script>

<svelte:head>
    <title>Surah {surah.name} | Quranible</title>
</svelte:head>

<section id="surah">
    {#if surah.nomor != 1 }
        <h1 class="text-center text-4xl md:text-5xl mb-14 md:mb-20 arab-font">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h1>
    {/if}
    {#each surah.ayahs as ayah }
        <Ayat {ayah} on:click={() => playSurah(ayah.audio, ayah.verseId)} />
    {/each}
    <audio bind:this={audio} src={$audioSource}></audio>
</section>