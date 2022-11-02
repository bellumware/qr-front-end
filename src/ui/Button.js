import React from "react";

import buttonStyle from "./button.module.scss";

const getColorStyle = (color) => {
  const colors = { red: buttonStyle.red, yellow: buttonStyle.yellow };
  return colors[color] || "";
};

//TODO support color and loading param
const Button = ({
  children,
  color,
  type,
  onClick,
  endIcon,
  startIcon,
  className,
  style,
  isLoading,
}) => {
  return (
    <button
      className={`${buttonStyle.button} ${getColorStyle(color)} ${className}`}
      onClick={onClick}
      style={style}
      type={type}
    >
      {startIcon && (
        <i className={`material-icons ${buttonStyle["startIcon"]}`}>
          {startIcon}
        </i>
      )}
      <p>{children}</p>
      {endIcon && (
        <i className={`material-icons ${buttonStyle["endIcon"]}`}>{endIcon}</i>
      )}
    </button>
  );
};

export default Button;
