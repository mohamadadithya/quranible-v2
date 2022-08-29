<script>
	import Heading from '../../components/Heading.svelte';
	import Seo from '../../components/SEO.svelte';
	import { themeChoice } from '../../stores/SettingStore';

	let themeValue = $themeChoice;

	const themes = [
		{
			name: 'Terang',
			value: 'light',
			bgColor: 'bg-slate-100',
			borderColor: 'border-white'
		},
		{
			name: 'Gelap',
			value: 'dark',
			bgColor: 'bg-slate-800',
			borderColor: 'border-slate-500'
		},
		{
			name: 'Sepia',
			value: 'sepia',
			bgColor: 'bg-yellow-500',
			borderColor: 'border-yellow-600'
		},
		{
			name: 'Feminis',
			value: 'feminist',
			bgColor: 'bg-pink-500',
			borderColor: 'border-pink-200'
		}
	];
</script>

<Seo title="Pengaturan | Quranible" />

<section>
	<Heading title="Pengaturan" />
	<h5 class="mb-4 text-xl font-medium mt-8">Pilihan Tema</h5>
	<div id="themes" class="flex flex-wrap items-center mb-8">
		{#each themes as theme }
		<label
			for="{theme.value}-theme"
			on:click={() => themeChoice.set(theme.value)}
			class="flex items-center mb-4 md:mb-0 mr-3 {theme.value == themeValue ? 'bg-slate-300' : ''} px-4 py-2 rounded-3xl"
		>
			<div class="h-5 w-5 rounded-full {theme.bgColor} border-2 {theme.borderColor} mr-2" />
			{theme.name}
			<input type="radio" class="hidden" name="theme" id="{theme.value}-theme" value={theme.value} bind:group={themeValue}>
		</label>
		{/each}
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
