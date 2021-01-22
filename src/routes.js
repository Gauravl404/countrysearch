import React from "react";
import { Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";

import Teams from "./views/teams";
import Acount from "./views/profile";

const routes = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { path: "home", element: <Teams /> },
      { path: "profile", element: <Acount /> },
      //{ path: "404", element: <NotFoundView /> },
      { path: "/", element: <Navigate to='/home' /> },
      { path: "*", element: <Navigate to='/404' /> },
    ],
  },
];

export default routes;
