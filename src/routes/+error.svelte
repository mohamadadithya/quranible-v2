<script>
    import { page } from '$app/stores';
    import Seo from '../components/SEO.svelte';
    const error = $page
</script>

<Seo title="Error {error.status} | Quranible" />

<section class="text-center">
        <div>
            <h1 class="text-3xl font-bold mb-3">Error {error.status}</h1>
            {#if error.status == 404 }
                <p>Halaman Tidak ditemukan</p>
            {:else if error.status == 500}
                <p>Sepertinya terdapat kesalahan di sisi server</p>
            {/if}
        </div>
</section>