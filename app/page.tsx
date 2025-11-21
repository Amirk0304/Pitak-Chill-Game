import AppShell from '@/components/app-shell'
import GalleryCarousel from '@/components/gallery-carousel'
import MapSection from '@/components/map-section/mapSection'
import BannerSection from '@/components/banner/bannerSection'
import MiniNews from '@/components/miniNews'

export default function Home() {
	return (
		<AppShell mainClassName='flex flex-col gap-0'>
			<BannerSection />
			<GalleryCarousel />
			<MiniNews />
			<MapSection />
		</AppShell>
	)
}
