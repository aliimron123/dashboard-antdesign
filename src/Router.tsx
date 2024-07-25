import React from "react";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import ErrorResponses from "./components/error";
import Home from "./pages/Home";
import List from "./pages/List";

const Router = () => {
  return (
    <Routers>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<List />} path="/todo-list" />
        <Route element={<ErrorResponses />} path="*" />
      </Routes>
    </Routers>
  );
};

export default Router;
