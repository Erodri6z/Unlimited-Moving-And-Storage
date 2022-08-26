import { NavLink } from "react-router-dom"

const Nav = () => {
  return(
    <nav>
      <NavLink to="/">Home(Logo)</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/Services">Services</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
    </nav>
  )
}

export default Nav