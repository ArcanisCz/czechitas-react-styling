import React from "react";

export const Button = ({text = "button", error = false}) => {
  if(error){
    return <button className="button error">{text}aaaa</button>;
  }

  return <button className="button">{text}asdasd</button>;
}
