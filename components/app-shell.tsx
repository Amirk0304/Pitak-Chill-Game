'use client'

import { useState, type ReactNode } from 'react'

import Footer from '@/components/footer'
import Navigation from '@/components/navigation'
import Sidebar from '@/components/sidebar'
import { cn } from '@/lib/utils'

type AppShellProps = {
	children: ReactNode
	mainClassName?: string
}

export default function AppShell({ children, mainClassName }: AppShellProps) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<div className='flex min-h-screen bg-background'>
			<Sidebar
				mobileMenuOpen={mobileMenuOpen}
				setMobileMenuOpen={setMobileMenuOpen}
			/>

			<div className='flex w-full flex-1 flex-col md:ml-72'>
				<Navigation
					mobileMenuOpen={mobileMenuOpen}
					setMobileMenuOpen={setMobileMenuOpen}
				/>

				<main className={cn('flex-1', mainClassName)}>{children}</main>

				<Footer />
			</div>
		</div>
	)
}
