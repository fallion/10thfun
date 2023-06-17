<script lang="ts">
	import Points from './points.svelte';
	import Roster from './roster.svelte';
	import Summary from './summary.svelte';

	export let army: Army;
</script>

<div class="container mx-auto">
	<Points />
</div>

<div class="container mx-auto grid grid-cols-2 gap-2">
	<div><Roster {army} /></div>

	<div><Summary enhancements={army.enhancements} /></div>
</div>
