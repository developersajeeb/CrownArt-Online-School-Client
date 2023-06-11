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
import AddClass from "../pages/AddClass/AddClass";
import Classes from "../pages/Classes/Classes";
import ManageUsers from "../pages/ManageUsers/ManageUsers";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
import Instructors from "../pages/Instructors/Instructors";
import MyClasses from "../pages/MyClasses/MyClasses";

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
        {
          path: 'classes',
          element: <Classes></Classes>,
          loader: () => fetch('http://localhost:5000/classes')
        },
        {
          path: '404',
          element: <ErrorPage></ErrorPage>
        },
        {
          path: 'instructors',
          element: <Instructors></Instructors>,
          loader: () => fetch('http://localhost:5000/user-type/instructor')
        }
      ],
    },
    {
      path: "dashboard",
      element: <PrivateRoute><DashboardMain></DashboardMain></PrivateRoute>,
      errorElement: <ErrorPage />,
      children: [
          {
            path: 'add-class',
            element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
          },
          {
            path: 'manage-users',
            element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>,
            loader: () => fetch('http://localhost:5000/users')
          },
          {
            path: 'my-classes',
            element: <MyClasses></MyClasses>
          }
      ]
    }
  ]);