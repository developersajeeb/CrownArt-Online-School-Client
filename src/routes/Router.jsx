import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../shared/ErrorPage";
import Login from "../pages/Login/Login";
import Registration from "../pages/Register/Registration";
import PrivateRoute from "./PrivateRoute";
import DashboardMain from "../Layout/DashboardMain";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'registration',
            element: <Registration></Registration>
        },
      ],
    },
    {
      path: "dashboard",
      element: <PrivateRoute><DashboardMain></DashboardMain></PrivateRoute>,
      errorElement: <ErrorPage />,
      children: [

      ]
    }
  ]);