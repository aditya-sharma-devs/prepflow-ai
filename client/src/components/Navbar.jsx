import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">Prepflow AI</Link>

      <div className="navbar-links">
        <a href="#features">Features</a>
        <a href="#roadmap">Roadmap</a>
        <Link to="/login">Login</Link>
        <Link to="/signup" className="nav-button">Get Started</Link>
      </div>
    </nav>
  );
}

export default Navbar;