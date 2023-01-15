import "./Button.css";
import React from "react";

function Button(props) {
  return (
    <button className="btn" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
