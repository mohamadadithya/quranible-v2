<script>
	let isOpen = false;
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
				: ''}"
		>
			<ul>
				<li class="mb-4 font-semibold text-xl flex items-center">
					<p>Menu</p>
					<div class="h-0.5 bg-slate-600 w-full ml-3" />
				</li>
				<li class="border-b-2 border-slate-600 py-5">
					<a href="/"><i class="far fa-fw fa-book" /> Al-Quran</a>
				</li>
				<li class="border-b-2 border-slate-600 py-5">
					<a href="/"><i class="far fa-fw fa-newspaper" /> Doa Harian</a>
				</li>
				<li class="border-b-2 border-slate-600 py-5">
					<a href="/"><i class="far fa-fw fa-pray" /> Niat-Niat Sholat</a>
				</li>
				<li class="border-b-2 border-slate-600 py-5">
					<a href="/"><i class="far fa-fw fa-info-circle" /> Tentang</a>
				</li>
				<li class="border-b-2 border-slate-600 py-5">
					<a href="/"><i class="far fa-fw fa-donate" /> Donasi</a>
				</li>
				<li class="mt-5 text-xs">
					<p>
						&copy; 2022 <a href="https://m-adithya.my.id" aria-label="Web's author" title="Author"
							>Mohamad Adithya</a
						>
					</p>
				</li>
			</ul>
		</nav>
	</div>
</header>
