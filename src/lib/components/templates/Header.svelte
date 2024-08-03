<script lang="ts">
	import indigoLogo from '$lib/assets/images/indigo_logo.svg';
	import { Button } from '$lib/components/ui/button/index.js';
	import Menu from '~icons/gg/menu-grid-r';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { menu } from '$lib/data/menu';
</script>

<header class="absolute inset-x-0 top-0 z-50">
	<nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
		<div class="flex lg:flex-1">
			<a href="/" class="-m-1.5 p-1.5">
				<span class="sr-only">RoadToUK</span>
				<img class="h-10" src={indigoLogo} alt="RoadToUK Logo" />
			</a>
		</div>
		<div class="hidden lg:flex lg:gap-x-12">
			{#each menu as item}
				<a href={item.href} class="text-sm font-semibold leading-6 text-gray-900">{item.name}</a>
			{/each}
		</div>
		<div class="flex flex-row gap-x-4 lg:ml-10">
			<div class="flex lg:hidden">
				<DropdownMenu.Root>
					<DropdownMenu.Trigger asChild let:builder>
						<Button variant="ghost" builders={[builder]}><Menu class="h-7 w-7" /></Button>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content>
						<DropdownMenu.Group>
							{#each menu as item}
								<DropdownMenu.Item class="text-base" href={item.href}>
									<svelte:component this={item.icon} class="mr-2 h-4 w-4" />
									<span>{item.name}</span>
								</DropdownMenu.Item>
							{/each}
						</DropdownMenu.Group>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>
		</div>
	</nav>
</header>
