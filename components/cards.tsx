import Image from 'next/image'

interface CardItem {
	img: string
	title: string
	desc: string
}

const Cards = () => {
	const items: CardItem[] = [
		{
			img: '/photos/main.jpg',
			title: 'Главный Зал для просмотров футбола',
			desc: '«Комфортный зал с широким экраном, качественным звуком и атмосферой, созданной специально для просмотра футбольных матчей.»',
		},
		{
			img: '/photos/smokingroom.jpg',
			title: 'Кабинка для курения',
			desc: 'Уютная закрытая кабинка с комфортной вентиляцией — идеальное место для отдыха и приватных бесед.',
		},
		{
			img: '/photos/drinks.jpg',
			title: 'Бар',
			desc: 'Бар с широким выбором напитков и снеков — идеальное дополнение к отдыху и просмотрам.',
		},
	]

	return (
		<div className='grid grid-row-1  gap-8 px-4 md:px-12 max-w-7xl mx-auto py-12'>
			{items.map((item: CardItem, idx: number) => (
				<div
					key={idx}
					className='bg-card border border-border rounded-2xl p-4 shadow-md hover:shadow-lg transition'
				>
					<div className='w-full h-76 relative mb-4 rounded-xl overflow-hidden'>
						<Image
							src={item.img}
							alt={item.title}
							fill
							className='object-cover'
						/>
					</div>
					<h3 className='text-lg font-bold text-primary mb-2'>{item.title}</h3>
					<p className='text-muted-foreground text-[16px]'>{item.desc}</p>
				</div>
			))}
		</div>
	)
}

export default Cards
//
