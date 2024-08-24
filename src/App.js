import React, { useEffect } from "react";
import "./App.css";
import "./pages/Custom.css";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import AuthLayout from "./pages/Auth/AuthLayout";
import HomeSec from "./pages/Home";
import ContactUs from "./pages/Common/Contact";
import AboutUs from "./pages/Common/About";
import OtpSec, { otpAction } from "./pages/Auth/Otp";
import { loginAction } from "./pages/Auth/Login";
import UserLayout from "./pages/User/UserLayout";
import UserProfile from "./pages/User/UserProfile";
import { gotoUnauthPage, gotoEmployeePage } from "./util/Common";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./store/actions/Auth";
import { authActions } from "./store/slices/Auth";
import LoadingEffect from "./pages/Loadingeffect";
import { getSkills } from "./store/actions/Skills";
import AddJob from "./pages/Jobs/Addjob";
import Alljobs from "./pages/Jobs/Alljobs";
import UserDashboard from "./pages/User/UserDashboard";
import PostedJobs from "./pages/Jobs/PostedJobs";
import JobDetails from "./pages/Jobs/JobDetails";
import AppliedJobs from "./pages/Jobs/Appliedjobs";

function App() {
  const dispatch = useDispatch(); // Renamed from dispatcher for clarity
  const isLoading = useSelector((state) => state.auth.isLoading);
  const isSkillsLoading = useSelector((state) => state.skills.isLoading);

  useEffect(() => {
    dispatch(getUser());
    dispatch(getSkills());
  }, [dispatch]); // Added dispatch as a dependency

  if (isLoading || isSkillsLoading) {
    return <LoadingEffect />;
  }

  const routes = createBrowserRouter([
    {
      path: "",
      element: <AuthLayout />,
      loader: gotoEmployeePage,
      children: [
        {
          index: true, // Ensure this is placed correctly if needed
          element: <HomeSec />,
          action: loginAction,
        },
        {
          path: "otp",
          element: <OtpSec />,
          id: "otp",
          action: async (meta) => {
            const res = await otpAction(meta);
            if (res && res.success) {
              dispatch(authActions.login({ userData: res.userData }));
              return redirect("/user");
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
      path: "/user",
      element: <UserLayout />,
      loader: gotoUnauthPage,
      children: [
        {
          index: true, // Ensure this is placed correctly if needed
          element: <UserDashboard />,
        },
        {
          path: "profile",
          element: <UserProfile />,
        },
        {
          path: "jobs",
          element: <Alljobs />,
        },
        {
          path: "job/:id",
          element: <JobDetails />,
        },
        {
          path: "post-job",
          element: <AddJob />,
        },
        {
          path: "edit-job/:id",
          element: <AddJob />,
        },
        {
          path: "posted-jobs",
          element: <PostedJobs />,
        },
        {
          path: 'applied-jobs',
          element: <AppliedJobs />
        }
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
