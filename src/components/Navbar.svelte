<script>
    let isOpen = false;
</script>

<header class="py-4 bg-slate-800 text-white font-poppins fixed w-full z-10">
    <div class="px-5">
        <ul class="flex justify-between items-center">
            <li>
                <button type="button" class="text-xl" aria-label="Menu" title="Menu" on:click={() => isOpen = !isOpen}>
                    <i class="far fa-fw fa-bars"></i>
                </button>
            </li>
            <li>
                <a href="/" aria-label="Quranible's logo" class="text-2xl font-bold">Quranible</a>
            </li>
            <li>
                <button type="button" aria-label="Settings" class="text-xl" title="Settings">
                    <i class="far fa-fw fa-cog"></i>
                </button>
            </li>
        </ul>
        <nav class="h-screen w-3/4 md:w-1/5 py-10 fixed bg-slate-800 left-0 container mx-auto px-5 -translate-x-full opacity-0 transition-all duration-500 {isOpen ? 'translate-x-0 opacity-100' : ''}">
            <ul>
                <li class="mb-8 p-6 bg-slate-600 rounded-lg">
                    <h3 class="text-xl mb-3 font-semibold">Menjadi Donatur</h3>
                    <p class="text-sm mb-4">Donasi membantu developer untuk meningkatkan dan mempertahankan aplikasi Al-Quran digital ini.</p>
                    <a href="/" class="text-sm px-5 py-2.5 bg-slate-800 inline-block rounded-md font-semibold">Donasi</a>
                </li>
                <li class="mb-4 font-semibold text-xl flex items-center">
                    <p>Menu</p>
                    <div class="h-0.5 bg-slate-600 w-full ml-3"></div>
                </li>
                <li class="border-b-2 border-slate-600 py-5">
                    <a href="/">Al-Quran</a>
                </li>
                <li class="border-b-2 border-slate-600 py-5">
                    <a href="/">Doa Harian</a>
                </li>
                <li class="border-b-2 border-slate-600 py-5">
                    <a href="/">Waktu Sholat</a>
                </li>
                <li class="border-b-2 border-slate-600 py-5">
                    <a href="/">Niat-Niat Sholat</a>
                </li>
                <li class="border-b-2 border-slate-600 py-5">
                    <a href="/">Tentang</a>
                </li>
                <li class="mt-5 text-xs">
                    <p>&copy; 2022 <a href="https://m-adithya.my.id" aria-label="Web's author" title="Author">Mohamad Adithya</a></p>
                </li>
            </ul>
        </nav>
    </div>
</header>