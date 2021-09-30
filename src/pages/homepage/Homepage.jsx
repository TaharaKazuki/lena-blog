import { useLocation } from "react-router";
import Header from '../../components/header/Header'

const Homepage = () => {
  const location = useLocation()
  console.info('通過 location', location)

  return (
    <>
      <Header />
      <div className="home">

      </div>
    </>
  )
}

export default Homepage