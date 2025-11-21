'use client'

import * as React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

type CarouselProps = {
	orientation?: 'horizontal' | 'vertical'
	scrollDistance?: number
}

type CarouselContextValue = {
	containerRef: React.RefObject<HTMLDivElement | null>
	orientation: 'horizontal' | 'vertical'
	scrollPrev: () => void
	scrollNext: () => void
	canScrollPrev: boolean
	canScrollNext: boolean
	handleScroll: () => void
}

const CarouselContext = React.createContext<CarouselContextValue | null>(null)

function useCarousel() {
	const context = React.useContext(CarouselContext)

	if (!context) {
		throw new Error('useCarousel must be used within a <Carousel />')
	}

	return context
}

function Carousel({
	orientation = 'horizontal',
	scrollDistance,
	className,
	children,
	...props
}: React.ComponentProps<'div'> & CarouselProps) {
	const containerRef = React.useRef<HTMLDivElement>(null)
	const [canScrollPrev, setCanScrollPrev] = React.useState(false)
	const [canScrollNext, setCanScrollNext] = React.useState(false)

	const updateScrollState = React.useCallback(() => {
		const node = containerRef.current
		if (!node) return

		if (orientation === 'horizontal') {
			const maxScrollLeft = node.scrollWidth - node.clientWidth
			setCanScrollPrev(node.scrollLeft > 0)
			setCanScrollNext(node.scrollLeft < maxScrollLeft - 1)
		} else {
			const maxScrollTop = node.scrollHeight - node.clientHeight
			setCanScrollPrev(node.scrollTop > 0)
			setCanScrollNext(node.scrollTop < maxScrollTop - 1)
		}
	}, [orientation])

	const handleScroll = React.useCallback(() => {
		updateScrollState()
	}, [updateScrollState])

	const scrollByDistance = React.useCallback(
		(direction: 1 | -1) => {
			const node = containerRef.current
			if (!node) return

			const distance =
				scrollDistance ??
				(orientation === 'horizontal' ? node.clientWidth : node.clientHeight)

			if (orientation === 'horizontal') {
				node.scrollBy({ left: distance * direction, behavior: 'smooth' })
			} else {
				node.scrollBy({ top: distance * direction, behavior: 'smooth' })
			}
		},
		[orientation, scrollDistance]
	)

	const scrollPrev = React.useCallback(() => {
		scrollByDistance(-1)
	}, [scrollByDistance])

	const scrollNext = React.useCallback(() => {
		scrollByDistance(1)
	}, [scrollByDistance])

	React.useEffect(() => {
		updateScrollState()
	}, [updateScrollState])

	React.useEffect(() => {
		const node = containerRef.current
		if (!node) return

		const handleResize = () => updateScrollState()
		window.addEventListener('resize', handleResize)

		let resizeObserver: ResizeObserver | undefined

		if (typeof ResizeObserver !== 'undefined') {
			resizeObserver = new ResizeObserver(() => updateScrollState())
			resizeObserver.observe(node)
		}

		return () => {
			window.removeEventListener('resize', handleResize)
			resizeObserver?.disconnect()
		}
	}, [updateScrollState])

	const handleKeyDown = React.useCallback(
		(event: React.KeyboardEvent<HTMLDivElement>) => {
			if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
				event.preventDefault()
				scrollPrev()
			}
			if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
				event.preventDefault()
				scrollNext()
			}
		},
		[scrollNext, scrollPrev]
	)

	return (
		<CarouselContext.Provider
			value={{
				containerRef,
				orientation,
				scrollPrev,
				scrollNext,
				canScrollPrev,
				canScrollNext,
				handleScroll,
			}}
		>
			<div
				onKeyDownCapture={handleKeyDown}
				className={cn('relative', className)}
				role='region'
				aria-roledescription='carousel'
				data-slot='carousel'
				{...props}
			>
				{children}
			</div>
		</CarouselContext.Provider>
	)
}

function CarouselContent({ className, ...props }: React.ComponentProps<'div'>) {
	const { containerRef, orientation, handleScroll } = useCarousel()

	return (
		<div
			ref={containerRef}
			onScroll={handleScroll}
			className={cn(
				'flex scroll-smooth gap-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
				orientation === 'horizontal'
					? 'overflow-x-auto overflow-y-hidden snap-x snap-mandatory'
					: 'flex-col overflow-y-auto overflow-x-hidden snap-y snap-mandatory',
				className
			)}
			data-slot='carousel-content'
			tabIndex={0}
			{...props}
		/>
	)
}

function CarouselItem({ className, ...props }: React.ComponentProps<'div'>) {
	const { orientation } = useCarousel()

	return (
		<div
			role='group'
			aria-roledescription='slide'
			data-slot='carousel-item'
			className={cn(
				'snap-start',
				orientation === 'horizontal'
					? 'shrink-0 basis-full'
					: 'shrink-0 basis-auto',
				className
			)}
			{...props}
		/>
	)
}

function CarouselPrevious({
	className,
	variant = 'outline',
	size = 'icon',
	...props
}: React.ComponentProps<typeof Button>) {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel()

	return (
		<Button
			data-slot='carousel-previous'
			variant={variant}
			size={size}
			className={cn(
				'absolute size-8 rounded-full',
				orientation === 'horizontal'
					? 'top-1/2 -left-12 -translate-y-1/2'
					: '-top-12 left-1/2 -translate-x-1/2 rotate-90',
				className
			)}
			disabled={!canScrollPrev}
			onClick={scrollPrev}
			{...props}
		>
			<ArrowLeft />
			<span className='sr-only'>Previous slide</span>
		</Button>
	)
}

function CarouselNext({
	className,
	variant = 'outline',
	size = 'icon',
	...props
}: React.ComponentProps<typeof Button>) {
	const { orientation, scrollNext, canScrollNext } = useCarousel()

	return (
		<Button
			data-slot='carousel-next'
			variant={variant}
			size={size}
			className={cn(
				'absolute size-8 rounded-full',
				orientation === 'horizontal'
					? 'top-1/2 -right-12 -translate-y-1/2'
					: '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
				className
			)}
			disabled={!canScrollNext}
			onClick={scrollNext}
			{...props}
		>
			<ArrowRight />
			<span className='sr-only'>Next slide</span>
		</Button>
	)
}

export {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
}
