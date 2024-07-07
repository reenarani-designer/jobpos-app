import React, { useEffect } from "react";
import "./App.css";
import "./pages/Custom.css";
import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom";
import AuthLayout from "./pages/Auth/AuthLayout";
import HomeSec from "./pages/Home";
import ContactUs from "./pages/Common/Contact";
import AboutUs from "./pages/Common/About";
import OtpSec, { otpAction } from "./pages/Auth/Otp";
import { loginAction } from "./pages/Auth/loginBlock";
import EmployeeLayout from "./pages/Employee/EmployeeLayout";
import EmployerProfile from "./pages/Employee/Employeeprofile";
import { gotoUnauthPage, gotoEmployeePage } from "./util/Common";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./store/actions/Auth";
import { authActions } from "./store/slices/Auth";
import LoadingEffect from "./pages/Loadingeffect";
function App() {
  const dispatcher = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  useEffect(() => {
    dispatcher(getUser());
  }, []);
  if (isLoading) {
    return (
      <LoadingEffect />
    );
  }
  const routes = createBrowserRouter([
    {
      path: "",
      element: <AuthLayout />,
      loader: gotoEmployeePage,
      children: [
        {
          index: true,
          element: <HomeSec />,
          action: loginAction,
        },
        {
          path: "otp",
          element: <OtpSec />,
          id: 'otp',
          action: async (meta) => {
            const res = await otpAction(meta);
            if (res && res.success) {
              dispatcher(authActions.login({ userData: res.userData }));
              return redirect('/employee')
            }
            return null;
          },
        },
        {
          path: "contact",
          element: <ContactUs />,
        },
        {
          path: "about",
          element: <AboutUs />,
        },
      ],
    },
    {
      path: "/employee",
      element: <EmployeeLayout />,
      loader: gotoUnauthPage,
      children: [
        {
          index: true,
          element: <EmployerProfile />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
