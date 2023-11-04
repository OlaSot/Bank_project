import React from 'react'
import s from './index.module.css'
import Button from '../Button'

export default function Balance({className, balance}) {
  return (
    <div className={`${className} ${s.container}`}>

        <h1>Total Balance</h1>
        <p>{balance}<span>USD</span></p>
        <div className={s.btn_container}>
            <Button text={'Send ↑'}/>
            <Button text={'Request ↓'}/>
            <Button text={'Top Up +'}/>
        </div>
    </div>
  )
}
