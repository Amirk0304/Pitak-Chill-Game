import Image from 'next/image'

const BannerSection = () => {
	return (
		<section className='bg-background px-4 pt-6  md:px-12'>
			<div className='mx-auto w-full max-w-6xl'>
				<Image
					src='/cs2.jpg'
					width={1800}
					height={1000}
					alt='Logo'
					loading='eager'
					className='rounded-2xl mx-auto   max-h-[330px] object-cover'
				/>
			</div>
		</section>
	)
}

export default BannerSection
