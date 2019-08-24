import React, { useState } from "react";
import { operators } from "../../../data.js";
import OperatorButton from "./OperatorButton";
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
	const [operatorState, setOperatorState] = useState(operators)
  // STEP 2 - add the imported data to state
  return (
    <div>
      	{operatorState.map((item) => {
      		return <OperatorButton className ="OperatorButton" char={item.char}/>
      	})
      }
    </div>
  );
};

export default Operators;