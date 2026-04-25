import { Link } from 'react-router';
import './index.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navContainer">
        <Link to="/" className="logo">

          <p>User Dashboard</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
