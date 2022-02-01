import React from "react";
import styled from "styled-components";

export const Input = ({text = "input text", color = "#fffa12"}) => {
  return <StyledInput value={text} borderColor={color} />
}

const StyledInput = styled.input.attrs((props) => ({
  style: {
    color: "blue",
  },
}))`
  border: ${({borderColor}) => `2px solid ${borderColor}`};
`;