import { useSelector } from "react-redux";
import UserHeader from "../../header/UserHeader";
import { NotificationCard } from "../../UIComponent/Cards";
import Footer from "../Common/Footer";
import { Outlet } from "react-router-dom";
const UserLayout = () => {
  const UiState = useSelector((state) => state.UiState);
  return (
    <>
      <header>
        <div className="shadow-sm">
          <div className="container">
            <UserHeader />
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>

      <Footer></Footer>
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

export default UserLayout;
