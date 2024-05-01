import React from "react";
import { useContext } from "react";
import "./App.css";
import "./pages/Custom.css";
import AuthProvider, { AuthContext } from "./context/AuthContext";
import MenuRouter from "./Router/Broweserrouter";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthLayout from "./pages/Auth/AuthLayout";
import HomeSec from "./pages/Home";
import ContactUs from "./pages/Common/Contact";
import AboutUs from "./pages/Common/About";
import OtpSec from "./pages/Auth/Otp";
function App() {
  const credential = useContext(AuthContext);
  const routes = createBrowserRouter([
    {
      path: "",
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <HomeSec />,
        },
        {
          path: "otp",
          element: <OtpSec />,
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
      element: "",
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
