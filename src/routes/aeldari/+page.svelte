<script lang="ts">
	import { Alert } from 'flowbite-svelte';
	import { aeldari } from '../../data/aeldari/army';
	import ArmyBuilder from '../../components/army-builder.svelte';
</script>

<svelte:head>
	<title>Aeldari</title>
</svelte:head>

<div class="container mx-auto">
	<Alert color="red">
		This is currently very much a work in progress. It's not even close to being finished. Ynnari +
		Drukhari is not yet implemented. Furthermore no additional checks are made for legality of the
		list. Please double check the rules :)
	</Alert>
</div>

<ArmyBuilder army={aeldari} />
```
