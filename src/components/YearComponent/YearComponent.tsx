import { useCallback, useEffect, useState } from 'react'

interface YearProps {
	currentYear: number
}

const YearComponent = ({ currentYear }: YearProps) => {
	const [year, setYear] = useState(currentYear)
	const time = 200 / Math.abs(currentYear - year)

	const run = useCallback(() => {
		if (year < currentYear) {
			return setYear((y: number) => y + 1)
		}
		if (year > currentYear) {
			return setYear((y: number) => y - 1)
		}
	}, [currentYear, year])

	useEffect(() => {
		if (year === currentYear) return
		const inter = setInterval(() => run(), time)
		return () => clearInterval(inter)
	}, [currentYear, run, time, year])

	return <div>{year}</div>
}

export default YearComponent
