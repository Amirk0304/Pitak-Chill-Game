import Link from 'next/link'

export default function Location() {
	return (
		<Link
			href='https://maps.app.goo.gl/FoPBAp4DpfhjiCJh9'
			className='inline-block'
		>
			<div className='cursor-pointer border-1 border-muted-foreground/35 px-2 py-[2px] rounded-[5px] flex items-center gap-2  hover:bg-muted-foreground/40 transition'>
				<span className='text-white font-semibold text-[12px]'> локация:</span>
				<span className='text-accent text-[13px]'>Газалкент</span>
			</div>
		</Link>
	)
}
