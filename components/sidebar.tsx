'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
	Grid3x3,
	Gamepad2,
	Users,
	Mail,
	Newspaper,
	ArrowRight,
} from 'lucide-react'
import { type Dispatch, type SetStateAction } from 'react'

import BookBtn from '@/components/bookBtn/bookBtn'
import Logo from '@/components/logo/logo'

type SidebarProps = {
	mobileMenuOpen: boolean
	setMobileMenuOpen: Dispatch<SetStateAction<boolean>>
}

export default function Sidebar({
	mobileMenuOpen,
	setMobileMenuOpen,
}: SidebarProps) {
	const pathname = usePathname()

	const navItems = [
		{ href: '/', label: 'Главная', icon: Grid3x3 },
		{ href: '/cabins', label: 'Кабинки', icon: Gamepad2 },
		{ href: '/about', label: 'О нас', icon: Users },
		{ href: '/contacts', label: 'Контакты', icon: Mail },
		{ href: '/news', label: 'Новости', icon: Newspaper },
	]

	const isActive = (href: string) => pathname === href

	return (
		<>
			{/* Desktop Sidebar */}
			<aside className='hidden md:flex w-72 h-screen overflow-y-auto bg-card border-r border-border flex-col p-6 fixed left-0 top-0 z-40'>
				<Logo />
				<BookBtn />

				<nav className='flex-1 space-y-2 mb-8'>
					{navItems.map(item => {
						const Icon = item.icon
						const active = isActive(item.href)
						return (
							<Link
								key={item.href}
								href={item.href}
								className={`flex items-center gap-3 px-4 py-3 rounded-[8px] transition ${
									active
										? 'bg-primary text-primary-foreground'
										: 'text-foreground hover:bg-secondary'
								}`}
								onClick={() => setMobileMenuOpen(false)}
							>
								<Icon size={20} />
								<span className='font-medium'>{item.label}</span>
							</Link>
						)
					})}
				</nav>
			</aside>

			{/* Mobile Sidebar */}
			{mobileMenuOpen && (
				<aside className='fixed inset-0 z-510 md:hidden'>
					<div
						className='absolute inset-0 bg-black/50'
						onClick={() => setMobileMenuOpen(false)}
					/>
					<div className='absolute left-0 top-0 w-64 h-full max-h-screen overflow-y-auto bg-card border-r border-border p-6 flex flex-col z-40'>
						<Logo />

						<BookBtn />

						<nav className='flex-1 space-y-2 mb-8'>
							{navItems.map(item => {
								const Icon = item.icon
								const active = isActive(item.href)
								return (
									<Link
										key={item.href}
										href={item.href}
										className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
											active
												? 'bg-primary text-primary-foreground'
												: 'text-foreground hover:bg-secondary'
										}`}
										onClick={() => setMobileMenuOpen(false)}
									>
										<Icon size={20} />
										<span className='font-medium'>{item.label}</span>
									</Link>
								)
							})}
						</nav>
					</div>
				</aside>
			)}
		</>
	)
}
