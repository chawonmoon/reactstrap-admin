import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import App from "App";
import Logins from "Logins";
import * as serviceWorker from "./serviceWorker";

import "styles/index.scss";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/Logins" component={Logins} />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
