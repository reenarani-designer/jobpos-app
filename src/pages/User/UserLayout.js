import { useSelector } from "react-redux";
import UserHeader from "../../header/UserHeader";
import { NotificationCard } from "../../UIComponent/Cards";
import Footer from "../Common/Footer";
import { Outlet } from "react-router-dom";
const UserLayout = () => {
  const UiState = useSelector((state) => state.UiState);
  console.log(UiState);
  return (
    <>
      <header>
        <div className="shadow-sm">
          <div className="container">
            <UserHeader />
          </div>
        </div>
      </header>
      <Outlet />
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
