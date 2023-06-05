import './index.scss'
// import Portrait from '../assets/images/self-portrait.png';
import { Link } from 'react-router-dom'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      {/* <img src={Portrait} alt="logo" /> */}
    </Link>
    <h1 className="t-logo">T</h1>
    <h1 className="tedecast">Tedecast</h1>
  </div>
)
export default Sidebar
