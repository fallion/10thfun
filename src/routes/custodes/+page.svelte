<script lang="ts">
	import { Alert } from 'flowbite-svelte';
	import Points from '../../components/points.svelte';
	import Roster from '../../components/roster.svelte';
	import Summary from '../../components/summary.svelte';
	import { custodes } from '../../data/custodes/army';
</script>

<div class="container mx-auto">
	<Alert color="red">This is currently very much a work in progress.</Alert>
</div>

<div class="container mx-auto">
	<Points />
</div>

<div class="container mx-auto grid grid-cols-2 gap-2">
	<div><Roster army={custodes} /></div>

	<div><Summary enhancements={custodes.enhancements} /></div>
</div>
