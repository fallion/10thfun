<script lang="ts">
	import ArmyBuilder from '../../components/army-builder.svelte';
	import { tyranids } from '../../data/tyranids/army';
</script>

<svelte:head>
	<title>Tyranids</title>
</svelte:head>

<ArmyBuilder army={tyranids} />
