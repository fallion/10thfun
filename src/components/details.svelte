<script lang="ts">
	import { Doughnut } from 'svelte-chartjs';
	import { roster, selectSize } from '../data/store';

	import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';
	import { Heading, Li, List, P } from 'flowbite-svelte';

	let army: Roster;

	roster.subscribe((value) => {
		army = value;
	});

	const interestingRoles = ['Character', 'Infantry', 'Vehicle', 'Monster'];

	function roleBreakdown() {
		const breakdown = {
			Character: 0,
			Infantry: 0,
			Vehicle: 0,
			Monster: 0
		};

		army.units.forEach((unit) => {
			if (unit.keywords.includes('Character')) {
				breakdown['Character'] += unit.selectedCost;
				return;
			} else if (unit.keywords.includes('Infantry')) {
				breakdown['Infantry'] += unit.selectedCost;
			} else if (unit.keywords.includes('Vehicle')) {
				breakdown['Vehicle'] += unit.selectedCost;
			} else if (unit.keywords.includes('Monster')) {
				breakdown['Monster'] += unit.selectedCost;
			}
		});

		return {
			labels: Object.keys(breakdown),
			datasets: [
				{
					data: [
						breakdown['Character'],
						breakdown['Infantry'],
						breakdown['Vehicle'],
						breakdown['Monster']
					],
					backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360', '#AC64AD'],
					hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774', '#DA92DB']
				}
			]
		};
	}

	ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
</script>

<div class="container columns-2">
	<div><Doughnut data={roleBreakdown()} options={{ responsive: true }} /></div>
	<div>
		<Heading>Army List</Heading>
		<List tag="ul" class="space-y-1" list="none">
			{#each army.units as unit}
				<Li
					><P
						><span class="font-bold">{unit.name}</span>
						{army.enhancements.find((e) => e.unitId === unit.id)?.name || ''} - ({unit.selectedModelCount}
						model
						{unit.selectedCost +
							(army.enhancements.find((e) => e.unitId === unit.id)?.cost || 0)}pts)</P
					></Li
				>
			{/each}
		</List>
	</div>
</div>
