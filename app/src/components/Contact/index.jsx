import React from 'react'
import s from './index.module.css'

export default function Contact({image, firstName, lastName}) {

    const lastName_letter = lastName[0]

  return (
    <div className={s.container}>
        <div className={s.avatar}>
           <img src={image} alt="" /> 
        </div>
        <p className={s.name}>{firstName} {lastName_letter}</p>
    </div>
  )
}
