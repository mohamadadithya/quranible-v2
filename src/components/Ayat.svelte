<script>
    import { isPlaying, id } from "../stores/audioStore";

    export let ayah;
</script>

<div id="ayat" class="py-8 mb-10 border-b-2 border-gray-300">
    <h3 class="text-3xl md:text-4xl mb-14 text-right arab-font">{ayah.ayahText}</h3>
    <p class="text-sm mb-2">{ayah.verseId}. {ayah.readText}</p>
    <p class="text-gray-500">{ayah.indoText}</p>
    <div id="actions" class="flex items-center mt-5 text-xl">
        <button type="button" on:click class="mr-2"><i class="far fa-fw fa-{$isPlaying && $id == ayah.verseId ? 'pause' : 'play'}" title="Mainkan"></i></button>
        <button type="button"><i class="far fa-fw fa-bookmark" title="Simpan"></i></button>
    </div>
</div>

<style>
    h3 {
        line-height: 2.5;
    }
</style>