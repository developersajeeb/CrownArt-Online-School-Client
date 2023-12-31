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
import UpdateClass from "../pages/UpdateClass/UpdateClass";
import ManageClasses from "../pages/ManageClasses/ManageClasses";
import MySelectClasses from "../pages/MySelectClasses/MySelectClasses";
import Payment from "../pages/Payment/Payment";

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
          loader: () => fetch('https://assigment-12-server-nu.vercel.app/approved-classes/approve')
        },
        {
          path: '404',
          element: <ErrorPage></ErrorPage>
        },
        {
          path: 'instructors',
          element: <Instructors></Instructors>,
          loader: () => fetch('https://assigment-12-server-nu.vercel.app/user-type/instructor')
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
            loader: () => fetch('https://assigment-12-server-nu.vercel.app/users')
          },
          {
            path: 'my-classes',
            element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
          },
          {
            path: 'my-classes/class/:id',
            element: <InstructorRoute><UpdateClass></UpdateClass></InstructorRoute>,
            loader: ({params}) => fetch(`https://assigment-12-server-nu.vercel.app/class/${params.id}`)
          },
          {
            path: 'manage-classes',
            element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
          },
          {
            path: 'my-enrolled-classes',
            element: <MySelectClasses></MySelectClasses>
          },
          {
            path: 'payment',
            element: <Payment></Payment>
          }
      ]
    }
  ]);