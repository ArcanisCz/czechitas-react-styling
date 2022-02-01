import React from "react";
import classnames from "classnames";
import css from "./Input.module.css";

export const Input = ({text = "input text", color = "#fffa12"}) => {
  return <input 
  className={classnames(css.input)} 
  style={{border: "1px solid "+color}} 
  value={text}
   />
}
