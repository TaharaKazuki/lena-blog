import { Link } from "react-router-dom";
import './post.scss'

const Post = ({img}) => {
  return (
    <div className="post">
      <img
        className="post__img"
        src={img}
        alt={`${img}`}
      />
      <div className="post__info">
        <div className="post__cats">
          <span className="post__cat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="post__cat">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </span>
        </div>
        <span className="post__title">
          <Link className="link" to="/post/abc">
            Lorem ipsum dolor sit amet
          </Link>
        </span>
        <hr />
        <span className="post__date">1 hour ago</span>
      </div>
      <div className="post__desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </div>
    </div>
  )
}

export default Post