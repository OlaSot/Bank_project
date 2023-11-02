import React from 'react'
import { Link } from 'react-router-dom'
import { Login } from '../../components/Login'



export default function LoginPage() {
  return (
    <div>
        <h1>Login</h1>
        <Login />
        <p>
            or <Link to='/register'>registration</Link>
        </p>

    </div>
  )
}
