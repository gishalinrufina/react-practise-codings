//In React, a controlled component refers
//to a component whose state is controlled by the
// parent component. In other words, the parent component
//manages and provides the data and behavior for the controlled component.

import React, { useState } from "react";
function ControlledComponent() {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [result, setResult] = useState("");

  const handleEvent1 = (event) => {
    setInputValue1(Number(event.target.value));
  };
  const handleEvent2 = (event) => {
    setInputValue2(Number(event.target.value));
  };
  const handleAddition = () => {
    const sum = inputValue1 + inputValue2;
    setResult(sum);
  };

  return (
    <div>
      <h6>Using contolled components</h6>
      <input type="number" onChange={handleEvent1} />
      <input type="number" onChange={handleEvent2} />
      <button onClick={handleAddition}>Add </button>
      Result is : {result}
    </div>
  );
}
export default ControlledComponent;
