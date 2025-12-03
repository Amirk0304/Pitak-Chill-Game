import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Контакты | Pitak',
	description: 'Свяжитесь с нами для бронирования и информации',
	icons: {
		icon: '/favicon.ico',
		shortcut: '/Pitak-logonew2.png',
		apple: '/Pitak-logonew2.png',
	},
}

export default function ContactsLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <>{children}</>
}
