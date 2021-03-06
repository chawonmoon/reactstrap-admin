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
              path={`${this.props.router.match.path}/:id?`}
              component={Home}
            />
            <Route
              exact
              path={`${this.props.router.match.path}//:id?`}
              component={Home}
            />
            <Route
              exact
              path={`${this.props.router.match.path}Home/:id?`}
              component={Home}
            />
            <Route
              exact
              path={`${this.props.router.match.path}Tables/:id?`}
              component={Tables}
            />
            <Route
              exact
              path={`${this.props.router.match.path}Utilitys/:id?`}
              component={Utilitys}
            />
            <Route
              exact
              path={`${this.props.router.match.path}Badges/:id?`}
              component={Badges}
            />
            <Route
              exact
              path={`${this.props.router.match.path}Buttons/:id?`}
              component={Buttons}
            />

            <Redirect to="/NoMatch" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Contents;
