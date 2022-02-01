import React from "react";
import "./Input.css";

export const Input = ({text = "input text", error = false, color = "white"}) => {
  if(error){
    return <input className="Input-input Input-error" defaultValue={text} style={{background: color}} />
  }

  return <input className="Input-input" defaultValue={text} />
}
