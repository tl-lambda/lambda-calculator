import React, { useState } from "react";
import "./App.css";

import Numbers from './components/ButtonComponents/NumberButtons/Numbers.js';
import Specials from './components/ButtonComponents/SpecialButtons/Specials.js';
import Operators from './components/ButtonComponents/OperatorButtons/Operators.js';

// Logo has already been provided for you. Do the same for the remaining components
import Display from "./components/DisplayComponents/Display";

function App() {

  return (
    <div className="container">
      <Display/>
      <div className="buttons-display">
        <div>
          <Specials />
          <Numbers />
        </div>
        <Operators />
      </div>
    </div>
  );
}

export default App;
