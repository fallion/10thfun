<script lang="ts">
	import { Alert } from 'flowbite-svelte';
	import ArmyBuilder from '../../components/army-builder.svelte';
	import { drukhari } from '../../data/drukhari/army';
</script>

<svelte:head>
	<title>Drukhari</title>
</svelte:head>

<ArmyBuilder army={drukhari} />
