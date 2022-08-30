import { NavLink } from "react-router-dom"
import Logo from '../../assets/UMSLogo.png'

const Nav = () => {
  const navBar = document.getElementById('nav')
  
  const toggleNav = () => {
    navBar.classList.toggle('active')
    return
  }
  return(
    <nav className="navigation-bar">
      <NavLink to="/">
        <img id="logo" src={Logo} alt="logo" />
      </NavLink>
      <button  className="toggle-button" onClick={toggleNav} >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div id="nav">
        <ul>
          <li><NavLink className="nav-item" to="/" onClick={toggleNav}>Home</NavLink></li>
          <li><NavLink className="nav-item" to="/About" onClick={toggleNav}>About</NavLink></li>
          <li><NavLink className="nav-item" to="/Services" onClick={toggleNav}>Services</NavLink></li>
          <li><NavLink className="nav-item" to="/Contact" onClick={toggleNav}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav