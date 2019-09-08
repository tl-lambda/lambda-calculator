import React from "react";
import '../../buttons.css';

const SpecialButton = ({s, i, setSpecial}) => {
  return (
    <button 
    	key={i} 
    	className="button-display" 
    	style={{backgroundColor: "#6262ff"}}
    	onClick={() => setSpecial(s)}
    >
    	{s}
    </button>
  );
};

export default SpecialButton