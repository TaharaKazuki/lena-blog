import './register.scss'


const Register = () => {
  return (
    <div className="register">
      <span className="register__title">Register</span>
      <form className="register__form">
        <label>UserName</label>
        <input className="register__input" type="text" placeholder="Enter you username..." />
        <label>Email</label>
        <input className="register__input" type="text" placeholder="Enter you email..." />
        <label>Password</label>
        <input className="register__input" type="password" placeholder="Enter you password..." />
      </form>
      <button className="register__loginButton">Login</button>
    </div>
  )
}

export default Register