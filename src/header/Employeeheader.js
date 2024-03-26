import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "./logo.png";
import { Outlet, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function EmployeeHeader() {
  const credential = useContext(AuthContext);
  //console.log(credential.credential.profile.url);
  //console.log(credential);
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light">
        <Link to=".">
          {" "}
          <img src={logo} alt="logo" className="img-flud logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/alljobs" className="nav-link">
                Jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                Employee Header
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-item"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                 {credential.credential.name}
              </Link>
              <ul className="dropdown-menu dropdown-menu-lg-end">
                <li>
                  <a className="dropdown-item" href="#">
                    {<img
                      src={credential.credential.profile.url}
                      className="img-fluid rounded-circle border user_img me-1"
                    /> }
                    {credential.credential.name}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/employeeprofile">
                    Update Profile
                  </a>
                </li>
              </ul>
            </li>

            <div className="dropdown ms-2">
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-translate"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z" />
                  <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31" />
                </svg>
              </button>
              <ul className="dropdown-menu dropdown-menu-lg-end">
                <li>
                  <a className="dropdown-item" href="#">
                    English
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Hindi
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default EmployeeHeader;
