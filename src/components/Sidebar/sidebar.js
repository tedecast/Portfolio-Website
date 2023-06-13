import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './sidebar.scss'
// import Portrait from '../assets/images/self-portrait.png';
import { Link, NavLink } from 'react-router-dom'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="navbar">
    <Link className="logo" to="/">
      {/* <img src={Portrait} alt="logo" /> */}
    </Link>
    <h1 className="t-logo">T</h1>
    <a href="#" class="toggle-button">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </a>
    <h1 className="tedecast">Tedecast</h1>

    <nav className='navbar-links'>
      <NavLink exact="true" activeClassName="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#ff66ff" />
      </NavLink>
      <NavLink
        exact="true"
        activeClassName="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#ff66ff" />
      </NavLink>
      <NavLink
        exact="true"
        activeClassName="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#ff66ff" />
      </NavLink>

      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/teresa-de-castro/"
        className="linkedin-link"
      >
        <FontAwesomeIcon icon={faLinkedin} color="#ff66ff" />
      </a>

      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/tedecast"
        className="github-link"
      >
        <FontAwesomeIcon icon={faGithub} color="#ff66ff" />
      </a>
    </nav>
  </div>
)
export default Sidebar
