import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ErrorResponses from "../components/error";
import { PublicRoute, ProtectedRoute } from "../config/RouteHandler";
import Layouts from "../layout/Layout";
import Auth from "../pages/Auth";
import { DataRoutes, DataRoutesType } from "./partials/DataRoutes";

// Import the DataRoutes

const renderRoutes = (routes: DataRoutesType[]) => {
  return routes.map((route, index) => {
    return (
      <Route key={index} path={route.path} element={route.element}>
        {route.children && renderRoutes(route.children)}
      </Route>
    );
  });
};

const RouterNavigation: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Auth />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route element={<Layouts />}>{renderRoutes(DataRoutes)}</Route>
      </Route>
      <Route path="*" element={<ErrorResponses />} />
    </Routes>
  );
};

export default RouterNavigation;
