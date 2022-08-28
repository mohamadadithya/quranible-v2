<script>
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
			url: '/niat-sholat',
			name: 'Niat Sholat',
			icon: 'fa-pray'
		},
		{
			url: '/asmaul-husna',
			name: 'Asmaul Husna',
			icon: 'fa-signature'
		},
		{
			url: '/tentang',
			name: 'Tentang',
			icon: 'fa-info-circle'
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
					class="text-xl mr-2"
					aria-label="Menu"
					title="Menu"
					on:click={() => (isOpen = !isOpen)}
				>
					<i class="far fa-fw fa-bars" />
				</button>
				<a
					sveltekit:prefetch
					href="/"
					title="Quranible"
					aria-label="Logo"
					class="text-2xl font-bold">Quranible</a
				>
			</li>
			<li>
				<a
					sveltekit:prefetch
					href="/penanda-surah"
					role="button"
					aria-label="Bookmarks"
					class="text-xl"
					title="Penanda Surah"
				>
					<i class="far fa-fw fa-bookmark" />
				</a>
				<a
					sveltekit:prefetch
					href="/pengaturan"
					role="button"
					aria-label="Settings"
					class="text-xl"
					title="Pengaturan"
				>
					<i class="far fa-fw fa-cog" />
				</a>
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
						<NavList
							on:click={() => (isOpen = false)}
							name={link.name}
							url={link.url}
							icon={link.icon}
						/>
					{/each}
					<li class="border-b-2 border-slate-600 py-5">
						<a href="https://saweria.co/mohamadadithya" target="_blank" title="Donasi"
							><i class="far fa-fw fa-donate" /> Donasi</a
						>
					</li>
				</ul>
			</div>
			<p class="text-xs mb-6">
				&copy; 2022 <a href="https://m-adithya.my.id" aria-label="Web's author" title="Author"
					>Mohamad Adithya</a
				>
			</p>
		</nav>
	</div>
</header>
