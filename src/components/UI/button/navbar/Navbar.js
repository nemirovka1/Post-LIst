import { Link } from "react-router-dom";

const Navbar =()=>{
    return (
      <div className="navbar__links">
        <Link to="/about" className="links"> About </Link>
        <Link to="/post"  className="links"> Post  </Link>
        <Link to="/login" className="links"> Login </Link>
     </div>
    )
}

export default Navbar;