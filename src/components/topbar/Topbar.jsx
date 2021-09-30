import React from 'react'
import { Link } from 'react-router-dom'
import './topbar.scss'

const Topbar = () => {
  const user = true
  return (
    <div className="top">
      <div className="top__left">
        <i className="top__icon fab fa-facebook-square" />
        <i className="top__icon fab fa-instagram-square" />
        <i className="top__icon fab fa-pinterest-square" />
        <i className="top__icon fab fa-twitter-square" />
      </div>
      <div className="top__center">
        <ul className="top__list">
          <li className="top__listItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="top__listItem">ABOUT</li>
          <li className="top__listItem">CONTACT</li>
          <li className="top__listItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="top__listItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="top__right">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="top__img"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="top__listItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="top__listItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="top__searchIcon fas fa-search"></i>
      </div>
      
    </div>
  )
}

export default Topbar
