import React, { useState } from "react";

function UsingUseState() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleAddition = () => {
    setResult(num1 + num2);
  };
  return (
    <div>
      <h5>Addition done using useState concept</h5>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <button onClick={handleAddition}> Result: </button>
      <h3>{result} </h3>
    </div>
  );
}
export default UsingUseState;
