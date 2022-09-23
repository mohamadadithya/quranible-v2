<script>
	import { loading } from './../stores/loadingStore.js';
	import { themeChoice } from './../stores/SettingStore.js';
	import '../app.css';
	import '../fonts.css';
	import Navbar from '../components/Navbar.svelte';
	import Loader from '../components/Loader.svelte';
	import { navigating } from '$app/stores';
	import { onMount } from 'svelte';
	import { partytownSnippet } from '@builder.io/partytown/integration';
	let scriptEl;

	onMount(() => {
		if(scriptEl) {
			scriptEl.textContent = partytownSnippet()
		}
	})

	$: $loading = !!$navigating;
</script>

<svelte:head>
	<link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro-v6@18657a9/css/all.min.css" rel="stylesheet" type="text/css" />
	<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap">
	<link rel="DNS-prefetch" href="//fonts.googleapis.com"/>
	<link rel="stylesheet" media="print" onload="this.onload=null;this.removeAttribute('media');" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap">
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
	<noscript>
		<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap">
	</noscript>
	<script>
		partytown = {
			forward: ['dataLayer.push'],
			resolveUrl: (url) => {
				const siteUrl = 'https://quranible-v2.vercel.app/proxytown';
				if(url.hostname === 'www.googletagmanager.com') {
					const proxyUrl = new URL(`${siteUrl}/gtm`)
					const gtmId = new URL(url).searchParams.get('id')
        			gtmId && proxyUrl.searchParams.append('id', gtmId)
					return proxyUrl
				} else if(url.hostname === 'www.google-analytics.com') {
					const proxyUrl = new URL(`${siteUrl}/ga`)
        			return proxyUrl
				}
				return url
			}
		}
	</script>
	<script bind:this={scriptEl}></script>
	<!-- GTM Script + Config -->
	<script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-W6TYYSP7NT"></script>
	<script type="text/partytown">
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'G-W6TYYSP7NT', {
			page_path: window.location.pathname
		});
	</script>
</svelte:head>

<main class="font-poppins {$themeChoice}">
	<Navbar />
	<div
		class="accent-slate-800 dark:accent-slate-700 md:px-5 lg:px-24 px-5 pt-24 pb-10 text-slate-800 bg-slate-100 dark:bg-slate-900"
	>
		<slot />
	</div>
	{#if $loading}
		<Loader />
	{/if}
</main>

<style>
	:global(:root) {
		scroll-padding-top: 80px;
		scroll-behavior: smooth;
	}
</style>
