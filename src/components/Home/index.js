import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1 className="eresa">
            Hi, <br/>I'm
            <span className="t-logo">T</span>
            <span className="eresa">eresa</span>
            <br />
          </h1>
          <h2>Full-Stack Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
