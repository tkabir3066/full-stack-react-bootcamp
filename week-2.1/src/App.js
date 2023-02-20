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
      <IsOddEven count={count} pickedValue={pickedValue} />
      <RandomCard cardValues={cardValues} setPickedValue={setPickedValue} />
    </>
  );
}

// Odd or Even
const IsOddEven = (props) => {
  const { count, pickedValue } = props;

  return (
    <div>
      {<h2>Number is {count % 2 === 0 ? "Even" : "Odd"}</h2>};
      {
        <h2>
          Number is {pickedValue && pickedValue % 2 === 0 ? "Even" : "Odd"}
        </h2>
      }
      ;
    </div>
  );
};

// Random Card

const RandomCard = (props) => {
  const { cardValues, setPickedValue } = props;

  return (
    <div>
      <h1>
        {cardValues.map((cardValue, index) => {
          return (
            <div
              key={index}
              style={{
                display: "inline-block",
                width: "150px",
                height: "150px",
                backgroundColor: "palevioletred",
                color: "#fff",
                lineHeight: "90px",
                fontWeight: "bolder",
                fontSize: "30px",
                marginRight: 10,
                textAlign: "center",
                borderRadius: "100%",
              }}
              onClick={() => setPickedValue(cardValue)}
            >
              <h3>{cardValue}</h3>
            </div>
          );
        })}
      </h1>
    </div>
  );
};
export default App;
