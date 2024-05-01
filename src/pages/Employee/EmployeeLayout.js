import EmployeeHeader from "../../header/Employeeheader";
import Footer from "../Common/Footer";
import { Outlet } from "react-router-dom";
const EmployeeLayout = () => {
  return (
    <>
      <header>
        <div className="shadow-sm">
          <div className="container">
            <EmployeeHeader></EmployeeHeader>
          </div>
        </div>
        <Outlet />
      </header>
      <Footer></Footer>
    </>
  );
};

export default EmployeeLayout;
