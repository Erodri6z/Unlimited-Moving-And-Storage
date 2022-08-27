import { NavLink } from "react-router-dom"
import Logo from '../../assets/UMSLogo.png'

const Nav = () => {
  return(
    <nav className="navigation-bar">
      <NavLink id='logo' to="/">
        <img src={Logo} alt="logo" />
        </NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/Services">Services</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
    </nav>
  )
}

export default Nav