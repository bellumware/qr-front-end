import React from "react";

import loaderStyle from "./loader.module.scss";

const Loader = ({ size, style }) => {
  style = {
    width: `${size}rem`,
    height: `${size}rem`,
    border: `${size * 0.18}rem solid #f3f3f3`,
    borderTop: `${size * 0.18}rem solid ${loaderStyle["main-color"]}`,
    ...style,
  };
  return <div className={loaderStyle.loader} style={style}></div>;
};

export default Loader;
