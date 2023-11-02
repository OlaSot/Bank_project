import React from 'react'
import s from './index.module.css'
import CardsContainer from '../../components/CardsContainer'
import Balance from '../../components/Balance'
import Referral from '../../components/Referral'
import RecentContacts from '../../components/RecentContacts'
import TransactionHistory from '../../components/TransactionHistory'
import GetMoney from '../../components/GetMoney'
import {useAuth} from '../../hooks/use-auth'
import { useDispatch } from 'react-redux'
import { removeUser } from '../../store/slices/userSlice'


export default function MainPage() {
	const dispatch = useDispatch()
	const {isAuth, email} = useAuth()
	return isAuth ? (
		<div>
			<h1>Welcome</h1>
			<button onClick={() => dispatch(removeUser())}>Log out from {email}</button>
		</div>
	) : (
		<div className={s.container}>
			<div className={s.left_side}>
				<CardsContainer />
				<GetMoney />
			</div>
			<div className={s.right_side}>
				<Balance className={s.item1}/>
				<Referral className={s.item2}/>
				<RecentContacts className={s.item3}/>
				<TransactionHistory className={s.item4}/>
			</div>
		</div>
	)
}
