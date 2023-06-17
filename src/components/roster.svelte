<script lang="ts">
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		Button
	} from 'flowbite-svelte';
	import { addUnit } from '../data/store';

	export let army: Army;
</script>

<Table striped={true} hoverable={true} shadow>
	<TableHead>
		<TableHeadCell>Name</TableHeadCell>
		<TableHeadCell>Base cost</TableHeadCell>
		<TableHeadCell>Add</TableHeadCell>
	</TableHead>
	<TableBody>
		{#each army.units as unit}
			<TableBodyRow>
				<TableBodyCell>{unit.name}</TableBodyCell>
				<TableBodyCell>{unit.costs[0][1]} ({unit.costs[0][0]} models)</TableBodyCell>
				<TableBodyCell>
					<Button color="blue" on:click={() => addUnit(unit)}>+</Button>
				</TableBodyCell>
			</TableBodyRow>
		{/each}
	</TableBody>
</Table>
