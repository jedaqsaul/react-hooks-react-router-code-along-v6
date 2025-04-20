import { NavLink } from "react-router-dom";
import "./NavBar.css";

// define the Nav bar component
function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        // add styling to Navlink
        className="nav-link"
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        // add styling to Navlink
        className="nav-link"
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        // add styling to Navlink
        className="nav-link"
      >
        Login
      </NavLink>
    </nav>
  );
}

export default NavBar;
