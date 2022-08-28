<script>
	import Heading from '../../components/Heading.svelte';
	import Seo from '../../components/SEO.svelte';
</script>

<Seo title="Pengaturan | Quranible" />

<section>
	<Heading title="Pengaturan" />
	<h5 class="mb-4 text-xl font-medium mt-8">Pilihan Tema</h5>
	<div id="themes" class="flex flex-wrap items-center mb-8">
		<label
			for="light-theme"
			class="flex items-center mb-4 md:mb-0 mr-3 bg-slate-300 px-4 py-2 rounded-3xl"
		>
			<div class="h-5 w-5 rounded-full bg-slate-100 border-2 border-white mr-2" />
			Terang
		</label>
		<label for="light-theme" class="flex items-center mb-4 md:mb-0 mr-3 px-4 py-2">
			<div class="h-5 w-5 rounded-full bg-slate-800 border-2 border-slate-500 mr-2" />
			Gelap
		</label>
		<label for="light-theme" class="flex items-center mb-4 md:mb-0 mr-3 px-4 py-2">
			<div class="h-5 w-5 rounded-full bg-yellow-500 border-2 border-yellow-600 mr-2" />
			Sepia
		</label>
		<label for="light-theme" class="flex items-center mb-4 md:mb-0 mr-3 px-4 py-2">
			<div class="h-5 w-5 rounded-full bg-pink-500 border-2 border-pink-200 mr-2" />
			Feminis
		</label>
	</div>
	<h5 class="mb-4 text-xl font-medium">Tampilkan Ayat Latin</h5>
	<div id="latin-radios">
		<label for="yes" class="mr-3">
			<input type="radio" name="latin" id="yes" class="mr-1" checked />
			Ya
		</label>
		<label for="no">
			<input type="radio" name="latin" id="no" class="mr-1" />
			Tidak
		</label>
	</div>
	<h5 class="mb-4 text-xl font-medium mt-8">Otomatis Scroll Audio</h5>
	<div id="auto-scroll-radios">
		<label for="yes" class="mr-3">
			<input type="radio" name="auto_scroll" id="yes" class="mr-1" checked />
			Ya
		</label>
		<label for="no">
			<input type="radio" name="auto_scroll" id="no" class="mr-1" />
			Tidak
		</label>
	</div>
</section>

<style>
	label {
		cursor: pointer;
	}
</style>
