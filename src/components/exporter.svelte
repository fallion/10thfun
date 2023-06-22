<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import { roster } from '../data/store';

	let army: Roster;
	let CSVDocument = '';

	roster.subscribe((value) => {
		army = value;
		CSVDocument = exportCSV();
	});

	function exportCSV() {
		let CSVContent = 'data:text/csv;charset=utf-8,';

		CSVContent += 'Unit,Models,Cost,Enhancements,Cost,Total Cost\n';

		army.units.forEach((unit) => {
			let enhancementName = '';
			let enhancementCost = 0;
			if (unit.keywords.includes('Character') && !unit.keywords.includes('Epic Hero')) {
				const enhancement = army.enhancements.find((e) => e.unitId === unit.id);
				if (enhancement) {
					enhancementName = enhancement.name;
					enhancementCost = enhancement.cost;
				}
			}

			CSVContent += `${unit.name},${unit.selectedModelCount},${
				unit.selectedCost
			},${enhancementName},${enhancementCost},${unit.selectedCost + enhancementCost}\n`;
		});

		const encodedUri = encodeURI(CSVContent);
		return encodedUri;
	}
</script>

<div class="text-right my-5">
	<Button
		btnClass="plausible-event-name=export"
		color="green"
		href={CSVDocument}
		download={`${army.army}.csv`}>Export</Button
	>
</div>
