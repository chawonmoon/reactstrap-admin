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
        <Route path="/" component={App} />
        <Route component={NoMatch} />
      </Switch>
    </Fragment>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
