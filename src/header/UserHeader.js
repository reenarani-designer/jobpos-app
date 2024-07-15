import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/slices/Auth";

function UserHeader() {
  const authDetails = useSelector((state) => state.auth);
  const userDetails = authDetails.userData;
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    dispatch(authActions.logout());
    navigator(".");
  };
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
            <li className="nav-item dropdown">
              <Link
                to="/"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                For Employee
              </Link>
              <ul className="dropdown-menu dropdown-menu-lg-end">
                <li>
                  <Link className="dropdown-item" to="/user/jobs">
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/user/applied-jobs">
                    Applied Jobs
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                to="/"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                For Employer
              </Link>
              <ul className="dropdown-menu dropdown-menu-lg-end">
                <li>
                  <Link className="dropdown-item" to="/user/post-job">
                    Post Jobs
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/user/posted-jobs">
                    Your Posted Jobs
                  </Link>
                </li>
              </ul>
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
                      alt={userDetails.name}
                      title={userDetails.name}
                    />
                    {userDetails.name ? userDetails.name : "Hi There"}
                  </>
                )}
              </Link>
              <ul className="dropdown-menu dropdown-menu-lg-end">
                <li>
                  <Link className="dropdown-item" to="/user/profile">
                    Update Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/employeeprofile">
                    Change Language
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" onClick={logout}>
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
export default UserHeader;
