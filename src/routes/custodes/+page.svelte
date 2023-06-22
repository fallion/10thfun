<script lang="ts">
	import { Alert } from 'flowbite-svelte';
	import { custodes } from '../../data/custodes/army';
	import ArmyBuilder from '../../components/army-builder.svelte';
</script>

<svelte:head>
	<title>Custodes</title>
</svelte:head>

<ArmyBuilder army={custodes} />
