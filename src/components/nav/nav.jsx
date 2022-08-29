import { NavLink } from "react-router-dom"
import Logo from '../../assets/UMSLogo.png'

const Nav = () => {
  const navBar = document.getElementById('nav')
  
  const toggleNav = (e) => {
    navBar.classList.toggle('active')

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
          <li><NavLink className="nav-item" to="/">Home</NavLink></li>
          <li><NavLink className="nav-item" to="/About">About</NavLink></li>
          <li><NavLink className="nav-item" to="/Services">Services</NavLink></li>
          <li><NavLink className="nav-item" to="/Contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav