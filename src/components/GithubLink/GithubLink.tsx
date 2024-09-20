import { useState } from 'react'
import styles from './GithubLink.module.scss'

const GithubLink = () => {
	const [isShown, setIsShown] = useState(false)

	return (
		<div className={styles.githubWrapper}>
			<a
				onMouseOver={() => setIsShown(true)}
				onMouseLeave={() => setIsShown(false)}
				href='https://github.com/Maximviktorovic2305/test-company-only'
				target='_blank'
				rel='noreferrer'>
				<img src='github.svg' alt='github' className={styles.githubImg} />
			</a>
			{isShown && (
				<span className={styles.githubPopup}>Ссылка на github проекта</span>
			)}
		</div>
	)
}

export default GithubLink
