import React, { useEffect } from 'react'
import s from './index.module.css'
import CardsContainer from '../../components/CardsContainer'
import Balance from '../../components/Balance'
import Referral from '../../components/Referral'
import RecentContacts from '../../components/RecentContacts'
import TransactionHistory from '../../components/TransactionHistory'
import GetMoney from '../../components/GetMoney'
import { useAuth } from '../../hooks/use-auth'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser, setUser } from '../../store/slices/userSlice'
import { getFirestore } from 'firebase/firestore'
import { doc, getDoc } from "firebase/firestore";


export default function MainPage() {
	const dispatch = useDispatch()
	const { isAuth, email } = useAuth()
	const users = useSelector(state => state.usersData)
	const user = useSelector(state => state.user)


	useEffect(() => {
		const getData = async () => {
			const db = getFirestore();
			const userRef = doc(db, 'users', uid);
			const userSnapshot = await getDoc(userRef);
	
			if (userSnapshot.exists()) {
				const additionalUserData = userSnapshot.data();
				dispatch(setUser(additionalUserData));
			}
		};
	
		if (isAuth) {
			getData();
		}
	}, [isAuth, dispatch]);

	console.log(user)

	return isAuth ? (
		<div>
			<h1>Welcome</h1>
			<button onClick={() => dispatch(removeUser())}>
				Log out from {email}
			</button>
			<div className={s.container}>
			<div className={s.left_side}>
				<CardsContainer />
				<GetMoney />
			</div>
			<div className={s.right_side}>
				<Balance className={s.item1} balance={user.balance} />
				<Referral className={s.item2} />
				<RecentContacts className={s.item3} />
				<TransactionHistory className={s.item4} />
			</div>
		</div>
		</div>
	) : (
		<div className={s.container}>
			<div className={s.left_side}>
				<CardsContainer />
				<GetMoney />
			</div>
			<div className={s.right_side}>
				<Balance className={s.item1} balance={user.balance} />
				<Referral className={s.item2} />
				<RecentContacts className={s.item3} />
				<TransactionHistory className={s.item4} />
			</div>
		</div>
	)
}
