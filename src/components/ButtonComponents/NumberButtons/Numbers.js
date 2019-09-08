import React, { useState } from "react";
import { numbers } from '../../../data.js';
import NumberButton from './NumberButton.js';

const Numbers = () => {
  // STEP 2 - add the imported data to state

  const [number, setNumber] = useState(0);

  return (
    <div>
       {numbers.map((n, i) => {
       	return <NumberButton n={n} i={i} setNumber={setNumber}/>
       })}
    </div>
  );
};

export default Numbers