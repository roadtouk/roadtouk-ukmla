<script>
	import Facebook from '~icons/ic/baseline-facebook';
	import Instagram from '~icons/mdi/instagram';
	import TwitterX from '~icons/ri/twitter-x-fill';
	import Youtube from '~icons/mdi/youtube';
	const currentYear = new Date().getFullYear().toString();

	let services = [
		{
			name: 'Sessions',
			href: 'https://shop.roadtouk.com/collections/all'
		},
		{
			name: 'Writing',
			href: 'https://shop.roadtouk.com/collections/professional-writing-service'
		},
		{
			name: 'Courses',
			href: 'https://academy.roadtouk.com'
		}
		// {
		// 	name: 'Forum',
		// 	href: 'https://forum.roadtouk.com'
		// }
	];

	let supports = [
		{
			name: 'Pricing',
			href: '#pricing'
		},
		{
			name: 'Features',
			href: '#features'
		},
		{
			name: 'Mocks',
			href: '#mocks'
		},
		{
			name: 'Group',
			href: 'https://t.me/ukmlaQbank'
		}
	];

	let socials = [
		{
			icon: Facebook,
			href: 'https://roadto.uk/fb'
		},
		{
			icon: Instagram,
			href: 'https://roadto.uk/ig'
		},
		{
			icon: TwitterX,
			href: 'https://roadto.uk/tw'
		},
		{
			icon: Youtube,
			href: 'https://roadto.uk/yt'
		}
	];
</script>

<footer class="bg-white" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="space-y-8">
				<img
					class="h-12"
					src="https://imagedelivery.net/qX7bDlAWbpHaj68l5a-l7g/43b48431-dd60-43ff-633e-220d05a61b00/w480"
					alt="Company name"
				/>
				<p class="text-sm leading-6 text-gray-600">
					One in five doctors in the UK are IMGs. We aim to create an environment for them to grow,
					learn and be confident in their work.
				</p>
				<div class="flex space-x-6">
					{#each socials as social}
						<a href={social.href} class="text-gray-400 hover:text-gray-500">
							<svelte:component this={social.icon} class="h-6 w-6" />
						</a>
					{/each}
				</div>
			</div>
			<div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm font-semibold leading-6 text-gray-900">Services</h3>
						<ul role="list" class="mt-6 space-y-4">
							{#each services as item}
								<li>
									<a href={item.href} class="text-sm leading-6 text-gray-600 hover:text-gray-900"
										>{item.name}</a
									>
								</li>
							{/each}
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm font-semibold leading-6 text-gray-900">Support</h3>
						<ul role="list" class="mt-6 space-y-4">
							{#each supports as item}
								<li>
									<a href={item.href} class="text-sm leading-6 text-gray-600 hover:text-gray-900"
										>{item.name}</a
									>
								</li>
							{/each}
						</ul>
					</div>
				</div>
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm font-semibold leading-6 text-gray-900">Company</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<a
									href="https://shop.roadtouk.com"
									class="text-sm leading-6 text-gray-600 hover:text-gray-900">About</a
								>
							</li>
							<li>
								<a
									href="https://roadtouk.com/blog/"
									class="text-sm leading-6 text-gray-600 hover:text-gray-900">Blog</a
								>
							</li>
							<li>
								<a
									href="https://shop.roadtouk.com"
									class="text-sm leading-6 text-gray-600 hover:text-gray-900">Shop</a
								>
							</li>
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<a
									href="https://roadtouk.com/terms-conditions/"
									class="text-sm leading-6 text-gray-600 hover:text-gray-900">Terms</a
								>
							</li>
							<li>
								<a
									href="https://roadtouk.com/new-privacy-policy/"
									class="text-sm leading-6 text-gray-600 hover:text-gray-900">Privacy</a
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
			<p class="text-xs leading-5 text-gray-500">
				{currentYear} Road to UK LLC &copy; All rights reserved.
			</p>
		</div>
	</div>
</footer>
