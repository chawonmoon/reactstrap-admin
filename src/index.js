import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/jsdom";

import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import App from "App";
import Logins from "Logins";
import NoMatch from "NoMatch";
import * as serviceWorker from "./serviceWorker";

import "styles/index.scss";

ReactDOM.render(
  <Router>
    <Fragment>
      <Switch>
        <Route exact path="/Logins" component={Logins} />
        <Route exact path="/NoMatch" component={NoMatch} />
        <Route path="/" component={App} />
      </Switch>
    </Fragment>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
