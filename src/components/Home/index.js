import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
// import DisplayPhoto from './DisplayPhoto/displayphoto';
// import DisplayPhoto from './DisplayPhoto'
import Portrait from './../../assets/images/Self-Portrait.png'

const Home = () => {
  const emoji = '\u{2728}'
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['e', 'r', 'r', 'i']
  const jobTitle = "Web Developer"
  const jobArray = jobTitle.split('').map((letter) => letter === ' ' ? '\u00A0' : letter)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1 className="landing-text">
            <span className={`hi-text ${letterClass}`}>H</span>
            <span className={`hi-text ${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I'</span>
            <span className={`${letterClass} _14`}>m</span>
            <span className={`t-logo ${letterClass} _15`}>T</span>
            {nameArray.map((letter, index) => (
              <span
                key={index}
                className={`${letterClass} name-label _${index + 16}`}
              >
                {letter}
              </span>
            ))}
            <span className={`emoji ${letterClass} name-label _20` }>{emoji}</span>
            <br />
          </h1>
         
          <div className="job-title">
          <br />
          {jobArray.map((letter, index) => (
              <span
                key={index}
                className={`${letterClass} name-label _${index + 21}`}
              >
                {letter}
              </span>
            ))}
            <br />
          </div>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <img className="display-photo fade-in" src={Portrait} alt="portrait" />
      </div>
    </>
  )
}

export default Home
