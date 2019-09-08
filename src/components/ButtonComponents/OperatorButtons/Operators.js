import React, { useState } from "react";
import OperatorButton from './OperatorButton.js';
import { operators } from '../../../data.js';
import '../../buttons.css';

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operator, setOperator] = useState('')
  return (
    <div class="operators-display">
    	{operators.map((o, i) => {
    		return <OperatorButton o={o} i={i} setOperator={setOperator}/>
    	})}
    </div>
  );
};

export default Operators
