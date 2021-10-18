import React from "react";
import ReactDOM from "react-dom";
import { App } from "./ReactMapGLApp/App";
// import { App } from "./ReactLeafletApp/App";
// import { App } from "./MapboxGLApp/App";
import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
