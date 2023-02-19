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

function App() {
  const [count, setCount] = useState(0);
  const cardValues = [101, 115, 135, 143];

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
      <IsOddEven count={count} />
      <RandomCard cardValues={cardValues} />
    </>
  );
}

// Odd or Even
const IsOddEven = (props) => {
  const { count } = props;

  return <h2>Number is {count % 2 === 0 ? "Even" : "Odd"}</h2>;
};

// Random Card

const RandomCard = (props) => {
  const { cardValues } = props;

  return (
    <>
      <h1>
        {cardValues.map((cardValue, index) => {
          return (
            <div key={index}>
              <h3>{cardValue}</h3>
            </div>
          );
        })}
      </h1>
    </>
  );
};
export default App;
