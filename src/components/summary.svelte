<script lang="ts">
	import {
		Table,
		TableHead,
		TableHeadCell,
		TableBody,
		TableBodyRow,
		TableBodyCell,
		Button,
		ButtonGroup,
		Popover
	} from 'flowbite-svelte';
	import { removeUnit, roster, selectSize } from '../data/store';
	import Enhancements from './enhancements.svelte';

	let summary: globalThis.Roster;
	export let enhancements: Enhancement[];

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
					<TableBodyCell
						><div>{unit.name}</div>
						{#if summary.enhancements.length > 0 && summary.enhancements.some((e) => e.unitId === unit.id)}
							<div class="text-xs text-gray-500">
								{summary.enhancements.find((e) => e.unitId === unit.id)?.name}
							</div>
						{/if}</TableBodyCell
					>
					<TableBodyCell>
						<div class="max-w-xs">
							<ButtonGroup size="xs"
								>{#each unit.costs as cost}
									<Button
										size="xs"
										color={cost[1] === unit.selectedCost ? 'blue' : 'alternative'}
										on:click={() => selectSize(unit.id, cost[0], cost[1])}
										id={`unit-${unit.id}-size-${cost[0]}`}
										>{cost[0]}
										{#if cost[1] === unit.selectedCost}({`${cost[1]} pts`}}{/if}</Button
									>
								{/each}</ButtonGroup
							>
							{#each unit.costs as cost}
								<Popover triggeredBy={`#unit-${unit.id}-size-${cost[0]}`}>{cost[1]} pts</Popover>
							{/each}
						</div>
						<div class="mt-2">
							<ButtonGroup>
								{#if unit.keywords.includes('Character') && !unit.keywords.includes('Epic Hero')}
									<Enhancements {unit} {enhancements} />
								{/if}
							</ButtonGroup>
						</div>
					</TableBodyCell>
					<TableBodyCell
						><Button size="xs" color="red" on:click={() => removeUnit(unit.id)}>-</Button
						></TableBodyCell
					>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
</div>
