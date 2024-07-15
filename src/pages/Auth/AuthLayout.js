import { Outlet, useNavigate } from "react-router-dom";
import DefaultHeader from "../../header/Defaultheader";
import Footer from "../Common/Footer";
import { useSelector } from "react-redux";
import { NotificationCard } from "../../UIComponent/Cards";

const AuthLayout = () => {
  const navigate = useNavigate();
  const uiState = useSelector((state) => state.uiState);
  const isLoading =
    navigate &&
    (navigate.state === "submitting" || navigate.state === "loading");
  return (
    <>
      <header>
        <div className="shadow-sm">
          <div className="container">
            <DefaultHeader />
          </div>
        </div>
      </header>
      <main>
        {isLoading && <p>Loading...</p>}
        <Outlet />
      </main>
      <Footer />
      {uiState.isNotification && (
        <NotificationCard
          showToast={uiState.isNotification}
          message={uiState.message}
          isClosable={true}
          type={uiState.notificationType}
        />
      )}
    </>
  );
};

export default AuthLayout;
