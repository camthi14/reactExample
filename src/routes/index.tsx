import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import Main from "~/layouts/Main";
import { Loadable, PrivateRoute } from "~/components";
import { ErrorPage } from "~/pages";
import { Paths } from "~/types";

const Home = Loadable(lazy(() => import("~/pages/Home")));
const AddUser = Loadable(lazy(() => import("~/pages/User/AddUser")));
const ListUser = Loadable(lazy(() => import("~/pages/User/ListUser")));
const LoginV2 = Loadable(lazy(() => import("~/pages/LoginV2")));

const router = createBrowserRouter([
  {
    path: Paths.Home,
    element: (
      <PrivateRoute>
        <Main />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: Paths.ListUser,
        element: <ListUser />,
      },
      {
        path: Paths.AddUser,
        element: <AddUser />,
      },
      {
        path: Paths.UpdateUser + "/:userId",
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
