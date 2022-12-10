import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Pages/Blogs/Blogs";
import Courses from "../Pages/Courses/Courses";
import CoursesDetails from "../Pages/Courses/CoursesDetails";
import FAQ from "../Pages/Faq/FAQ";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Main from "../Components/Layout/Main";
import PrivateRoutes from "./PrivateRoute";

import { api } from "../api/api.js";
import CheckOut from "../Components/CheckOut/CheckOut";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
        loader: () => fetch(`${api}/courses`),
      },
      {
        path: "/courses/:id/checkout",
        element: (
          <PrivateRoutes>
            <CheckOut />
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`${api}/courses/${params.id}`),
      },
      {
        path: "/courses/:id",
        element: <CoursesDetails />,
        loader: ({ params }) => fetch(`${api}/courses/${params.id}`),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
