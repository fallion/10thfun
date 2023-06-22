<script lang="ts">
	import { Alert } from 'flowbite-svelte';
	import ArmyBuilder from '../../components/army-builder.svelte';
	import { greyKnights } from '../../data/grey-knights/army';
</script>

<svelte:head>
	<title>Grey Knights</title>
</svelte:head>

<ArmyBuilder army={greyKnights} />
