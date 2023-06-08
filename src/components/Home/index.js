import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'

const Home = () => {
  const emoji = '\u{2728}'
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['e', 'r', 'r', 'i']

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1 className="landing-text">
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I'</span>
            <span className={`${letterClass} _14`}>m</span>
            <span className="t-logo">T</span>
            {nameArray.map((letter, index) => (
              <span
                key={index}
                className={`${letterClass} erri _${index + 15}`}
              >
                {letter}
              </span>
            ))}
            <span className="emoji">{emoji}</span>
            <br />
          </h1>
          <h2>Web Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
