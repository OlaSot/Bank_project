import React from 'react'
import s from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'


export default function Referral({ className }) {
	return (
		<div className={`${className} ${s.container}`}>
			<p>
				Invite a friend with code below and redeem specioal bonus USD 15 from
				us!
			</p>
			<div className={s.promocode_container}>
        <p>JELLYPONYA-SEP2023</p>
        <button className={s.copy_btn}><FontAwesomeIcon icon={faCopy} /></button>
      </div>
		</div>
	)
}
