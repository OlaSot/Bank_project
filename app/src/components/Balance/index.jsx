import React from 'react'
import s from './index.module.css'
import Button from '../Button'

export default function Balance({className}) {
  return (
    <div className={className}>
        <h1>Total Balance</h1>
        <p>29,475.00 <span>USD</span></p>
        <div className={s.btn_container}>
            <Button>Send</Button>
            <Button>Request</Button>
            <Button>Top Up</Button>
        </div>
    </div>
  )
}
