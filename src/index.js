import React from "react";
import ReactDOM from "react-dom";
import { App } from "./LeafletApp";
// import { App } from "./MapBoxApp";
import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
