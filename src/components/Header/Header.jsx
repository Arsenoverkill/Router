import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google.png/640px-Google.png"
            alt="LOGO"
          />
          <nav>
            <NavLink to="/">Menu</NavLink>
            <NavLink to="/Order">Order</NavLink>
            <NavLink to="/Admin">Admin</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
