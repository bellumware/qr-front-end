import React from "react";

import contentStyle from "./content.module.scss";

const Content = ({ children, className, style }) => {
  return <div className={`${contentStyle.content} ${className}`} style={style}>{children}</div>;
};

export default Content;
