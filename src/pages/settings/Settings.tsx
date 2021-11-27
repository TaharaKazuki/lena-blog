import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings__wrapper">
        <div className="settings__title">
          <span className="settings__title__update">Update Your Account</span>
          <span className="settings__title__delete">Delete Account</span>
        </div>
        <form className="settings__form">
          <label>Profile Picture</label>
          <div className="settings__pp">
            <img src="" alt="" />
            <label htmlFor="fileinput">
              <i className="settings__pp__icon far fa-user-circle"></i>{""}
            </label>
            <input id="fileinput" type="file" style={{ display: "none" }} className="settings__pp__input"/>
          </div>
        <label>Username</label>
        <input type="text" placeholder="Safak" name="name"/>
        <label>Email</label>
        <input type="email" placeholder="safak@gmail.com" name="email"/>
        <label>Password</label>
        <input type="password" placeholder="Password" name="password" />
        <button className="settings__submitButton" type="submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

export default Settings