'use client'

import Image from 'next/image'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'

const slides = [
	{
		src: '/photos/main.jpg',
		alt: 'main hall',
	},
	{
		src: '/photos/silver.jpg',
		alt: 'silver zone',
	},
	{
		src: '/photos/PS-vip.jpg',
		alt: 'Play Station zone ',
	},
	{
		src: '/photos/guns.jpg',
		alt: 'ART with guns',
	},
	{
		src: '/photos/gold.jpg',
		alt: 'gold zone',
	},
	{
		src: '/photos/bar.jpg',
		alt: 'bar zone',
	},
]

export default function GalleryCarousel() {
	return (
		<section className='bg-background px-4 py-12 md:px-12'>
			<div className='mx-auto w-full max-w-6xl'>
				<Carousel className='w-full' scrollDistance={400}>
					<CarouselContent className='snap-x md:snap-mandatory'>
						{slides.map(slide => (
							<CarouselItem
								key={slide.src}
								className='basis-[90%] sm:basis-[80%] md:basis-2/3 lg:basis-1/2'
							>
								<div className='relative transition hover:border-accent duration-300 aspect-[1.6] overflow-hidden rounded-2xl border border-border bg-card'>
									<Image
										src={slide.src}
										alt={slide.alt}
										fill
										sizes='(min-width: 1024px) 50vw, (min-width: 768px) 66vw, 90vw'
										className='object-cover hover:scale-105 transition'
										priority={false}
									/>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</section>
	)
}
