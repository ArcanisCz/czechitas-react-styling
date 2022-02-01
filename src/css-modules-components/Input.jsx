import React from "react";
import css from "./Input.module.css";

export const Input = ({text = "input text", error = false}) => {
  if(error){
    return <input className={`${css.input} ${css.error}`} value={text} />
  }

  return <input className={`${css.input}`} value={text} />
}
