import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import {
  Default,
  Notice,
  Popup,
  Charge,
  Banks,
  Info,
  Faq
} from "components/pages";

class Contents extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={Default} />
        <Route path="/Notice" component={Notice} />
        <Route path="/Popup" component={Popup} />
        <Route path="/Charge" component={Charge} />
        <Route path="/Banks" component={Banks} />
        <Route path="/Info" component={Info} />
        <Route path="/Faq" component={Faq} />
      </Fragment>
    );
  }
}

export default Contents;
