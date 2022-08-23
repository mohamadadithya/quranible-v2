<script>
    export let ayat;
    export let surah;
    let audio;
    let isPlay = false;

    const playSurah = () => {
        isPlay = !isPlay;
        if(isPlay) {
            audio.play();
        } else {
            audio.pause();
        }
    }
</script>

<div id="ayat" class="py-8 mb-10 border-b-2 border-gray-300">
    <h3 class="text-3xl md:text-4xl mb-14 text-right arab-font">{ayat.ar}</h3>
    <p class="text-sm mb-2">{ayat.nomor}. {ayat.tr}</p>
    <p class="text-gray-500">{ayat.idn}</p>
    <div id="actions" class="flex items-center mt-5 text-xl">
        <button type="button" on:click={playSurah} class="mr-2"><i class="far fa-fw fa-{isPlay ? 'pause' : 'play'}" title="Mainkan"></i></button>
        <button type="button"><i class="far fa-fw fa-bookmark" title="Simpan"></i></button>
    </div>
</div>
<audio src={ayat.audio} bind:this={audio}></audio>

<style>
    h3 {
        line-height: 2.5;
    }
</style>