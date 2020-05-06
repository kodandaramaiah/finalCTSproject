import React from "react";
import { Link } from "react-router-dom";
import booklog from "./booklogo.jpeg";
const NavBar = (props) => {
  return (
    <div>
      <nav className="navbar  navbar-expand-lg navbar-dark bg-success">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" style={{ float: "right" }}>
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <img src={booklog} style={{ width: 150, height: 50 }} />
                <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item ">
              <div class="dropdown show">
                <Link
                  className="nav-link btn btn-secondary dropdown-toggle p-3 mt-2"
                  to="/books"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  to="/books"
                >
                  Categories
                </Link>
              </div>
            </li>

            <li className="nav-item ml-5 mt-3 float-right">
              <Link className="nav-link active" to="/register">
                <h5>
                  <i class="far fa-registered">Register</i>
                </h5>
              </Link>
            </li>
            <li className="nav-item mt-3">
              <Link className="nav-link active" to="/login">
                <h5>
                  <i class="fas fa-sign-in-alt">Login</i>
                </h5>
              </Link>
            </li>
          </ul>
        </div>

        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search Books here"
            aria-label="Search"
          />
          <button class="btn btn-warning my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    </div>
  );
};

export default NavBar;
