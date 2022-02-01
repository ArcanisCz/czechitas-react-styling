import React from "react";
import css from "./Button.module.css";

export const Button = ({text = "button", error = false}) => {
  if(error){
    return <button className={`${css.button} ${css.error}`}>{text}</button>;
  }

  return <button className={`${css.button}`}>{text}</button>;
}
