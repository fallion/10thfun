<script lang="ts">
	import {
		Table,
		TableHead,
		TableHeadCell,
		TableBody,
		TableBodyRow,
		TableBodyCell,
		Button,
		ButtonGroup
	} from 'flowbite-svelte';
	import { addUnit, removeUnit, roster, selectSize } from '../data/store';

	let summary: globalThis.Roster;

	roster.subscribe((value) => {
		summary = value;
	});
</script>

<div>
	<Table striped={true} hoverable={true} shadow>
		<TableHead>
			<TableHeadCell>Name</TableHeadCell>
			<TableHeadCell>Select size</TableHeadCell>
			<TableHeadCell>Remove</TableHeadCell>
		</TableHead>
		<TableBody>
			{#each summary.units as unit}
				<TableBodyRow>
					<TableBodyCell>{unit.name}</TableBodyCell>
					<TableBodyCell
						><ButtonGroup
							>{#each unit.costs as cost}
								<Button
									color={cost[1] === unit.selectedCost ? 'blue' : 'alternative'}
									on:click={() => selectSize(unit.id, cost[0], cost[1])}
									>{cost[0]} ({cost[1]} pts)</Button
								>
							{/each}</ButtonGroup
						></TableBodyCell
					>
					<TableBodyCell
						><Button size="xs" color="red" on:click={() => removeUnit(unit.id)}>-</Button
						></TableBodyCell
					>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
</div>
