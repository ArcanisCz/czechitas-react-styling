import React from "react";
import styled from "styled-components";

export const Button = ({text = "button", error = false}) => {
  return <StyledButton isError={error}>{text}</StyledButton>;
}

const StyledButton = styled.button`
  border: ${({isError}) => isError ? `2px solid red` : `2px solid blue`};
`;
