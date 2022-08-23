<script>
    import '../app.css';
    import '../fonts.css';
    import Navbar from '../components/Navbar.svelte';
</script>

<svelte:head>
    <link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css" rel="stylesheet" type="text/css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<Navbar />
<main class="font-poppins container mx-auto md:px-5 lg:px-20 px-5 pt-24 text-slate-800 bg-slate-100">
    <slot />
</main>

<style>
    :global(body) {
        background: #F1F5F9;
    }
</style>