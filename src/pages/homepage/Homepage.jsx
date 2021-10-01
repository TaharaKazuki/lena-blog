import { useLocation } from 'react-router'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './homepage.scss'

const Homepage = () => {
  const location = useLocation()
  console.info('通過 location', location)

  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  )
}

export default Homepage
