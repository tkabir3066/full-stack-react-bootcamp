import React, { useState } from "react";
import OddOrEven from "../CLASS_BASED_COMPONENTS/OddOrEvenClass";
import Card from "./Card";

const App = () => {
  const [count, setCount] = useState(0);
  const cardNumbers = [10, 25, 45, 74, 88];
  const handleIncrement = () => {
    setCount((count) => count + 1);
  };
  const handleDecrement = () => {
    setCount((count) => count - 1);
  };
  const handleReset = () => {
    setCount((count) => count - count);
  };
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>

      <OddOrEven count={count} />
      <Card cardNumbers={cardNumbers} />
    </div>
  );
};

export default App;
