import React from "react";
import "./Buttons.css";

function ButtonComp({
  label,
  onClick,
  backgroundColor,
  borderColor,
  fontColor,
}) {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    color: fontColor,
  };

  return (
    <button className="rounded-button" onClick={onClick} style={buttonStyle}>
      {label}
    </button>
  );
}

export default ButtonComp;
