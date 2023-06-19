<script lang="ts">
	import { Alert } from 'flowbite-svelte';
	import ArmyBuilder from '../../components/army-builder.svelte';
	import { greyKnights } from '../../data/grey-knights/army';
</script>

<svelte:head>
	<title>Grey Knights</title>
</svelte:head>

<div class="container mx-auto">
	<Alert color="red">This is currently very much a work in progress.</Alert>
</div>

<ArmyBuilder army={greyKnights} />
