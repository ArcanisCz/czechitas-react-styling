import React from 'react';
import { render } from 'react-dom';
import styled from "styled-components";
import {Button} from "./components/Button";
import './style.css';

const App = () => (
  <div className="container">
    <header>
      <div className="logo"></div>
      <Title>Webová aplikace</Title>
    </header>
    <main>
      <p>Startovací šablona pro webovou aplikaci v Reactu. Vytvořeno pomocí <a href="https://www.npmjs.com/package/create-czechitas-app">create-czechitas-app</a>.</p>
      <Button />
    </main>
    <footer>
      <p>Czechitas, Digitální akademie: Web</p>
    </footer>
  </div>
);

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

render(<App />, document.querySelector('#app'));
