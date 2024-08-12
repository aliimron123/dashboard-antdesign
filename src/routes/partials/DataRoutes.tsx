import React from "react";
import Home from "../../pages/Home";
import List from "../../pages/List";
import Project from "../../pages/Project";

export interface DataRoutesType {
  path: string;
  element?: React.ReactNode;
  children?: DataRoutesType[];
}

export const DataRoutes: DataRoutesType[] = [
  {
    path: "/dashboard",
    element: <Home />,
  },
  {
    path: "/todo-list",
    element: <List />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/",
    element: <Home />, // Add a default element
    children: [
      {
        path: "/subroute", // Define a valid subroute path
        element: <Project />,
      },
    ],
  },
];
