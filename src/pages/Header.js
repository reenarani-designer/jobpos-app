import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "./logo.png";
import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";

function HeaderSec() {
  return (
    <>
    <header>
      <div className="shadow-sm">
        <div className="container">
          <nav className="navbar navbar-expand-sm navbar-light">
           
            <Link to="."> <img src={logo} alt="logo" className="img-flud logo" /></Link>
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
                  <Link to="/jobSearch" className="nav-link">
                    Search Job
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/employer" className="nav-link">
                    For Employer
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="btn btn-primary">
                    Login/Signup
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <Outlet />
    </header>
    <Footer></Footer>
    </>
  );
}
export default HeaderSec;
