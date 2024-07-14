import { Outlet, useNavigate } from "react-router-dom";
import DefaultHeader from "../../header/Defaultheader";
import Footer from "../Common/Footer";
import { useSelector } from "react-redux";
import { NotificationCard } from "../../UIComponent/Cards";

const AuthLayout = () => {
  const navigate = useNavigate();
  const UiState = useSelector((state) => state.UiState);
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
      {UiState.isNotification && (
        <NotificationCard
          showToast={UiState.isNotification}
          message={UiState.message}
          isClosable={true}
          type={UiState.notificationType}
        />
      )}
    </>
  );
};

export default AuthLayout;
