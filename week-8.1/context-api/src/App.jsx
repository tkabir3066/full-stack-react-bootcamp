import React, { useContext, useReducer } from "react";
import { CounterContext } from "../../../week-5.1/src/context/CounterContext";

// // action creator (redux e eibhabe kora hoi)
// function increment(dispatch, num) {
//   return dispatch({ type: INCREMENT, payload: num });
// }
function App() {
  const context = useContext(CounterContext);
  const { count, handleIncrement, handleDecrement, handleReset } = context;
  console.log(context);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
