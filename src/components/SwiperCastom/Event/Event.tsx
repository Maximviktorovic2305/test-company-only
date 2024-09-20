import { EventsProps } from '../../../types'
import styles from './Event.module.scss'

interface EventProps {
	props: EventsProps
}

const Event = ({ props }: EventProps) => {
  console.log(props)
	return (
		<div className={styles.event}>
			<div className={styles.year}>{props.year}</div>
			<div className={styles.description}>{props.description}</div>
		</div>
	)
}

export default Event
