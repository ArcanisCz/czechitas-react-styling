import React from "react";
import styled from "styled-components";

export const Input = ({text = "input text", error = false, color = "white"}) => {
  return <StyledInput defaultValue={text} borderColor={color} isError={error} />
}

const StyledInput = styled.input`
  border: ${({isError}) => isError ? `2px solid red` : `2px solid blue`};
  background: ${({borderColor}) => borderColor};
  font-weight: bold;
`;
