<script>
	export let icon, url, name;
</script>

<li class="border-b-2 border-slate-600 py-5">
	<a sveltekit:prefetch href={url} title={name} on:click><i class="far fa-fw {icon}" /> {name}</a>
</li>
