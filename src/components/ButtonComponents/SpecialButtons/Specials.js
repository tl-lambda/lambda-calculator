import React, { useState } from "react";
import { specials } from '../../../data.js';
import SpecialButton from './SpecialButton.js';

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [special, setSpecial] = useState("")

  return (
    <div>
       {specials.map((s, i) => {
      	return <SpecialButton s={s} i={i} setSpecial={setSpecial}/>
       })}
    </div>
  );
};

export default Specials;