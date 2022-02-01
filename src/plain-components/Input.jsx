import React from "react";

export const Input = ({text = "input text", error = false}) => {
  if(error){
    return <input className="input error" value={text} />
  }

  return <input className="input" value={text} />
}
