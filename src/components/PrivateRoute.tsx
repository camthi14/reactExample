import React from "react";
import { Navigate } from "react-router-dom";
import { LocalStorage, Paths } from "~/types";

type PrivateRouteProps = {
  children: React.ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const token = localStorage.getItem(LocalStorage.Token);

  if (Boolean(token)) return children;

  return <Navigate to={Paths.Login} />;
};

export default PrivateRoute;
