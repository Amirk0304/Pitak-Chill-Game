import Image from 'next/image'
import Link from 'next/link'
import { ALL_NEWS } from '../constants/news'

const MiniNews = () => {
	return (
		<div className='space-y-6 px-4 py-12 md:px-12 '>
			<div className='flex justify-between items-center'>
				<h2 className='text-3xl font-bold text-foreground'>
					Последние новости
				</h2>

				<Link href='/news' className='text-primary font-medium hover:underline'>
					Смотреть все →
				</Link>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				{ALL_NEWS.map(item => (
					<Link
						key={item.id}
						href={`/news`}
						className='group rounded-lg overflow-hidden border border-border hover:border-primary transition'
					>
						<div className='relative w-full h-48'>
							<Image
								src={item.image || '/photos/guns.jpg'}
								alt={item.title}
								fill
								className='object-cover group-hover:scale-105 transition'
							/>
						</div>

						<div className='p-4'>
							<p className='text-xs text-muted-foreground'>{item.date}</p>
							<h3 className='text-lg font-semibold text-primary mt-1 group-hover:text-accent'>
								{item.title}
							</h3>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default MiniNews
//
