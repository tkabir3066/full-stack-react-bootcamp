import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CountProvider } from "../../../week-5.1/src/context/CounterContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CountProvider>
      <App />
    </CountProvider>
  </React.StrictMode>
);
