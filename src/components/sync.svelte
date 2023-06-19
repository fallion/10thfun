<script lang="ts">
	import throttle from 'lodash.throttle';
	import { roster } from '../data/store';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	export let armyName: string;
	let state: Roster;
	let firstLoad = true;
	let rosterName = `roster-${armyName}`;

	const sync = throttle(() => {
		const data = JSON.stringify(state);
		if (browser && !firstLoad) {
			localStorage.setItem(rosterName, data);
		}
	}, 1);

	roster.subscribe((value) => {
		state = value;
		if (state.army !== armyName) {
			return;
		}
		sync();
	});

	function loadExisting() {
		console.log('called');
		if (browser) {
			console.log('browser');
			const data = localStorage.getItem(rosterName);
			if (data) {
				const loadedData = JSON.parse(data);
				console.log({ loadedData });
				roster.update(() => {
					return loadedData;
				});
				firstLoad = false;
			} else {
				roster.update(() => {
					return {
						army: armyName,
						units: [],
						enhancements: []
					};
				});
				firstLoad = false;
			}
		}
		return {};
	}

	onMount(() => {
		if (firstLoad) {
			loadExisting();
			firstLoad = false;
		}
	});
</script>
