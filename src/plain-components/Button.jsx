import React from "react";
import "./Button.css";

export const Button = ({text = "button", error = false}) => {
  if(error){
    return <button className="button error">{text}</button>;
  }

  return <button className="button">{text}</button>;
}
