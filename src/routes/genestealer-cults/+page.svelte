<script lang="ts">
	import { Alert } from 'flowbite-svelte';
	import ArmyBuilder from '../../components/army-builder.svelte';
	import { genestealerCults } from '../../data/generstealer-cults/army';
</script>

<svelte:head>
	<title>Genestealer Cults</title>
</svelte:head>

<div class="container mx-auto">
	<Alert color="red">This is currently very much a work in progress.</Alert>
</div>

<ArmyBuilder army={genestealerCults} />
