<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import ArrowRight from '~icons/mdi/arrow-right';
	import CaretRight from '~icons/ph/caret-right-bold';
	import { tiers } from '$lib/data/tiers';
	import { features } from '$lib/data/mocks';
	import { faqs } from '$lib/data/faqs';
	import { qbankFeatures, images } from '$lib/data/features';
	import Check from '~icons/material-symbols/check';
	import * as Accordion from '$lib/components/ui/accordion';
	import * as Carousel from '$lib/components/ui/carousel/index';
	import Autoplay from 'embla-carousel-autoplay';

	const autoplayPlugin = Autoplay({ delay: 4000, stopOnInteraction: true });
</script>

<!-- Hero -->
<div class="relative isolate z-10 overflow-hidden bg-white">
	<svg
		class="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
		aria-hidden="true"
	>
		<defs>
			<pattern
				id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
				width="200"
				height="200"
				x="50%"
				y="-1"
				patternUnits="userSpaceOnUse"
			>
				<path d="M.5 200V.5H200" fill="none" />
			</pattern>
		</defs>
		<rect
			width="100%"
			height="100%"
			stroke-width="0"
			fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
		/>
	</svg>
	<div class="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
		<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
			<div class="mt-24 sm:mt-32 lg:mt-16">
				<a href="#mocks" class="inline-flex space-x-6">
					<span
						class="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10"
						>What's new</span
					>
					<span
						class="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600"
					>
						<span>New Mock Added !</span>
						<svg
							class="h-5 w-5 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
								clip-rule="evenodd"
							/>
						</svg>
					</span>
				</a>
			</div>
			<h1
				class="mt-10 max-w-64 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl md:max-w-none"
			>
				Introducing the Ultimate <span class="text-indigo-600">UKMLA</span> Qbank.
			</h1>
			<p class="mt-6 text-gray-600 md:text-lg md:leading-7">
				Are you ready to ace the UKMLA and start your medical career in the NHS? With thousands of
				high-quality, peer-reviewed questions made by experienced UK doctors, you can rest assured
				that you'll be prepared come exam day.
			</p>
			<div class="mt-10 flex items-center gap-x-4">
				<Button href="https://app.roadtouk.com/signup" class="bg-orange-600 hover:bg-orange-800"
					>Free Trial Now</Button
				>
				<Button href="https://t.me/ukmlaQbank" variant="outline" class="group"
					>Join Group <CaretRight
						class="ms-2 h-4 w-4 group-hover:translate-x-1 group-hover:duration-200"
					/></Button
				>
			</div>
		</div>
		<div
			class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32"
		>
			<div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
				<div
					class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"
				>
					<img
						src="https://imagedelivery.net/qX7bDlAWbpHaj68l5a-l7g/1c2edaff-3733-432b-3535-326ffdf22900/w1280"
						srcset="
    https://imagedelivery.net/qX7bDlAWbpHaj68l5a-l7g/1c2edaff-3733-432b-3535-326ffdf22900/w480 480w,
    https://imagedelivery.net/qX7bDlAWbpHaj68l5a-l7g/1c2edaff-3733-432b-3535-326ffdf22900/w768 768w, 
    https://imagedelivery.net/qX7bDlAWbpHaj68l5a-l7g/1c2edaff-3733-432b-3535-326ffdf22900/w1280 1280w,
    https://imagedelivery.net/qX7bDlAWbpHaj68l5a-l7g/1c2edaff-3733-432b-3535-326ffdf22900/w1920 1920w"
						alt="App screenshot"
						class="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
						width="1200"
						height="808"
					/>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Features -->
<div class="bg-white py-24 sm:py-32" id="features">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl sm:text-center">
			<h2 class="text-base font-semibold leading-7 text-indigo-600">Everything you need</h2>
			<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				No clue where to start?<br /><span class="italic text-orange-600">No problem.</span>
			</p>
			<p class="mt-6 text-lg leading-8 text-gray-600">
				We have everything you need so that you don't get bogged down by how to start your exam
				prep.
			</p>
		</div>
	</div>
	<div class="relative overflow-hidden pt-16">
		<div class="mx-auto max-w-5xl px-6 lg:px-8">
			<Carousel.Root
				class="w-full"
				opts={{ loop: true }}
				plugins={[autoplayPlugin]}
				on:mousenter={autoplayPlugin.stop}
				on:mouseleave={autoplayPlugin.reset}
			>
				<Carousel.Content>
					{#each images as image}
						<Carousel.Item>
							<img src={image.original} alt={image.originalAlt} class="w-full" />
						</Carousel.Item>
					{/each}
				</Carousel.Content>
			</Carousel.Root>
		</div>
	</div>
	<div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
		<dl
			class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"
		>
			{#each qbankFeatures as feature}
				<div class="relative pl-9">
					<dt class="inline text-xl font-semibold leading-6 text-gray-900">
						<svelte:component
							this={feature.icon}
							class="absolute left-1 top-1 h-5 w-5 text-orange-600"
						/>

						{feature.name}
					</dt>
					<dd class="pt-2">
						{feature.desc}
					</dd>
				</div>
			{/each}
		</dl>
	</div>
</div>

<!-- Pricing -->
<div class="bg-white py-24 sm:py-32" id="pricing">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
			<p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
				Simple Pricing, for everyone
			</p>
		</div>
		<p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
			No matter how you want to prepare, we have flexible plans.
		</p>
		<div
			class="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			{#each tiers as tier}
				<div
					class="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 {tier.mostPopular
						? 'lg:z-10'
						: 'lg:mt-8'} {tier.borderClass}"
				>
					<div>
						<div class="flex items-center justify-between gap-x-4">
							<h3 id="tier-freelancer" class="text-lg font-semibold leading-8 text-gray-900">
								{tier.name}
							</h3>
							{#if tier.mostPopular}
								<p
									class="rounded-full bg-orange-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-orange-600"
								>
									Most popular
								</p>
							{/if}
						</div>
						<p class="mt-4 text-sm leading-6 text-gray-600">
							{tier.desc}
						</p>
						<p class="mt-6 flex items-baseline gap-x-1">
							<span class="text-4xl font-bold tracking-tight text-gray-900">{tier.price}</span>
						</p>
						<ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600">
							{#each tier.features as feature}
								<li class="flex gap-x-3">
									<Check class="h-6 w-5 flex-none text-indigo-600" />
									{feature}
								</li>
							{/each}
						</ul>
					</div>
					<Button
						class="mt-8 {tier.mostPopular
							? 'bg-orange-600 hover:bg-orange-800'
							: 'bg-indigo-600 hover:bg-indigo-800'}"
						href="https://app.roadtouk.com/signup">Get Started</Button
					>
				</div>
			{/each}
		</div>
	</div>
</div>

<!-- MasterMock -->
<div class="overflow-hidden bg-white py-24 sm:py-32" id="mocks">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div
			class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
		>
			<div class="lg:ml-auto lg:pl-4 lg:pt-4">
				<div class="lg:max-w-lg">
					<h2 class="text-base font-semibold leading-7 text-indigo-600">Timed Mock Test</h2>
					<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Master Mocks for UKMLA
					</p>
					<p class="mt-4 text-lg leading-8 text-gray-600">
						The last mocks you will ever need to ace the UKMLA. Practice with our timed full exam
						mock format that will ensure success on exam day.
					</p>
					<dl class="mt-6 max-w-xl space-y-4 text-base leading-7 text-gray-600 lg:max-w-none">
						{#each features as feature}
							<div class="relative pl-9">
								<dt class="inline font-semibold text-gray-900">
									<svelte:component
										this={feature.icon}
										class="absolute left-1 top-1 h-5 w-5 text-orange-600"
									/>

									{feature.name}
								</dt>
								<dd class="inline">
									{feature.desc}
								</dd>
							</div>
						{/each}
					</dl>
					<Button
						href="https://app.roadtouk.com/user/qbank/mock"
						class="group mt-8 bg-orange-600 hover:bg-orange-800"
						>Take me There <CaretRight
							class="ms-2 h-4 w-4 group-hover:translate-x-1 group-hover:duration-200"
						/></Button
					>
				</div>
			</div>
			<div class="flex items-start justify-end lg:order-first">
				<img
					src="https://imagedelivery.net/qX7bDlAWbpHaj68l5a-l7g/02c1d6c9-9def-493d-772d-ac233fdc8b00/w1280"
					alt="Mock Exam"
					class="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
					loading="lazy"
					width="1200"
					height="808"
				/>
			</div>
		</div>
	</div>
</div>

<!-- CTA -->
<div class="bg-white">
	<div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
		<div
			class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16"
		>
			<h2 class="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
				Check Our Free Trial Qbank Today.
			</h2>
			<p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
				It's time to take control of your UKMLA preparation. Sign up today to get access to the demo
				question bank.
			</p>
			<div class="mt-10 flex items-center justify-center gap-x-6">
				<a
					href="https://app.roadtouk.com/signup"
					class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
					>Create an account</a
				>
				<a href="https://t.me/ukmlaQbank" class="text-sm font-semibold leading-6 text-white"
					>Join Group <span aria-hidden="true">→</span></a
				>
			</div>
			<svg
				viewBox="0 0 1024 1024"
				class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
				aria-hidden="true"
			>
				<circle
					cx="512"
					cy="512"
					r="512"
					fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
					fill-opacity="0.7"
				/>
				<defs>
					<radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
						<stop stop-color="#EA580C" />
						<stop offset="1" stop-color="#E935C1" />
					</radialGradient>
				</defs>
			</svg>
		</div>
	</div>
</div>

<!-- FAQs -->
<div class="bg-white" id="faqs">
	<div class="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
		<div class="lg:grid lg:grid-cols-12 lg:gap-8">
			<div class="lg:col-span-5">
				<h2 class="text-3xl font-bold leading-10 tracking-tight text-gray-900 sm:text-4xl">
					Frequently asked questions
				</h2>
				<p class="mt-4 text-base leading-7 text-gray-600">
					Can’t find the answer you’re looking for? Reach out to our <a
						href="https://t.me/ukmlaQbank"
						class="font-semibold text-indigo-600 hover:text-indigo-500">telegram group.</a
					>
				</p>
			</div>
			<div class="mt-10 lg:col-span-7 lg:mt-0">
				<Accordion.Root class="w-full " value="1">
					{#each faqs as faq}
						<Accordion.Item value={faq.key}>
							<Accordion.Trigger class="text-start text-xl">{faq.ques}</Accordion.Trigger>
							<Accordion.Content class="text-base">{@html faq.ans}</Accordion.Content>
						</Accordion.Item>
					{/each}
				</Accordion.Root>
			</div>
		</div>
	</div>
</div>
