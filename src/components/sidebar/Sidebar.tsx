import { Link } from 'react-router-dom'
import './sidebar.scss'

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <span className="sidebar__title">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt="sampleImage"
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__title">CATEGORIES</span>
        <ul className="sidebar__list">
          <li className="sidebar__listItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebar__listItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebar__listItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebar__listItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebar__listItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__title">FOLLOW US</span>
        <div className="sidebar__social">
          <i className="sidebar__icon fab fa-facebook-square"></i>
          <i className="sidebar__icon fab fa-instagram-square"></i>
          <i className="sidebar__icon fab fa-pinterest-square"></i>
          <i className="sidebar__icon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
