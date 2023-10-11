import React from 'react'
import s from './index.module.css'
import {Link} from 'react-router-dom'

export default function Header() {
	return (
		<div className={s.container}>
			<div className={s.user}>
				<img src='/logo.png' alt='' className={s.logo} />
				<div className={s.welcome}>
					<p>
						Welcome back, <span>Jelly!</span>
					</p>
					<div className={s.avatar}>
						<img src='/3683.webp' />
					</div>
				</div>
			</div>
			<div className={s.menu}>
				<Link to='/'>Summary</Link>
				<Link to='/cards'>Cards</Link>
				<Link to='/activity'>Activity</Link>
				<Link to='/recipients'>Recipients</Link>
				<Link to='/help'>Help Center</Link>
				<Link to='/gifts'>Earn Gifts</Link>
			</div>
		</div>
	)
}
