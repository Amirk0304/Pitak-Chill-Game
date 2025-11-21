'use client'

import { Menu, X } from 'lucide-react'
import { type Dispatch, type SetStateAction } from 'react'
import Location from '@/components/location/location'
import Socials from '@/components/socials/socials'

type NavigationProps = {
	mobileMenuOpen: boolean
	setMobileMenuOpen: Dispatch<SetStateAction<boolean>>
}

export default function Navigation({
	mobileMenuOpen,
	setMobileMenuOpen,
}: NavigationProps) {
	return (
		<nav className='sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur'>
			<div className='flex h-16 items-center justify-between px-4'>
				<Location />

				<div className='ml-auto flex items-center gap-4'>
					<Socials />

					<button
						type='button'
						className='md:hidden'
						onClick={() => setMobileMenuOpen(prev => !prev)}
						aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
					>
						{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>
		</nav>
	)
}
