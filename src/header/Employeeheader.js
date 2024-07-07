import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "./logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function EmployeeHeader() {
  const authDetails = useSelector((state) => state.auth);
  const userDetails = authDetails.userData;
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light">
        <Link to=".">
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
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {userDetails && (
                  <>
                    <img
                      src={userDetails.profile.url}
                      className="img-fluid rounded-circle border user_img me-1"
                    />
                    {userDetails.name ? userDetails.name : "Hi There"}
                  </>
                )}
              </Link>
              <ul className="dropdown-menu dropdown-menu-lg-end">
                <li>
                  <a className="dropdown-item" href="/employeeprofile">
                    Update Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/employeeprofile">
                    Change Language
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default EmployeeHeader;
