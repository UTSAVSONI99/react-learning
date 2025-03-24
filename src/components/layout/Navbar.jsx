import { Link, NavLink } from "react-router-dom";

// import Navbar from "./Navbar";

const Navbar = () => {
  return (
    <div className="navbar_start">
      <nav className="navbar navbar-expand-lg  p-4">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Brand
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <Link className="btn btn-outline-primary" to="/user/add">
            Add User
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
