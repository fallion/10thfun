<script lang="ts">
	import { TabItem, Tabs } from 'flowbite-svelte';
	import Points from './points.svelte';
	import Roster from './roster.svelte';
	import Summary from './summary.svelte';
	import Sync from './sync.svelte';
	import Details from './details.svelte';

	export let army: Army;
	let visibleTab = 'builder';
	let tabs = ['builder', 'details'];

	function changeTab(tab: string) {
		if (!tabs.includes(tab)) {
			return;
		}
		visibleTab = tab;
	}
</script>

<Sync armyName={army.name} />

<div class="container mx-auto">
	<Points />
</div>

<Tabs>
	<TabItem open={visibleTab === 'builder'} title="Builder">
		<div class="container mx-auto grid grid-cols-2 gap-2">
			<div><Roster {army} /></div>

			<div><Summary enhancements={army.enhancements} /></div>
		</div>
	</TabItem>
	<TabItem open={visibleTab === 'details'} title="Details">
		<Details />
	</TabItem>
</Tabs>
