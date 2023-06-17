<script lang="ts">
	// TODO: Rewrite this. It's terrible
	import {
		Button,
		Modal,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	import { addEnhancement, removeEnhancement, roster } from '../data/store';

	type FilteredEnhancment = Enhancement & {
		reason?: string;
	};

	export let unit: Unit;
	export let enhancements: Enhancement[];
	let filteredEnhancments: {
		assigned: FilteredEnhancment[];
		available: FilteredEnhancment[];
		unavailable: FilteredEnhancment[];
	} = {
		assigned: [],
		available: [],
		unavailable: []
	};

	let modalOpen = false;

	let summary: globalThis.Roster;

	roster.subscribe((value) => {
		summary = value;
		filteredEnhancments = filterEnhancements(value);
	});

	function filterEnhancements(data: globalThis.Roster) {
		if (data.enhancements.some((enhancment) => enhancment.unitId === unit.id)) {
			const existingEnhancement = data.enhancements.find(
				(enhancment) => enhancment.unitId === unit.id
			);

			if (!existingEnhancement) return { assigned: [], available: [], unavailable: [] };
			return {
				assigned: enhancements.filter(
					(enhancement) => enhancement.name === existingEnhancement.name
				),
				available: [],
				unavailable: enhancements
					.filter((enhancement) => enhancement.name !== existingEnhancement.name)
					.map((enhancement) => ({
						...enhancement,
						reason: 'Unit already has an enhancement'
					}))
			};
		}

		const checkedEnhancements = enhancements.map((enhancement) => {
			const missingKeywords = enhancement.requiredKeywords.filter(
				(keyword) => !unit.keywords.includes(keyword)
			);

			if (missingKeywords.length > 0) {
				return {
					...enhancement,
					reason: `Unit is missing keywords: ${missingKeywords.join(', ')}`
				};
			}

			if (data.enhancements.some((e) => e.name === enhancement.name)) {
				return {
					...enhancement,
					reason: 'Roster already has this enhancement'
				};
			}

			if (data.enhancements.length >= 3) {
				return {
					...enhancement,
					reason: 'Roster already has 3 enhancements'
				};
			}

			return {
				...enhancement,
				reason: ''
			};
		});

		return {
			assigned: [],
			available: checkedEnhancements.filter((enhancement) => !enhancement.reason),
			unavailable: checkedEnhancements.filter((enhancement) => !!enhancement.reason)
		};
	}
</script>

<div>
	<Button on:click={() => (modalOpen = true)} color="blue">Add enhancements</Button>
</div>

<Modal bind:open={modalOpen} outsideclose>
	{#if filteredEnhancments.assigned.length > 0}
		<h1>Assigned enhancements</h1>
		<Table>
			<TableHead>
				<TableHeadCell>Name</TableHeadCell>
				<TableHeadCell>Cost</TableHeadCell>
				<TableHeadCell>Action</TableHeadCell>
			</TableHead>
			<TableBody>
				{#each filteredEnhancments.assigned as enhancement}
					<TableBodyRow>
						<TableBodyCell>{enhancement.name}</TableBodyCell>
						<TableBodyCell>{enhancement.cost}</TableBodyCell>
						<TableBodyCell
							><Button
								on:click={() => {
									removeEnhancement(unit.id);
									modalOpen = false;
								}}
								color="red">-</Button
							></TableBodyCell
						>
					</TableBodyRow>
				{/each}
			</TableBody>
		</Table>
	{/if}

	{#if filteredEnhancments.assigned.length === 0}
		<h1>Available enhancements</h1>
		<Table>
			<TableHead>
				<TableHeadCell>Name</TableHeadCell>
				<TableHeadCell>Cost</TableHeadCell>
				<TableHeadCell>Action</TableHeadCell>
			</TableHead>
			<TableBody>
				{#each filteredEnhancments.available as enhancement}
					<TableBodyRow>
						<TableBodyCell>{enhancement.name}</TableBodyCell>
						<TableBodyCell>{enhancement.cost}</TableBodyCell>
						<TableBodyCell
							><Button
								on:click={() => {
									addEnhancement(enhancement, unit.id);
									modalOpen = false;
								}}
								color="green">+</Button
							></TableBodyCell
						>
					</TableBodyRow>
				{/each}
			</TableBody>
		</Table>
	{/if}
	<h1>Unavailable enhancements</h1>
	<Table>
		<TableHead>
			<TableHeadCell>Name</TableHeadCell>
			<TableHeadCell>Cost</TableHeadCell>
			<TableHeadCell>Reason</TableHeadCell>
		</TableHead>
		<TableBody>
			{#each filteredEnhancments.unavailable as enhancement}
				<TableBodyRow>
					<TableBodyCell>{enhancement.name}</TableBodyCell>
					<TableBodyCell>{enhancement.cost}</TableBodyCell>
					<TableBodyCell>{enhancement.reason}</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
</Modal>
