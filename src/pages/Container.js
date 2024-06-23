import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Outlet, Link } from "react-router-dom";
import Footer from "./Common/Footer";
import DefaultHeader from "../header/Defaultheader";
import EmployeeHeader from "../header/Employeeheader";
import EmployerHeader from "../header/Employerheader";
function Container() {
  const authDetails = useSelector((state) => state.auth);
  const userDetails = authDetails.userData;
  return (
    <>
      <header>
        <div className="shadow-sm">
          <div className="container">
            {userDetails === null && <DefaultHeader></DefaultHeader>}
            {userDetails !== null && userDetails.userType == "worker" && (
              <EmployeeHeader></EmployeeHeader>
            )}
            {userDetails !== null && userDetails.userType == "employer" && (
              <EmployerHeader></EmployerHeader>
            )}
          </div>
        </div>
        <Outlet />
      </header>
      <Footer></Footer>
    </>
  );
}
export default Container;
