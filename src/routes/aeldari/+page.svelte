<script lang="ts">
	import { Alert } from 'flowbite-svelte';
	import { aeldari } from '../../data/aeldari/army';
	import ArmyBuilder from '../../components/army-builder.svelte';
</script>

<svelte:head>
	<title>Aeldari</title>
</svelte:head>

<ArmyBuilder army={aeldari} />
