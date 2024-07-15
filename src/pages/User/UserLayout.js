import { useSelector } from "react-redux";
import UserHeader from "../../header/UserHeader";
import { NotificationCard } from "../../UIComponent/Cards";
import Footer from "../Common/Footer";
import { Outlet } from "react-router-dom";
const UserLayout = () => {
  const uiState = useSelector((state) => state.uiState);
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

export default UserLayout;
