<script lang="ts">
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Dropdown,
		DropdownItem,
		Chevron
	} from 'flowbite-svelte';

	type PageLink = {
		name: string;
		href: string;
		hidden?: boolean;
	};

	type Category = {
		id: string;
		name: string;
		links: PageLink[];
	};

	const armyLinks: Category[] = [
		{
			name: 'Xenos',
			links: [
				{
					name: 'Aeldari',
					href: '/aeldari'
				},
				{
					name: 'Drukhari',
					href: '/drukhari'
				},
				{
					name: 'Genestealer Cults',
					href: '/genestealer-cults'
				},
				{
					name: 'Necrons',
					href: '/necrons'
				},
				{
					name: 'Orks',
					href: '/orks',
					hidden: true
				},
				{
					name: 'Tau',
					href: '/tau',
					hidden: true
				},
				{
					name: 'Tyranids',
					href: '/tyranids'
				}
			],
			id: 'nav-xenos'
		},
		{
			name: 'Imperium',
			links: [
				{
					name: 'Adeptus Custodes',
					href: '/custodes'
				},
				{
					name: 'Grey Knights',
					href: '/grey-knights'
				}
			],
			id: 'nav-imperium'
		},
		{
			name: 'Chaos',
			links: [
				{
					name: 'Death Guard',
					href: '/death-guard'
				}
			],
			id: 'nav-chaos'
		}
	];
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/" />
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		{#each armyLinks as category}
			<NavLi id={`${category.id}`} class="cursor-pointer"
				><Chevron aligned>{category.name}</Chevron></NavLi
			>
			<Dropdown triggeredBy={`#${category.id}`} class="w-44 z-20">
				{#each category.links as link}
					{#if !link.hidden}
						<DropdownItem><NavLi href={link.href}>{link.name}</NavLi></DropdownItem>
					{/if}
				{/each}
			</Dropdown>
		{/each}
		<NavLi
			href="https://www.reddit.com/r/ArmadaStrategia/comments/14g5p0e/feedback_for_armadastrategia_web_app/"
			>Feedback</NavLi
		>
		<NavLi href="https://bmc.link/fallion">Buy me a coffee</NavLi>
	</NavUl>
</Navbar>
