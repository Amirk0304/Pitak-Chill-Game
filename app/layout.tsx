import type React from 'react'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Pitak Game & Chill',
	description: 'Your ultimate gaming club experience',
	generator: 'v0.app',
	icons: {
		icon: '/Pitak-logonew2.png',
		shortcut: '/Pitak-logonew2.png',
		apple: '/Pitak-logonew2.png',
	},
	verification: {
		google: '44ae1fd865e8374c',
	},
	other: {
		google: 'notranslate',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`font-sans antialiased dark`}>{children}</body>
		</html>
	)
}
