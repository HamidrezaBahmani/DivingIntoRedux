import React from "react";
import ReactDOM from "react-dom/client";
//9-Provider=>this is actually a component
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
//11-
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //10-wrap   <App /> with   <Provider>
  //12-set store props
  <Provider store={store}>
    <App />
  </Provider>
);
