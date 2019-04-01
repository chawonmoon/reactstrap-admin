import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import App from "App";
import * as serviceWorker from "./serviceWorker";

import "styles/index.scss";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
