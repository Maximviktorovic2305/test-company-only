import { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { FreeMode, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Event from './Event/Event'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { EventsProps } from '../../types'
import styles from './SwiperComponent.module.scss'

interface SwiperCastomProps {
	event: EventsProps[]
	page: number
}

const SwiperComponent = ({ event, page }: SwiperCastomProps) => {
	const navPrevEl = useRef<HTMLButtonElement>(null)
	const navNextEl = useRef<HTMLButtonElement>(null)
	const swiperRef = useRef<HTMLDivElement>(null)

	return (
		<div className={styles.swiperConteiner}>
			<CSSTransition
				nodeRef={swiperRef}
				in={true}
				appear={true}
				timeout={500}
				classNames='anim'
				key={page}>
				<div ref={swiperRef} key={page}>
					<Swiper
						breakpoints={{
							0: { spaceBetween: 10, slidesPerView: 1.4 },
							769: { spaceBetween: 20, slidesPerView: 2 },
							1024: {
								spaceBetween: 30,
								slidesPerView: 3,
							},
						}}
						navigation={{
							prevEl: navPrevEl.current,
							nextEl: navNextEl.current,
						}}
						onSwiper={(swiper: any) => {
							setTimeout(() => {
								const navigation = swiper.params.navigation
								navigation.nextEl = navNextEl.current
								navigation.prevEl = navPrevEl.current
								swiper.navigation.destroy()
								swiper.navigation.init()
								swiper.navigation.update()
							})
						}}
						grabCursor
						freeMode={true}
						modules={[FreeMode, Navigation]}
						className={styles.swiperConteiner}>
						{event.map(e => (
							<SwiperSlide key={e.year}>
								<Event props={e} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</CSSTransition>
			<button className={styles.buttonPrev} ref={navPrevEl}></button>
			<button className={styles.buttonNext} ref={navNextEl}></button>
		</div>
	)
}

export default SwiperComponent
