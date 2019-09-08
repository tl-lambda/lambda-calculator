import React from "react";
import '../../buttons.css';

const zero = {
	borderRadius: 0,
	borderTopLeftRadius: "25px",
	borderTopRightRadius: "25px",
	borderBottomLeftRadius: "25px",
	borderBottomRightRadius: "25px",
	width: "110px"
}

const NumberButton = ({n, i, setNumber}) => {
  return (
    <button 
    	key={i} 
    	class="button-display" 
    	style={n === '0' ? zero : null}
      onClick={() => setNumber(n)}
    >
    	{n}
    </button>
  );
};

export default NumberButton