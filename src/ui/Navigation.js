import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navigation.scss";
import SideBar from "./SideBar";
import SideBarItem from "./SideBarItem";

const Navigation = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <>
      <header className="main-header">
        <div className="main-header__left_side">
          <button
            className="toggle-side-bar-btn"
            onClick={() => setOpenSideBar(true)}
          >
            <i className="material-icons">menu</i>
          </button>
          <h2>QR APP</h2>
        </div>
        <nav className="main-nav">
          <ul className="main-nav__items">
            <li className="main-nav__item">
              <Link to="/login">
                <i className="material-icons">person</i>
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <SideBar openSideBar={openSideBar} onClose={() => setOpenSideBar(false)}>
        <SideBarItem leftIcon="person" text="Login" linkTo="/" />
        <SideBarItem leftIcon="home" text="Home" linkTo="/" />
        <SideBarItem leftIcon="home" text="Entities" linkTo="/entities" />
      </SideBar>
      <div className="header-space" />
    </>
  );
};

export default Navigation;
