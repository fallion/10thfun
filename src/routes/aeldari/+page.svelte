<script lang="ts">
	import { Alert } from 'flowbite-svelte';
	import Points from '../../components/points.svelte';
	import Roster from '../../components/roster.svelte';
	import Summary from '../../components/summary.svelte';
	import { aeldari } from '../../data/aeldari/army';
</script>

<div class="container mx-auto">
	<Alert color="red">
		This is currently very much a work in progress. It's not even close to being finished. Ynnari +
		Drukhari is not yet implemented. Furthermore no additional checks are made for legality of the
		list. Please double check the rules :)
	</Alert>
</div>

<div class="container mx-auto">
	<Points />
</div>

<div class="container mx-auto grid grid-cols-2 gap-2">
	<div><Roster army={aeldari} /></div>

	<div><Summary /></div>
</div>
