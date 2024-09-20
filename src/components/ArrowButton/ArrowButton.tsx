import styles from './ArrowButton.module.scss'

interface ButtonProps {
  page: number;
  getPage: (n: number) => void;
  direction: "next" | "prev";
  length?: number;
}

const ArrowButton = ({
  page,
  getPage,
  direction,
  length,
}: ButtonProps) => {
  
  return (
		<>
			{direction === 'prev' ? (
				<button
					disabled={page === 1}
					className={styles.decrement}
					onClick={() => getPage(page - 1)}></button>
			) : (
				<button
					disabled={page === length}
					className={styles.increment}
					onClick={() => getPage(page + 1)}></button>
			)}
		</>
	)
};

export default ArrowButton
