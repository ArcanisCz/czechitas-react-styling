import React from "react";
import classnames from "classnames";
import css from "./Input.module.css";

export const Input = ({text = "input text", error = false, success = false, color = "white"}) => {
  return <input
    className={classnames(css.input, {
      [css.error]: error,
      [css.success]: success,
    })}
    style={{background: color}}
    defaultValue={text}
  />
}
