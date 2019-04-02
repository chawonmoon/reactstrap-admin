import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home, Tables, Utilitys, Buttons, Badges } from "components/pages";
import NoMatch from "NoMatch";

class Contents extends Component {
  render() {
    return (
      <div className="admin-contents">
        <div className="admin-contents-inner">
          <Switch>
            <Route
              exact
              path={`${this.props.router.match.path}`}
              component={Home}
            />
            <Route
              exact
              path={`${this.props.router.match.path}Tables`}
              component={Tables}
            />
            <Route
              exact
              path={`${this.props.router.match.path}Utilitys`}
              component={Utilitys}
            />
            <Route
              exact
              path={`${this.props.router.match.path}Badges`}
              component={Badges}
            />
            <Route
              exact
              path={`${this.props.router.match.path}Buttons`}
              component={Buttons}
            />
            <Redirect to="/Logins" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Contents;
