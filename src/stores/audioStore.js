import { writable } from "svelte/store";

export let audioSource = writable(''), isPlaying = writable(false), id = writable(1);