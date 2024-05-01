import { Outlet } from "react-router-dom";
import DefaultHeader from "../../header/Defaultheader";
import Footer from "../Common/Footer";
const AuthLayout = () => {
  return (
    <>
      <header>
        <div className="shadow-sm">
          <div className="container">
            <DefaultHeader></DefaultHeader>
          </div>
        </div>
        <main>
          <Outlet />
        </main>
      </header>
      <Footer></Footer>
    </>
  );
};

export default AuthLayout;
