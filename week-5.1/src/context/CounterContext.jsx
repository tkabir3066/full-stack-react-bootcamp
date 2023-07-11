import { createContext, useReducer } from "react";

// create a context

export const CounterContext = createContext();

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESETCOUNT = "RESETCOUNT";
const countReducer = (state, action) => {
  const { type, payload } = action;
  console.log(state, action);
  /* if (action.type === INCREMENT) {
    return state + action.payload;
  } else {
    return state;
  } */

  switch (type) {
    case INCREMENT:
      return state + payload;
    case DECREMENT:
      return state - payload;
    case RESETCOUNT:
      return 0;
    default:
      return state;
  }
};
// create a provider

export const CountProvider = ({ children }) => {
  const [count, dispatch] = useReducer(countReducer, 0);

  const handleIncrement = () => {
    dispatch({ type: INCREMENT, payload: 2 });
  };
  const handleDecrement = () => {
    dispatch({ type: DECREMENT, payload: 2 });
  };
  const handleReset = () => {
    dispatch({ type: RESETCOUNT, payload: 0 });
  };
  return (
    <CounterContext.Provider
      value={{ count, handleIncrement, handleDecrement, handleReset }}
    >
      {children}
    </CounterContext.Provider>
  );
};
