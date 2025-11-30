import AppShell from '@/components/app-shell'
import { Users, Zap, Coffee, GlassWater, Utensils } from 'lucide-react'
import BookBtn from '@/components/bookBtn/bookBtn'
import { type Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Кабинки | Pitak',
	description: 'Наши игровые кабины',
	icons: {
		icon: '/Pitak-logonew2.ico',
		shortcut: '/Pitak-logonew2.png',
		apple: '/Pitak-logonew2.png',
	},
}

export default function Cabins() {
	const cabins = [
		{
			id: 1,
			name: 'Gold zone',
			players: 10,
			description: 'Идеально подходит для профессиональных геймеров',
			price: '12.000 сум/час днём  ',
			price2: ' 14.000 сум/час вечером ',
			image: '/photos/gold.jpg',
			features: [
				'Монитор 280 Герц',
				'Видеокарта GeForce RTX 3060 Ti',
				'Игровой стул',
				'Intel Core i5-14400 ',
			],
		},
		{
			id: 2,
			name: 'Silver zone',
			players: 10,
			description: 'Идеально подходит для командных тренировочных игр.',
			price: '8.000 сум/час днём  ',
			price2: ' 10.000 сум/час вечером ',
			image: '/photos/silver.jpg',
			features: [
				'Монитор 280 Герц',
				'Видеокарта серии GeForce GTX 1660 Super',
				'Удобный стул',
				'Intel Core i5-14400 ',
			],
		},
		{
			id: 3,
			name: 'Play Station VIP-1 zone',
			players: 8,
			description: 'Максимальный опыт командной игры',
			price: '30.000 сум/час днём  ',
			price2: '40.000 сум/час вечером ',
			image: '/photos/PS-vip1.jpg',
			features: [
				'Телевизор 85 дюймов 4к дисплей',
				'Playstation 5',
				'4х джойстики',
				'Уютная игровая обстановка',
			],
		},
		{
			id: 4,
			name: 'Play Station VIP-2 zone',
			players: 6,
			description: 'Максимальный опыт командной игры',
			price: '40.000 сум/час днём  ',
			price2: ' 50.000 сум/час вечером ',
			image: '/photos/PS-vip2.jpg',
			features: [
				'Телевизор 75 дюймов 4к дисплей',
				'Playstation 5',
				'2х джойстики',
				'Уютная игровая обстановка',
			],
		},
		{
			id: 5,
			name: 'Platinum zone',
			players: 6,
			description: 'На данный момент не доступно',
			price: '15.000 сум в час',
			image: '/vip-gaming-lounge.jpg',
			features: [
				'Premium PCs',
				'Snack Bar',
				'Private Space',
				'Streaming Setup',
			],
		},
		{
			id: 7,
			name: 'Главный Зал',
			description:
				'Комфортный зал для просмотра футбольных матчей и настольных игр.»',
			price: 'Бесплатно',
			image: '/photos/main.jpg',
			features: ['Широкий экран', 'Уютная атмофера', 'Удобные диваны'],
		},
		{
			id: 6,
			name: 'Bar zone',
			players: null,
			description: 'Напитки, Кофе, Энергетики и Снеки  ',

			image: '/photos/bar.jpg',
			features: [
				'Энергетики и Напитки',
				'Снеки и закуски',
				'Комфортная зона отдыха',
			],

			isBarZone: true,
		},
	]

	return (
		<AppShell mainClassName='flex-1 py-12 md:py-12 px-4 md:px-12 '>
			<div className='space-y-12'>
				<div>
					<h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>
						Наши игровые кабины
					</h1>
					<p className='text-lg text-muted-foreground'>
						Выберите идеальную конфигурацию для вашего игрового процесса
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
					{cabins.map(cabin => (
						<div
							key={cabin.id}
							className='bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition'
						>
							<div className='h-48 bg-secondary overflow-hidden'>
								<img
									src={cabin.image || '/placeholder.svg'}
									alt={cabin.name}
									className='w-full h-full object-cover'
								/>
							</div>
							<div className='p-6 space-y-4'>
								<div className='flex items-start justify-between'>
									<div>
										<h3 className='text-2xl font-bold text-foreground'>
											{cabin.name}
										</h3>
										<p className='text-sm text-muted-foreground'>
											{cabin.description}
										</p>
									</div>
									{cabin.players !== null && (
										<div className='flex items-center gap-1 text-primary font-semibold'>
											<Users size={16} />
											{cabin.players}
										</div>
									)}
									{cabin.isBarZone && (
										<div className='flex items-center gap-1 text-primary font-semibold'>
											<Coffee size={16} />
										</div>
									)}
								</div>

								<div className='space-y-2'>
									<div className='mb-4'>
										<p className='text-primary mb-0 font-bold text-lg'>
											{cabin.price}
										</p>
										<p className='text-primary font-bold text-lg'>
											{cabin.price2}
										</p>
									</div>

									<ul className='space-y-1'>
										{cabin.features.map((feature, idx) => {
											const getBarIcon = (index: number) => {
												const icons = [GlassWater, Utensils, Coffee, Zap]
												const IconComponent = icons[index % icons.length]
												return (
													<IconComponent size={14} className='text-primary' />
												)
											}

											return (
												<li
													key={idx}
													className='text-sm text-muted-foreground flex items-center gap-2'
												>
													{cabin.isBarZone ? (
														getBarIcon(idx)
													) : (
														<Zap size={14} className='text-primary' />
													)}
													{feature}
												</li>
											)
										})}
									</ul>
								</div>

								<BookBtn />
							</div>
						</div>
					))}
				</div>
			</div>
		</AppShell>
	)
}
