import {Link} from "react-router-dom";

function Navbar(){
  return(
    <nav>
      <Link to="/">Home</Link> | <Link t0="/goals">Goals</Link>
    </nav>
  )
}

export default Navbar;