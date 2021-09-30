import { useLocation } from "react-router";
import Header from '../../components/header/Header'
import Posts from "../../components/posts/Posts";

const Homepage = () => {
  const location = useLocation()
  console.info('通過 location', location)

  return (
    <>
      <Header />
      <div className="home">
        <Posts />
      </div>
    </>
  )
}

export default Homepage