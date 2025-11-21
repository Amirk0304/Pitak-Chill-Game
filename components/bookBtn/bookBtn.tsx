import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function BookBtn() {
	return (
		<Link
			href='/contacts'
			className='w-full bg-primary text-primary-foreground py-[8px] rounded-[8px]  mb-8 hover:bg-primary/90 transition flex items-center justify-center gap-2'
		>
			Забронировать
			<div className='flex items-center justify-center ml-5 rounded-[7px] w-8 h-8 bg-black'>
				<ArrowRight size={20} color='yellow' />
			</div>
		</Link>
	)
}
