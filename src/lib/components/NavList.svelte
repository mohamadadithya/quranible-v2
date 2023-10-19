<script>
	import Icon from '@iconify/svelte';

	export let icon, url, name;
</script>

<li class="border-b-2 border-slate-600 dark:border-slate-500 py-5">
	<a class="flex items-center gap-2" href={url} title={name} on:click>
		<Icon class="text-3xl" {icon} />
		{name}
	</a>
</li>
