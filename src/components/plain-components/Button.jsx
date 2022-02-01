import React from "react";
import "./Button.css";

export const Button = ({text = "button", error = false}) => {
  if(error){
    return <button className="Button-button Button-error">{text}</button>;
  }

  return <button className="Button-button">{text}</button>;
}
