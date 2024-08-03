export const tiers = [
	{
		name: 'Silver Pack',
		desc: 'Billed three-monthly.',
		price: '$25',
		features: [
			'Access to all categories of questions',
			'Flag questions for later',
			'Save explanations as revision keys',
			'Repeat only incorrectly answered questions',
			'Attempt only unattempted questions'
		],
		mostPopular: false,
		borderClass: 'lg:rounded-r-none'
	},
	{
		name: 'Gold Pack',
		desc: 'Billed six-monthly',
		price: '$45',
		features: [
			'Access to all categories of questions',
			'Flag questions for later',
			'Save explanations as revision keys',
			'Repeat only incorrectly answered questions',
			'Attempt only unattempted questions',
			'Unlimited reset of the entire qbank'
		],
		mostPopular: true,
		borderClass: 'lg:rounded-b-none'
	},
	{
		name: 'Diamond Pack',
		desc: 'Billed yearly',
		price: '$75',
		features: [
			'Unlimited reset of the entire qbank',
			'Unlimited timed mock tests',
			'Access to all categories of questions',
			'Flag questions for later',
			'Everything else from other packs'
		],
		mostPopular: false,
		borderClass: 'lg:rounded-l-none'
	}
];
