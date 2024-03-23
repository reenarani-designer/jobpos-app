import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";
import { AuthContext } from "../context/AuthContext";
import DefaultHeader from "../header/Defaultheader";
import EmployeeHeader from "../header/Employeeheader";
import EmployerHeader from "../header/Employerheader";
function Container() {
  const { credential } = useContext(AuthContext);
  //console.log(credential);
  return (
    <>
      <header>
        <div className="shadow-sm">
          <div className="container">
            {credential == null && <DefaultHeader></DefaultHeader>}
            {credential !== null && credential.userType == "worker" && 
              <EmployeeHeader></EmployeeHeader> }
               {credential !== null && credential.userType == "employer" && 
              <EmployerHeader></EmployerHeader> }
             
          </div>
        </div>
        <Outlet />
      </header>
      <Footer></Footer>
    </>
  );
}
export default Container;
