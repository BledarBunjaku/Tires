import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./container/app-routes";
import Test from "./appp";
import { Tier } from "./container/Tier/tier";
import { Test2 } from "./container/test2";
import reportWebVitals from "./reportWebVitals";
import { Tiers } from "./container/tiers";
import { Test3 } from "./container/objectList";

ReactDOM.render(
  <React.StrictMode>
    {/* <Test3 name={"name"} price={"price"} fileDelivered={"file"} /> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
