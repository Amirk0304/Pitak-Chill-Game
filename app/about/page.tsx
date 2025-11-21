import AppShell from '@/components/app-shell'
import Cards from '@/components/cards'
import { Award, Globe, Users, Zap } from 'lucide-react'

export default function About() {
	return (
		<AppShell mainClassName='flex-1 px-4 py-12 md:px-12 md:py-12'>
			<div className='space-y-16'>
				<div>
					<h1 className='mb-6 text-4xl font-bold text-white md:text-6xl'>
						О нас<span className='flex pt-2'>"PITAK Game & Chill"</span>
					</h1>
					<div className='space-y-4 text-lg text-muted-foreground'>
						<p>
							PITAK Game & Chill — это ваше главное место для игрового
							совершенства, сообщества и незабываемых впечатлений. Основанные на
							страсти к игровой культуре, мы создали пространство, где геймеры
							всех уровней могут собираться вместе, чтобы соревноваться,
							общаться и отмечать свою любовь к играм.
						</p>
						<p>
							Наши современные залы оснащены новейшим игровым оборудованием,
							удобными креслами и атмосферой, призванной раскрыть потенциал
							каждого игрока. Независимо от того, являетесь ли вы обычным
							геймером, желающим расслабиться, или энтузиастом киберспорта, мы
							подберём для вас идеальное место.
						</p>
					</div>
				</div>

				<Cards />

				<div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
					{[
						{ icon: Zap, label: 'Премиум-оборудование', value: '50+' },
						{ icon: Users, label: 'Активные клиенты', value: '10 000+' },
						{ icon: Award, label: 'Турниры', value: '10+' },
						{ icon: Globe, label: 'Локации', value: '1' },
					].map((stat, idx) => {
						const Icon = stat.icon
						return (
							<div
								key={idx}
								className='space-y-3 rounded-lg border border-border bg-card p-6 text-center'
							>
								<Icon className='mx-auto h-8 w-8 text-primary' />
								<p className='text-3xl font-bold text-primary'>{stat.value}</p>
								<p className='font-semibold text-foreground'>{stat.label}</p>
							</div>
						)
					})}
				</div>

				<div>
					<h2 className='mb-6 text-3xl font-bold text-white'>Цели</h2>
					<p className='text-lg leading-relaxed text-muted-foreground'>
						Наша миссия — создать идеальную игровую экосистему, где страсть
						встречается с совершенством. Мы стремимся предоставлять
						инфраструктуру мирового класса, организовывать захватывающие турниры
						и развивать активное сообщество, которое ценит игры во всех их
						проявлениях.
					</p>
				</div>
			</div>
		</AppShell>
	)
}
