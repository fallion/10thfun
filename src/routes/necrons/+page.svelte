<script lang="ts">
	import { Alert } from 'flowbite-svelte';
	import ArmyBuilder from '../../components/army-builder.svelte';
	import { necrons } from '../../data/necrons/army';
</script>

<svelte:head>
	<title>Necrons</title>
</svelte:head>

<ArmyBuilder army={necrons} />
