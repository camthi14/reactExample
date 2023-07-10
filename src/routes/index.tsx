import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "~/Layouts/Main";
import Loadable from "~/components/Loadable";
import { ErrorPage } from "~/pages";
import { Paths } from "~/types";

const Home = Loadable(lazy(() => import("~/pages/Home")));
const AddUser = Loadable(lazy(() => import("~/pages/AddUser")));
const LoginV2 = Loadable(lazy(() => import("~/pages/LoginV2")));

const router = createBrowserRouter([
  {
    path: Paths.Home,
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: Paths.AddUser,
        element: <AddUser />,
      },
    ],
  },
  {
    path: Paths.Login,
    element: <LoginV2 />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
