import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Home, Tables, Utilitys, Buttons, Badges } from "components/pages";

class Contents extends Component {
  render() {
    return (
      <div className="admin-contents">
        <div className="admin-contents-inner">
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
