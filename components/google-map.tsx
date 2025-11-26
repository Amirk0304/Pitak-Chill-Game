type GoogleMapComponentProps = {
	center?: { lat: number; lng: number }
	zoom?: number
	markerTitle?: string
}

export default function GoogleMapComponent({
	center = { lat: 41.563959, lng: 69.771365 }, // Газалкент (Gazalkent) coordinates
	zoom = 15,
	markerTitle = 'Pitak Gaming',
}: GoogleMapComponentProps) {
	// Создаём URL для встроенной карты Google Maps
	const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${
		process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''
	}&q=${center.lat},${center.lng}&zoom=${zoom}`

	const hasApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

	return (
		<div
			id='location'
			className='w-full h-[500px] rounded-lg overflow-hidden border-3 border-amber-50 hover:border-amber-400'
		>
			{hasApiKey ? (
				<iframe
					width='100%'
					height='100%'
					style={{ border: 0 }}
					loading='lazy'
					allowFullScreen
					referrerPolicy='no-referrer-when-downgrade'
					src={embedUrl}
					title={markerTitle}
				/>
			) : (
				<iframe
					width='100%'
					height='100%'
					style={{ border: 0 }}
					loading='lazy'
					allowFullScreen
					referrerPolicy='no-referrer-when-downgrade'
					src={`https://maps.google.com/maps?q=${center.lat},${center.lng}&hl=ru&z=${zoom}&output=embed`}
					title={markerTitle}
				/>
			)}
		</div>
	)
}
