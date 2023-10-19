<script>
	import Icon from '@iconify/svelte';
	import NavList from '$components/NavList.svelte';

	let isOpen = false;
	const links = [
		{
			url: '/',
			name: 'Al-Quran',
			icon: 'ph:book'
		},
		{
			url: '/doa-harian',
			name: 'Doa Harian',
			icon: 'ph:newspaper'
		},
		{
			url: '/niat-sholat',
			name: 'Niat Sholat',
			icon: 'ph:hands-praying'
		},
		{
			url: '/asmaul-husna',
			name: 'Asmaul Husna',
			icon: 'ph:signature'
		},
		{
			url: '/tentang',
			name: 'Tentang',
			icon: 'ph:info'
		}
	];
</script>

<header
	class="py-4 bg-slate-800 text-white dark:text-slate-300 font-poppins fixed transition-all duration-500 w-full z-10"
>
	<div class="px-5">
		<ul class="flex justify-between items-center">
			<li class="flex items-center gap-1">
				<button
					type="button"
					class="mr-2"
					aria-label="Menu"
					title="Menu"
					on:click={() => (isOpen = !isOpen)}
				>
					<Icon class="text-3xl" icon="ic:round-menu" />
				</button>
				<a
					sveltekit:prefetch
					href="/"
					title="Quranible"
					aria-label="Logo"
					class="text-2xl font-bold">Quranible</a
				>
			</li>
			<li class="flex items-center gap-2">
				<a
					sveltekit:prefetch
					href="/penanda-surah"
					role="button"
					aria-label="Bookmarks"
					class="text-xl"
					title="Penanda Surah"
				>
					<Icon class="text-3xl" icon="ph:bookmark-simple" />
				</a>
				<a
					sveltekit:prefetch
					href="/pengaturan"
					role="button"
					aria-label="Settings"
					class="text-xl"
					title="Pengaturan"
				>
					<Icon class="text-3xl" icon="ep:setting" />
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
					<div class="h-0.5 bg-slate-600 dark:bg-slate-500 w-full ml-3" />
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
						<a
							class="flex items-center gap-2"
							href="https://saweria.co/mohamadadithya"
							target="_blank"
							title="Donasi"
						>
							<Icon class="text-3xl" icon="bx:donate-heart" />
							Donasi
						</a>
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
