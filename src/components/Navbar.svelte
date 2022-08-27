<script>
	import { ayahs } from '../stores/surahStore';
	import NavList from './NavList.svelte';

	let isOpen = false;
	const links = [
		{
			url: '/',
			name: 'Al-Quran',
			icon: 'fa-book'
		},
		{
			url: '/doa-harian',
			name: 'Doa Harian',
			icon: 'fa-newspaper'
		},
		{
			url: '/niat-niat-sholat',
			name: 'Niat-Niat Sholat',
			icon: 'fa-pray'
		},
		{
			url: '/tentang',
			name: 'Tentang',
			icon: 'fa-info-circle'
		},
		{
			url: 'https://saweria.com',
			name: 'Donasi',
			icon: 'fa-donate'
		}
	];
</script>

<header
	class="py-4 bg-slate-800 text-white font-poppins fixed transition-all duration-500 w-full z-10"
>
	<div class="px-5">
		<ul class="flex justify-between items-center">
			<li>
				<button
					type="button"
					class="text-xl"
					aria-label="Menu"
					title="Menu"
					on:click={() => (isOpen = !isOpen)}
				>
					<i class="far fa-fw fa-bars" />
				</button>
			</li>
			<li>
				<a href="/" title="Quranible" aria-label="Quranible's logo" class="text-2xl font-bold"
					>Quranible</a
				>
			</li>
			<li>
				<button type="button" aria-label="Settings" class="text-xl" title="Settings">
					<i class="far fa-fw fa-cog" />
				</button>
			</li>
		</ul>
		<nav
			class="h-screen w-3/4 md:w-1/4 py-10 fixed bg-slate-800 left-0 container mx-auto px-5 -translate-x-full opacity-0 transition-all duration-500 {isOpen
				? 'translate-x-0 opacity-100'
				: ''} flex flex-col justify-between"
		>
			<div>
				<div class="mb-4 font-semibold text-xl flex items-center">
					<p>Menu</p>
					<div class="h-0.5 bg-slate-600 w-full ml-3" />
				</div>
				<ul>
					{#each links as link}
						<NavList name={link.name} url={link.url} icon={link.icon} />
					{/each}
				</ul>
			</div>
			<p class="text-xs mb-6">
				&copy; 2022 <a href="https://m-adithya.my.id" aria-label="Web's author" title="Author"
					>Mohamad Adithya</a
				>
			</p>
		</nav>
	</div>
	<a href="/" class="absolute p-2 md:p-3 text-center bg-slate-200 -bottom-10 md:-bottom-12 text-slate-800 left-0">Terakhir dibaca ayat</a>
</header>
