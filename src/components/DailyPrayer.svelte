<script>
    export let prayer, index;
</script>

<a
sveltekit:prefetch
href="/doa-harian/{prayer.id}"
class="md:text-xl text-lg hover:bg-slate-200 py-4 font-medium border-b-2 border-gray-300 block capitalize"
>{index + 1}. {prayer.doa}</a
>