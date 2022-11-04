import React from "react";
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { NavigationBar } from "./ui";
import { Login } from "./authentication";
import { authActions } from "./authentication";
import { Entities, Entity } from "./entity";
import Home from "./Home";
import { PageNotFound } from "./common";
function App() {
  const dispatch = useDispatch();
  dispatch(authActions.checkLoginStorage());

  const AppRoutes = () =>
    useRoutes([
      { path: "/login", element: <Login /> },
      { path: "/entities", element: <Entities /> },
      { path: "/entity/:entityId", element: <Entity /> },
      { path: "/entity", element: <Entity /> },
      { path: "/home", element: <Home /> },
      { path: "/", element: <Home /> },
      { path: "*", element: <PageNotFound /> },
    ]);

  return (
    <BrowserRouter>
      <NavigationBar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
