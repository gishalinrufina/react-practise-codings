import React, { useState } from "react";

function Calculation() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleAddition = () => {
    setResult(num1 + num2);
  };

  return (
    <div className="calculation">
      <label>Enter the first number:</label>
      <input
        className="numberInput"
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <br />
      <label>Enter the second number:</label>
      <input
        className="numberInput"
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <br />
      <button onClick={handleAddition} className="button">
        Add
      </button>
      <p className="resultDisplay">
        The Result is : <h4>{result}</h4>
      </p>
    </div>
  );
}
export default Calculation;
