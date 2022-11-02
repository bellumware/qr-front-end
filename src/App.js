import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { NavigationBar } from "./ui";
import { Login } from "./authentication";
import { authActions } from "./authentication";
import { Entities } from "./entity";
function App() {
  const dispatch = useDispatch();
  dispatch(authActions.checkLoginStorage());

  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/entities" element={<Entities />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
