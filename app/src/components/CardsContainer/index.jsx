import React from 'react'
import s from './index.module.css'
import { AiOutlineCreditCard, AiOutlineLock } from 'react-icons/ai'
import { SlArrowRight, SlOptions } from 'react-icons/sl'
import { BsSliders2 } from 'react-icons/bs'
import Button from '../Button'

export default function CardsContainer() {

	const remove_styles = {backgroundColor: 'orange'}

	return (
		<div className={s.cards_container}>
			<div className={s.up_text}>
				<p>Cards</p>
				<p><span>Show All</span></p>
			</div>
			<div className={s.card_block}>
				<div className={s.card_img_wrapper}>
					<div className={s.card_img}>
						<div className={s.name_block}>
							<p className={s.name}>Jelly Grande</p>
							<img
								src='https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png'
								alt=''
								className={s.mc_logo}
							/>
						</div>
						<div className={s.card_num_block}>
							<p>0212 4546 5454 8789</p>
							<div className={s.cv_btn}>CVV</div>
						</div>
					</div>
				</div>
			</div>
			<div className={s.cards_info}>
				<div className={`${s.show_card} ${s.card_detail}`}>
					<div className={s.round}>
					<AiOutlineCreditCard className={s.icon} /></div>
					<p>Show Card Details</p>
					<SlArrowRight style={{backgroundColor: 'transparent'}}/>
				</div>
				<div className={`${s.pin} ${s.card_detail}`}>
					<div className={s.round}>

					<SlOptions className={s.icon} /></div>
					<p>Your PIN</p>
					<SlArrowRight style={{backgroundColor: 'transparent'}}/>
				</div>
				<div className={`${s.sec_code} ${s.card_detail}`}>
					<div className={s.round}>

					<AiOutlineLock className={s.icon} /></div>
					<p>Security Code</p>
					<SlArrowRight style={{backgroundColor: 'transparent'}}/>
				</div>
				<div className={`${s.edit} ${s.card_detail}`}>
					<div className={s.round}>
					<BsSliders2 className={s.icon} /></div>
					<p>Edit Limits</p>
					<SlArrowRight style={{backgroundColor: 'transparent'}}/>
				</div>
        <div className={s.btn_container}>
        <Button text={'Add card +'}/>
        <Button text={'Remove -'} styles={remove_styles}/>
      </div>
			</div>

		</div>
	)
}
