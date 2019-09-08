import React from "react";
import '../../buttons.css';

const OperatorButton = ({o, i, setOperator}) => {
  return (
  	<button 
  		key={i} 
  		class="button-display" 
  		style={{backgroundColor: "#0072ff"}}
  		onClick={() => setOperator(o.value)}
  	>
  		{o.char}
  	</button>
  );
};

export default OperatorButton
