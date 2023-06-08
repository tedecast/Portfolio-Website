import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
  const emoji = '\u{2728}'
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1 className="landing-text">
            Hi, <br />
            I'm
            &nbsp;
            <span className="t-logo">T</span>
            <span className='erri'>erri</span>
            <span className='emoji'>{emoji}</span>
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
