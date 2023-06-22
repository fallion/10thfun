<script>
	import '../app.postcss';
	import Banner from '../components/banner.svelte';
	import Navbar from '../components/navbar.svelte';
</script>

<Navbar />

<Banner />
<div class="container mx-auto">
	<slot />
</div>
