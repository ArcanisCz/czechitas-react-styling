import React from "react";
import styled from "styled-components";
import styles from "./Button.module.css";

// export const Button = () => (
//     <button className={styles.pokus}>aaa</button>
// )

export const Button = () => (
  <StyledButton >aaa</StyledButton>
)

const StyledButton = styled.button`
  color: palevioletred;
`;