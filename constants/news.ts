interface News {
	id: number
	title: string
	category: 'tournaments' | 'updates' | 'events' // можно сузить под твои категории
	date: string
	image?: string
	content: string
}

export const ALL_NEWS: News[] = [
	{
		id: 1,
		title: 'Championship Finals this Weekend',
		category: 'tournaments',
		date: 'Nov 15, 2024',
		image: '/esports-championship.jpg',
		content:
			'The grand finals of our annual championship tournament are here! Watch the best teams compete for the title and massive prize pool.',
	},
	{
		id: 2,
		title: 'New Gaming Cabins Launched',
		category: 'updates',
		date: 'Nov 12, 2024',
		image: '/gaming-cabin-setup.jpg',
		content:
			"We've just unveiled our brand new premium gaming cabins with the latest hardware and amenities.",
	},
]
