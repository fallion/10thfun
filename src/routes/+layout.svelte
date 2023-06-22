<script>
	import { navigating } from '$app/stores';
	import { Spinner } from 'flowbite-svelte';
	import '../app.postcss';
	import Banner from '../components/banner.svelte';
	import Navbar from '../components/navbar.svelte';
</script>

<Navbar />

<Banner />
<div class="container mx-auto">
	{#if $navigating}
		<div class="text-center">
			<Spinner />
		</div>
	{:else}
		<slot />
	{/if}
</div>
