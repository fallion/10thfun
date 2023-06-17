<script lang="ts">
	import { Progressbar } from 'flowbite-svelte';
	import { roster } from '../data/store';

	let points = 0;
	let percentage = 0;
	let maxPoints = 2000;

	roster.subscribe((value) => {
		let total = 0;
		value.units.forEach((unit) => {
			total += unit.selectedCost;
		});
		value.enhancements.forEach((enhancement) => {
			total += enhancement.cost;
		});

		points = total;

		percentage = (points / maxPoints) * 100;

		console.log({
			points,
			percentage,
			maxPoints
		});
	});
</script>

<div class="my-4">
	<Progressbar
		progress={`${percentage}`}
		labelOutside={`${points} / ${maxPoints} pts`}
		size="h-2.5"
		color={points > maxPoints ? 'red' : 'blue'}
	/>
</div>
