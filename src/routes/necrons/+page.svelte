<script lang="ts">
	import { Alert } from 'flowbite-svelte';
	import ArmyBuilder from '../../components/army-builder.svelte';
	import { necrons } from '../../data/necrons/army';
</script>

<svelte:head>
	<title>Necrons</title>
</svelte:head>

<div class="container mx-auto">
	<Alert color="red">This is currently very much a work in progress.</Alert>
</div>

<ArmyBuilder army={necrons} />
