import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="mainMenu">
      <h1 className="theHeading">
        Bookstore CMS
      </h1>
      <nav className="options">
        <Link to="/"> [BOOKS] </Link>
        <Link to="Categories"> [CATEGORIES] </Link>
      </nav>
    </div>
  );
}

export default Nav;
