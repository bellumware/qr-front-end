import React from "react";
import itemStyle from "./sidebarItem.module.scss";

const SideBarItem = ({ leftIcon, text, linkTo }) => {
  return (
    <div className={itemStyle["sidebar-item"]}>
      <i className="material-icons">{leftIcon}</i>
      <p>{text}</p>
    </div>
  );
};

export default SideBarItem;
