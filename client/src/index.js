import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ContextProvider } from "./SocketContex.js";
import "./style.css";
ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
