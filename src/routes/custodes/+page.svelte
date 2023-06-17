<script lang="ts">
	import { Alert } from 'flowbite-svelte';
	import { custodes } from '../../data/custodes/army';
	import ArmyBuilder from '../../components/army-builder.svelte';
</script>

<svelte:head>
	<title>Custodes</title>
</svelte:head>

<div class="container mx-auto">
	<Alert color="red">This is currently very much a work in progress.</Alert>
</div>

<ArmyBuilder army={custodes} />
