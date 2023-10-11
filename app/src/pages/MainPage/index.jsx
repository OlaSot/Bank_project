import React from 'react'
import s from './index.module.css'
import CardsContainer from '../../components/CardsContainer'
import Balance from '../../components/Balance'
import Referral from '../../components/Referral'
import RecentContacts from '../../components/RecentContacts'
import TransactionHistory from '../../components/TransactionHistory'
import GetMoney from '../../components/GetMoney'

export default function MainPage() {
	return (
		<div className={s.container}>
			<div className={s.left_side}>
				<CardsContainer />
				<GetMoney />
			</div>
			{/* <div className={s.right_side}>
				<Balance />
				<Referral />
				<RecentContacts />
				<TransactionHistory />
			</div> */}
		</div>
	)
}
