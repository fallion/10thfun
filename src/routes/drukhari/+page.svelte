<script lang="ts">
	import { Alert } from 'flowbite-svelte';
	import ArmyBuilder from '../../components/army-builder.svelte';
	import { drukhari } from '../../data/drukhari/army';
</script>

<svelte:head>
	<title>Drukhari</title>
</svelte:head>

<div class="container mx-auto">
	<Alert color="red">This is currently very much a work in progress.</Alert>
</div>

<ArmyBuilder army={drukhari} />
