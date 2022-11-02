import React from "react";
import backdropStyle from "./backdrop.module.scss";

const Backdrop = ({ onClick }) => {
  return <div className={`${backdropStyle.backdrop}`} onClick={onClick}></div>;
};

export default Backdrop;
