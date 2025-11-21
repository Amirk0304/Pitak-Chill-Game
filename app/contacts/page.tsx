'use client'

import type React from 'react'
import AppShell from '@/components/app-shell'
import MapSection from '@/components/map-section/mapSection'
import { useState } from 'react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const Contacts = () => {
	const [formData, setFormData] = useState({ name: '', email: '', message: '' })

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log('Form submitted:', formData)
		setFormData({ name: '', email: '', message: '' })
	}

	return (
		<AppShell mainClassName='flex-1 py-10 md:py-10 px-4 md:px-12'>
			<div className='space-y-12 mb-10'>
				<div>
					<h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
						Контакты
					</h1>
					<p className='text-lg text-muted-foreground'>
						Забронировать места вы сможете тут
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
					<div className='space-y-6'>
						{[
							{
								icon: MapPin,
								title: 'Локация',
								info: '123 Gaming Avenue, Tech City, TC 12345',
								link: 'https://maps.app.goo.gl/FoPBAp4DpfhjiCJh9',
							},
							{
								icon: Phone,
								title: 'Телефонный номер',
								info: '+1 (555) 123-4567',
								link: 'tel:+15551234567',
							},
							{
								icon: Mail,
								title: 'Электронная почта',
								info: 'hello@pitak.com',
								link: 'mailto:hello@pitak.com',
							},
							{
								icon: Clock,
								title: 'Время работы',
								info: '24/7',
							},
						].map((contact, idx) => {
							const Icon = contact.icon
							return (
								<div key={idx} className='flex gap-4'>
									<Icon className='w-6 h-6 text-primary flex-shrink-0 mt-1' />
									<div>
										<h3 className='font-semibold text-foreground mb-1'>
											{contact.title}
										</h3>
										<a href={contact.link} className='text-muted-foreground'>
											{contact.info}
										</a>
									</div>
								</div>
							)
						})}
					</div>

					<form onSubmit={handleSubmit} className='space-y-4'>
						<input
							type='text'
							id='name'
							name='name'
							placeholder='ваше имя'
							value={formData.name}
							onChange={e => setFormData({ ...formData, name: e.target.value })}
							className='w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition'
							required
						/>
						<input
							type='email'
							id='email'
							name='email'
							placeholder='ваша электронная почта'
							value={formData.email}
							onChange={e =>
								setFormData({ ...formData, email: e.target.value })
							}
							className='w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition'
							required
						/>
						<textarea
							placeholder='Ваше сообщение'
							value={formData.message}
							onChange={e =>
								setFormData({ ...formData, message: e.target.value })
							}
							rows={5}
							className='w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition resize-none'
							required
						></textarea>
						<button
							type='submit'
							className='w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition'
						>
							Отправить
						</button>
					</form>
				</div>
				<MapSection />
			</div>
		</AppShell>
	)
}

export default Contacts
