import { writable } from "svelte-local-storage-store";

export let themeChoice = writable('theme', 'light');
export let transliterationChoice = writable('transliteration', 1);
export let autoScrollChoice = writable('auto-scroll', 1);