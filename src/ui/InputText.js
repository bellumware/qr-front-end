import React, { useState } from "react";

import inputStyle from "./inputText.module.scss";

const InputText = ({
  placeholder,
  type,
  value,
  onChange,
  icon,
  isInvalid,
  invalidMessage,
  onFocus,
  onBlur,
}) => {
  const [iconClasses, setIconClasses] = useState("material-icons");

  const handleFocus = (e) => {
    setIconClasses(`material-icons ${inputStyle["icon-focus"]}`);
    onFocus && onFocus(e);
  };

  const handleBlur = (e) => {
    setIconClasses("material-icons");
    onBlur && onBlur(e);
  };

  return (
    <div
      className={`${inputStyle["input-text"]} ${
        isInvalid ? inputStyle["invalid"] : ""
      }
      `}
    >
      {icon && <i className={iconClasses}>{icon}</i>}
      {isInvalid && <label className="invalid-msg">{invalidMessage}</label>}
      <input
        type={type || "text"}
        className={inputStyle["input-field"]}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default InputText;
