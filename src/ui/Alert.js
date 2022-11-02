import React, { useState } from "react";

import alertStyle from "./alert.module.scss";

const alertIcons = {
  success: "task_alt",
  error: "error_outline",
  warning: "warning_amber",
  info: "info_outline",
};

//TODO animate transitio on close or on show
const Alert = ({ type, closeInSeconds, visible, style, children }) => {
  const [showAlert, setShowAlert] = useState(true);
  if (typeof visible === "boolean" && visible) {
    setShowAlert(visible);
  }

  if (typeof closeInSeconds === "number") {
    setTimeout(() => {
      setShowAlert(false);
    }, closeInSeconds * 1000);
  }

  return (
    <>
      {showAlert && (
        <div
          className={`${alertStyle["alert"]} ${alertStyle[type]}`}
          style={style}
        >
          <i className="material-icons">{alertIcons[type]}</i>
          <p>
            {children}
          </p>
        </div>
      )}
    </>
  );
};

export default Alert;
