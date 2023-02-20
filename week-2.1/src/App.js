// Must be remembered:-
// Must have parent element
// must have closing
// must be careful for javascript reserved keyword for- htmlFor, class- className;
// dynamic value(expression) must be written within {}

////synthetic event

//when component re-renders?
//- state update
//- props change
//- force update
import React, { useState } from "react";

import IsOddOrEven from "./IsOddOrEven";
import RandomCard from "./RandomCard";

function App() {
  const [count, setCount] = useState(0);
  const [pickedValue, setPickedValue] = useState(null);
  // console.log(pickedValue);
  const cardValues = [10, 25, 46, 103];

  const handleIncrement = (num) => {
    setCount((count) => count + num);
  };
  const handleDecrement = () => {
    setCount((count) => count - 1);
  };
  const handleReset = () => {
    console.log(count - count);
    setCount((count) => count - count);
  };
  return (
    <>
      <div className="container">
        <h1>Count : {count}</h1>
        <button
          onClick={() => handleIncrement(1)}
          // disabled={count >= 5 ? true : false}
        >
          Increment
        </button>
        <button onClick={handleDecrement} disabled={count <= 0 ? true : false}>
          Decrement
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <IsOddOrEven count={count} pickedValue={pickedValue} />
      <RandomCard cardValues={cardValues} setPickedValue={setPickedValue} />
    </>
  );
}

// Random Card

export default App;
