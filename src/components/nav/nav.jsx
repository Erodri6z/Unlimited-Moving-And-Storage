import { NavLink } from "react-router-dom"
import Logo from '../../assets/UMSLogo.png'

const Nav = () => {
  return(
    <nav className="navigation-bar">
      <NavLink to="/">
        <img id="logo" src={Logo} alt="logo" />
      </NavLink>
      <selection id="nav">
        <NavLink className="nav-item" to="/">Home</NavLink>
        <NavLink className="nav-item" to="/About">About</NavLink>
        <NavLink className="nav-item" to="/Services">Services</NavLink>
        <NavLink className="nav-item" to="/Contact">Contact</NavLink>
      </selection>
      
    </nav>
  )
}

export default Nav