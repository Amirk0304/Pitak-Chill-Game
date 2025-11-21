import Socials from '@/components/socials/socials'

export default function Footer() {
	return (
		<footer className='bg-card border-t border-border py-12 z-50 md:py-10'>
			<div className='px-4 md:px-12 max-w-7xl mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-12'>
					<div>
						<h3 className='text-xl font-bold cursor-default text-primary '>
							PITAK
						</h3>
						<h5 className=' font-bold text-primary cursor-default mb-4'>
							Cill & Game
						</h5>

						<p className='text-muted-foreground cursor-default text-sm'>
							Your ultimate gaming experience awaits.
						</p>
					</div>

					<div>
						<h4 className='font-semibold text-foreground mb-4'>Меню</h4>
						<ul className='space-y-2 text-sm text-muted-foreground'>
							<li>
								<a href='/' className='hover:text-primary transition'>
									Главная
								</a>
							</li>
							<li>
								<a href='/cabins' className='hover:text-primary transition'>
									Кабинки
								</a>
							</li>
							<li>
								<a href='/about' className='hover:text-primary transition'>
									О нас
								</a>
							</li>
							<li>
								<a href='/news' className='hover:text-primary transition'>
									Новости
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className='font-semibold text-foreground mb-4'>Поддержка</h4>
						<ul className='space-y-2 text-sm text-muted-foreground'>
							<li>
								<a href='/contacts' className='hover:text-primary transition'>
									Свизаться с нами
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-primary transition'>
									FAQ
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-primary transition'>
									Terms
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-primary transition'>
									Privacy
								</a>
							</li>
						</ul>
					</div>

					<Socials />
				</div>

				<div className='border-t border-border pt-8'>
					<p className='text-center text-sm text-muted-foreground'>
						© 2025 Pitak Game & Chill. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}
