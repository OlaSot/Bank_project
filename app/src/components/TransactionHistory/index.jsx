import React from 'react'
import s from './index.module.css'
import "react-datepicker/dist/react-datepicker.css";
import Calendar from '../Calendar';

export default function TransactionHistory({ className }) {
	return (
		<div className={`${className} ${s.container}`}>
			<div className={s.upper_block}>
				<p>Transaction History</p>
				<div className={s.calendar}>
            {/* <Calendar /> */}
        </div>
			</div>
		</div>
	)
}
