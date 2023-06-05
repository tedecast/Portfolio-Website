import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
// import Portrait from '../assets/images/self-portrait.png';
import { Link, NavLink } from 'react-router-dom'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      {/* <img src={Portrait} alt="logo" /> */}
    </Link>
    <h1 className="t-logo">T</h1>
    <h1 className="tedecast">Tedecast</h1>

    <nav>
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
    </nav>
  </div>
)
export default Sidebar;
