import React, { useEffect, useState } from 'react'
import s from './index.module.css'
import { getUsers } from '../../requests/users_req'
import Contact from '../Contact'

export default function ContactsContainer() {
	const [users, setUsers] = useState([])

	useEffect(() => getUsers(setUsers), [])


	return (
		<div className={s.container}>
            <div className={s.add_btn_container}>
			<div className={s.add_btn}>
                <p>+</p>
            </div>
            <p>Add</p>
            </div>
			{users.map(el => (
				<Contact key={el.id} {...el} />
			))}
		</div>
	)
}
