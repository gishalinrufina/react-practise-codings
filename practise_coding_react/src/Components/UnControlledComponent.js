//In React, an uncontrolled component
// refers to a component where the form data,
// such as input values, is handled by the DOM
//rather than being controlled by the component's React state.
//In other words, the component doesn't rely on React state to manage
// and track the form data, but instead, it allows the DOM to directly manage that data.

//Uncontrolled components are typically used when you want to interact
//with form elements in a more traditional and imperative way, or when integrating
//React with non-React code or libraries. They are less common in modern React applications
// but can still be useful in certain scenarios.
import React, { useRef } from "react";
function UnControlledComponent() {
  const num1Ref = useRef(null);
  const num2Ref = useRef(null);

  const handleAddition = () => {
    const num1 = parseFloat(num1Ref.current.value);
    const num2 = parseFloat(num2Ref.current.value);

    if (!isNaN(num1) && !isNaN(num2)) {
      const result = num1 + num2;
      alert(`Result : ${result}`);
    } else {
      alert(`Please enter valid numbers!`);
    }
  };
  return (
    <div>
      <input type="number" ref={num1Ref} placeholder="Enter number 1" />
      <input type="number" ref={num2Ref} placeholder="Enter number 2" />
      <button onClick={handleAddition}>Add</button>
    </div>
  );
}
export default UnControlledComponent;
