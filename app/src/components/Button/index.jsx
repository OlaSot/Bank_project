import React from 'react'
import s from './index.module.css'

export default function Button({text, styles}) {
  return (
    <div className={s.btn} style={styles}>
      {text}
    </div>
  )
}
