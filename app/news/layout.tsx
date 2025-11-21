import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Новости | Pitak',
	description: 'Последние новости, обновления и события PITAK Game & Chill',
	icons: {
		icon: '/Pitak-logonew2.ico',
		shortcut: '/Pitak-logonew2.png',
		apple: '/Pitak-logonew2.png',
	},
}

export default function NewsLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <>{children}</>
}
