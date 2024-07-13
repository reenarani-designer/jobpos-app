import UserHeader from "../../header/UserHeader";
import Footer from "../Common/Footer";
import { Outlet } from "react-router-dom";
const UserLayout = () => {
  return (
    <>
      <header>
        <div className="shadow-sm">
          <div className="container">
            <UserHeader />
          </div>
        </div>
        <Outlet />
      </header>
      <Footer></Footer>
    </>
  );
};

export default UserLayout;
