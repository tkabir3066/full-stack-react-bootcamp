import React from "react";
import ReactDOM from "react-dom/client";

import AppClass from "./CLASS_BASED_COMPONENTS/AppClass";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppClass />
  </React.StrictMode>
);
