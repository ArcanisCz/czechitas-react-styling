import React from "react";
import "./Input.css";

export const Input = ({text = "input text", error = false}) => {
  if(error){
    return <input className="Input-input Input-error" value={text} />
  }

  return <input className="Input-input" value={text} />
}
