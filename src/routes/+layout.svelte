<script>
	import { themeChoice } from './../stores/SettingStore.js';
	import '../app.css';
	import '../fonts.css';
	import Navbar from '../components/Navbar.svelte';
</script>

<svelte:head>
	<link
		href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css"
		rel="stylesheet"
		type="text/css"
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main class="font-poppins {$themeChoice}">
	<Navbar />
	<div
		class="accent-slate-800 dark:accent-slate-700 md:px-5 lg:px-24 px-5 pt-24 pb-10 text-slate-800 bg-slate-100 dark:bg-slate-900"
	>
		<slot />
	</div>
</main>

<style>
	:global(:root) {
		scroll-padding-top: 80px;
		scroll-behavior: smooth;
	}
</style>
