import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const logo = () => {
	return (
		<div className='mt-0 mb-6 space-y-1'>
			<Link
				href='/'
				className='text-2xl font-bold tracking-wide flex items-center gap-2 text-primary'
			>
				<Image
					src='/Pitak-logonew2.png'
					width={100}
					height={100}
					alt='Logo'
					loading='eager'
					className='hover:opacity-80 transition color-accent'
				/>
				<div className='flex text-4xl text-white flex-col'>
					<p>PITAK</p>

					<p className='text-xs font-bold uppercase'>Chill & Game</p>
				</div>
			</Link>
		</div>
	)
}

export default logo
