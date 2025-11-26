import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Socials() {
	return (
		<div className='flex gap-3 items-center'>
			<Link href='https://www.instagram.com/pitak_chill_game?igsh=MWJjbXd4NThkZzVhZg=='>
				<Image
					src='icons/icons8-instagram-logo-30h.png'
					width={23}
					height={23}
					alt='Instagram link'
					className='hover:opacity-80 active:opacity-60 transition color-accent'
				/>
			</Link>
			<Link href='https://t.me/pitak_gaming_club'>
				<Image
					src='icons/icons8-telegram-logo-50h.png'
					width={20}
					height={20}
					alt='Telegram link'
					className='hover:opacity-80 active:opacity-60 transition color-accent'
				/>
			</Link>
			<Link href='https://wa.me/998957475737'>
				<Image
					src='icons/icons8-whatsapp-logo-50h.png'
					width={20}
					height={20}
					alt='Whatsapp link'
					className='hover:opacity-80 active:opacity-60 transition color-accent'
				/>
			</Link>
		</div>
	)
}

export default Socials
