import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Hello from hook life-cycle", count);
  }, [count]);
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
      <h1>Count:{count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
