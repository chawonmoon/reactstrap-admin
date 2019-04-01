import React, { Component } from "react";
import Main from "components/pages/Main";

class App extends Component {
  render() {
    return <Main router={this.props} />;
  }
}

export default App;
