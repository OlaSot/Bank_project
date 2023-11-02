import React, { forwardRef, useState } from 'react'
import DatePicker from 'react-datepicker'
import s from './index.module.css'

export default function Calendar() {
	const [startDate, setStartDate] = useState(null)
	const [endDate, setEndDate] = useState(null)
	const [isOpen, setIsOpen] = useState(true)

	const CustomInput = forwardRef(({ value, onClick }, ref) => (
		<div className={s.container}>
			<input
				placeholder={'Select date range'}
				value={
					startDate && endDate
						? `${startDate.toLocalDateString()} - ${endDate.toLocalDateString()}`
						: ''
				}
			/>
			<button onClick={onClick} ref={ref}>
				{'ADD'}
			</button>
		</div>
	))

	return (
		<div className={s.main_container}>
			<DatePicker
				selected={startDate}
				onChange={dates => {
					const [start, end] = dates
					setStartDate(start)
					setEndDate(end)
					setIsOpen(false)
					console.log(dates)
				}}
				customInput={<CustomInput />}
				isOpen={isOpen}
			/>
		</div>
	)
}
