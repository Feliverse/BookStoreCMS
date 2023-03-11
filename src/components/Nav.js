import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import '../index.css';

function Nav() {
  return (
    <div className="mainMenu">
      <h1 className="theHeading">
        Bookstore CMS
      </h1>
      <nav className="options">
        <NavLink to="/"> BOOKS </NavLink>
        <NavLink to="Categories"> CATEGORIES </NavLink>
      </nav>
      <div className="navUser"><FaUser /></div>
    </div>
  );
}

export default Nav;
