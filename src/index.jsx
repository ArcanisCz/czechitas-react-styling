import React from 'react';
import { render } from 'react-dom';
import { Button, Input } from "./plain-components";
import './style.css';

console.log(Button);

const App = () => (
  <div className="container">
    <header>
      <div className="logo"></div>
      <h1>Webová aplikace</h1>
    </header>
    <main>
      <p>Startovací šablona pro webovou aplikaci v Reactu. Vytvořeno pomocí <a href="https://www.npmjs.com/package/create-czechitas-app">create-czechitas-app</a>.</p>
      <div class="layout">
        <Input />
        <Button />
      </div>
    </main>
    <footer>
      <p>Czechitas, Digitální akademie: Web</p>
    </footer>
  </div>
);

render(<App />, document.querySelector('#app'));
