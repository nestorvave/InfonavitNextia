import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav flex-center">
      <div className="nav__section">
        <Link className="nav__section--link" to="/home/search">BÚSQUEDA</Link>
        <Link className="nav__section--link" to="/home/benefits">BENEVITS</Link>
      </div>
      <p>SOCIOINFONAVIT</p>
    </nav>
  );
};
export default NavBar;
