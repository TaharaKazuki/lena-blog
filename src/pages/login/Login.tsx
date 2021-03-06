import React from 'react'

const Login = () => {

  return (
    <div className="login">
      <span className="login__title">Login</span>
      <form className="login__form">
        <label>Email</label>
        <input className="login__input" type="text" placeholder="Enter your email..."/>
        <label>Password</label>
        <input className="login__input" type="password" placeholder="Enter your password..."/>
        <button className="login__button">Login</button>
      </form>
        <button className="login__registerButton">Register</button>
    </div>
  )

}

export default Login