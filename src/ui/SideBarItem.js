import React from "react";
import { useNavigate } from "react-router-dom";
import itemStyle from "./sidebarItem.module.scss";

const SideBarItem = ({ leftIcon, text, linkTo, onClick }) => {
  const navigate = useNavigate();
  const handleClickItem = () => {
    navigate(linkTo);
    onClick();
  };

  return (
    <div className={itemStyle["sidebar-item"]} onClick={handleClickItem}>
      <i className="material-icons">{leftIcon}</i>
      <p>{text}</p>
    </div>
  );
};

export default SideBarItem;
