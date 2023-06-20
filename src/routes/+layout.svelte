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
		<NavLi href="/drukhari">Drukhari</NavLi>
		<NavLi href="/custodes">Custodes</NavLi>
		<NavLi href="/death-guard">Death Guard</NavLi>
		<NavLi href="/grey-knights">Grey Knights</NavLi>
		<NavLi href="/necrons">Necrons</NavLi>
		<NavLi href="https://discordapp.com/users/.fallion">Feedback</NavLi>
		<NavLi href="https://bmc.link/fallion">Buy me a coffee</NavLi>
	</NavUl>
</Navbar>
<div class="container mx-auto">
	<slot />
</div>
