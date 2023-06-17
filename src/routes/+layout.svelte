<script>
	import '../app.postcss';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/" />
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="/" active={true}>Home</NavLi>
		<NavLi href="/aeldari">Aeldari</NavLi>
		<NavLi href="/custodes">Custodes</NavLi>
	</NavUl>
</Navbar>
<div class="container mx-auto">
	<slot />
</div>
