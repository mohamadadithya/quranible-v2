import { writable } from "svelte-local-storage-store";

export let themeChoice = writable('theme', 'light');