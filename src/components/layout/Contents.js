import React, { Component } from "react";
import { Route } from "react-router-dom";
import {
  Home,
  Notice,
  Boards,
  Pushs,
  Popup,
  Charge,
  Banks,
  Info,
  Faq
} from "components/pages";

class Contents extends Component {
  render() {
    return (
      <div className="admin-contents">
        <div className="admin-contents-inner">
          <Route exact path="/" component={Home} />
          <Route path="/Notice" component={Notice} />
          <Route path="/Boards" component={Boards} />
          <Route path="/Pushs" component={Pushs} />
          <Route path="/Popup" component={Popup} />
          <Route path="/Charge" component={Charge} />
          <Route path="/Banks" component={Banks} />
          <Route path="/Info" component={Info} />
          <Route path="/Faq" component={Faq} />
        </div>
      </div>
    );
  }
}

export default Contents;
