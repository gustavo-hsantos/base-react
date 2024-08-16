import React from "react";
import "./button.css";

const Button = (props) => {
  const clickButton = () => {
    alert(`A label deste botão é ${props.event}`);
  };
  return (
    <button onClick={clickButton} className="button">
      {props.label}
    </button>
  );
};

export default Button;
