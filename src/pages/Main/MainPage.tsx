import { useRef, useState } from 'react'
import styles from './MainPage.module.scss'
import YearComponent from '../../components/YearComponent/YearComponent'
import { EventByYearProps } from '../../types'
import ArrowButton from '../../components/ArrowButton/ArrowButton'
import SwiperComponent from '../../components/SwiperCastom/SwiperComponent'
import GithubLink from '../../components/GithubLink/GithubLink'

interface MainPageProps {
	data: EventByYearProps[]
}

const MainPage = ({ data }: MainPageProps) => {
	const [page, setPage] = useState<number>(1)
	const nodeRef = useRef<HTMLDivElement | null>(null)
	const lengthEvent = data.length

	return (
		<div className={styles.main}>
			<GithubLink />
				<div className={styles.body}>
					<h1 className={styles.title}>
						Исторические <br /> даты
					</h1>
					<div className={styles.bodyPagination}>
						<div className={styles.year}>
							<YearComponent currentYear={data[page - 1].firstYear} />
							<YearComponent currentYear={data[page - 1].lastYear} />
						</div>
						<div className={styles.roundPagination}>
							<div className={styles.roundPaginationCircle}>
								{data.map((e: EventByYearProps, i) => (
									<div
										key={i}
										className={styles.inRound}
										style={
											{
												'--deg': `${(i - page) * (360 / lengthEvent)}deg`,
											} as React.CSSProperties
										}>
										<button
											onClick={() => {
												setPage(i + 1)
											}}
											className={
												page === i + 1
													? `${styles.dot} ${styles.active}`
													: `${styles.dot}`
											}>
											<span className={styles.number}>{e.id}</span>
											<span className={styles.name}>{e.name}</span>
										</button>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className={styles.pages}>
					<div>
						<div className={styles.pagesCount}>
							{page < 10 ? `0${page}` : page}/
							{lengthEvent < 10 ? `0${lengthEvent}` : lengthEvent}
						</div>
						<div className={styles.btns}>
							<ArrowButton
								direction='prev'
								page={page}
								getPage={setPage}
								length={lengthEvent}
							/>
							<ArrowButton
								direction='next'
								page={page}
								getPage={setPage}
								length={lengthEvent}
							/>
						</div>
					</div>
					<div className={styles.pagination}>
						{data.map((e, i) => {
							let currentPage = i + 1
							return (
								<button
									key={e.id}
									disabled={page === currentPage}
									className={page === currentPage ? styles.active : ''}
									onClick={() => setPage(currentPage)}></button>
							)
						})}
					</div>
				</div>
				<div className={styles.wrapper}>
					{data[page - 1] && (
						<div ref={nodeRef}>
							<SwiperComponent event={data[page - 1].events} page={page} />
						</div>
					)}
				</div>
		</div>
	)
}

export default MainPage
