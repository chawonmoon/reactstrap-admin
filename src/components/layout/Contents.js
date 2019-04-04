import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home, Tables, Utilitys, Buttons, Badges } from "components/pages";

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
              path={`${this.props.router.match.path}Tables:id?`}
              component={Tables}
            />
            <Route
              path={`${this.props.router.match.path}Utilitys:id?`}
              component={Utilitys}
            />
            <Route
              path={`${this.props.router.match.path}Badges:id?`}
              component={Badges}
            />
            <Route
              path={`${this.props.router.match.path}Buttons:id?`}
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
