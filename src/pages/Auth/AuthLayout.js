import { Outlet, useNavigation } from "react-router-dom";
import DefaultHeader from "../../header/Defaultheader";
import Footer from "../Common/Footer";
const AuthLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      <header>
        <div className="shadow-sm">
          <div className="container">
            <DefaultHeader></DefaultHeader>
          </div>
        </div>
        <main>
          {(navigation.state === "submitting" ||
            navigation.state === "loading") && <p>loading</p>}
          <Outlet />
        </main>
      </header>
      <Footer></Footer>
    </>
  );
};

export default AuthLayout;
