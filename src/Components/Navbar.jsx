import {Link} from "react-router-dom";
import "./Navbar.css"

function Navbar(){
  return(
    <nav className="navbar">
      <Link to="/" className="nav-links">Home</Link> <span className="separator">| </span><Link className="nav-links" t0="/goals">Goals</Link>
    </nav>
  )
}

export default Navbar;