'use client'

import AppShell from '@/components/app-shell'
import { useState } from 'react'
import { ALL_NEWS } from '@/constants/news'

export default function News() {
	const [activeCategory, setActiveCategory] = useState('all')

	const filteredNews =
		activeCategory === 'all'
			? ALL_NEWS
			: ALL_NEWS.filter(item => item.category === activeCategory)

	return (
		<AppShell mainClassName='flex-1 py-12 md:py-24 px-4 md:px-12'>
			<div className='space-y-12'>
				<div>
					<h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>
						Игровые новости
					</h1>
					<p className='text-lg text-muted-foreground'>
						Будьте в курсе последних новостей от PITAK
					</p>
				</div>

				<div className='flex gap-2 flex-wrap'>
					{[
						{ id: 'all', label: 'Все новости' },
						{ id: 'updates', label: 'Обновления' },
						{ id: 'events', label: 'События и Турниры' },
					].map(cat => (
						<button
							key={cat.id}
							onClick={() => setActiveCategory(cat.id)}
							className={`px-4 py-2 rounded-lg font-semibold transition ${
								activeCategory === cat.id
									? 'bg-primary text-primary-foreground'
									: 'border border-border text-foreground hover:bg-secondary'
							}`}
						>
							{cat.label}
						</button>
					))}
				</div>

				<div className='space-y-6'>
					{filteredNews.map(item => (
						<article
							key={item.id}
							className='bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition'
						>
							<div className='grid grid-rows md:grid-cols-3 gap-6 p-6'>
								<div className='h-48 md:h-auto bg-secondary rounded-lg overflow-hidden'>
									<img
										src={item.image || '/placeholder.svg'}
										alt={item.title}
										className='w-full h-full object-cover'
									/>
								</div>
								<div className='md:col-span-2 space-y-3'>
									<p className='text-sm text-primary font-semibold uppercase'>
										{item.category}
									</p>
									<h2 className='text-2xl font-bold text-foreground'>
										{item.title}
									</h2>
									<p className='text-muted-foreground'>{item.content}</p>
									<p className='text-xs text-muted-foreground pt-2'>
										{item.date}
									</p>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</AppShell>
	)
}
