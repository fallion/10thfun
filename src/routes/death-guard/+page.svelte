<script lang="ts">
	import { Alert } from 'flowbite-svelte';
	import ArmyBuilder from '../../components/army-builder.svelte';
	import { deathGuard } from '../../data/death-guard/army';
</script>

<svelte:head>
	<title>Death Guard</title>
</svelte:head>

<ArmyBuilder army={deathGuard} />
