import React from 'react'
import s from './index.module.css'
import ContactsContainer from '../ContactsContainer'


export default function RecentContacts({ className }) {



	return (
		<div className={`${className} ${s.container}`}>
			<div className={s.upper_text}>
				<p>Recent Contacts</p>
				<p className={s.all_contacts}>All contacts</p>
			</div>
			<div className={s.contacts}>
				<ContactsContainer />
			</div>
		</div>
	)
}
