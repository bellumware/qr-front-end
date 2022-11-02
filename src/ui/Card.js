import React from "react";

import cardStyle from "./card.module.scss";

const Card = ({ children, hideCardEffecOnMobile, className, style }) => {
  const hideCardEffect = hideCardEffecOnMobile
    ? cardStyle["hide-card-effect"]
    : "";
  return (
    <div className={`${cardStyle.card} ${hideCardEffect} ${className}`} style={style}>
      {children}
    </div>
  );
};

export const CardTittle = ({ children, className, style }) => {
  return (
    <div className={`${cardStyle["card-title"]} ${className}`} style={style}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className, style }) => {
  return (
    <div className={`${cardStyle["card-content"]} ${className}`} style={style}>
      {children}
    </div>
  );
};

export const CardActions = ({ children, className, style }) => {
  return (
    <div className={`${cardStyle["card-actions"]} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Card;
