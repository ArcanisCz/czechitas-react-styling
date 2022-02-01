import React from 'react';
import {render} from 'react-dom';
import './style.css';

import {Button, Input} from "./components/plain-components";
// import {Button, Input} from "./components/css-modules-components";
// import {Button, Input} from "./components/styled-components-components";
//  import {Button, Input} from "./components/scss-modules-components";

const App = () => (
  <div className="layout">
    <Input error={true} color="green" />
    <Button error={true} />
  </div>
);

render(<App />, document.querySelector('#app'));
