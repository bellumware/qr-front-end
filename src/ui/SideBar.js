import React from "react";
import { createPortal } from "react-dom";
import Backdrop from "./Backdrop";
import sideBarStyle from "./sidebar.module.scss";

const SideBar = ({ openSideBar, onClose, children }) => {
  const closeSideBar = () => {
    onClose();
  };

  return createPortal(
    <>
      {openSideBar && <Backdrop onClick={closeSideBar} />}
      {openSideBar && <div className={sideBarStyle.sidebar}>{children}</div>}
    </>,
    document.getElementById("overlays")
  );
};

export default SideBar;
