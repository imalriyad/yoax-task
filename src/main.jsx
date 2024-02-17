import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Mainlayout from "./layout/Mainlayout";
import ContextProvider from "./context/ContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <Mainlayout></Mainlayout>
    </ContextProvider>
  </React.StrictMode>
);
