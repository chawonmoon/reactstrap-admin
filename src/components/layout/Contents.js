import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Tables, Utilitys, Buttons, Badges } from "components/pages";
import NoMatch from "NoMatch";

class Contents extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <div className="admin-contents">
        <div className="admin-contents-inner">
          <Route exact path="/" component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/Tables" component={Tables} />
          <Route path="/Utilitys" component={Utilitys} />
          <Route path="/Badges" component={Badges} />
          <Route path="/Buttons" component={Buttons} />
        </div>
      </div>
    );
  }
}

export default Contents;
