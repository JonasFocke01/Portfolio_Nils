import { writable } from 'svelte/store';

export interface Track {
	title: string;
	path: string;
	playing: boolean;
	level: number;
	progress: number;
}

export const leftTrack = writable<Track>({
	title: '',
	path: '',
	playing: false,
	level: 0,
	progress: 0
});

export const rightTrack = writable<Track>({
	title: '',
	path: '',
	playing: false,
	level: 0,
	progress: 0
});