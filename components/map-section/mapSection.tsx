import React from 'react'
import GoogleMapComponent from '@/components/google-map'

function mapSection() {
	return (
		<section className='bg-background px-4 py-12 md:px-12'>
			<div className='mx-auto w-full max-w-6xl space-y-4'>
				<h2 className='text-3xl md:text-5xl  text-white text-balance'>
					Как нас найти
				</h2>
				<p className='text-lg text-muted-foreground'>локация: Газалкент</p>
				<GoogleMapComponent />
			</div>
		</section>
	)
}

export default mapSection
