import React, { Component, Fragment } from "react";
import Breadcrumbs from "components/units/Breadcrumbs";

class Boards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breadcrumb: [
        { name: "공지사항", linkto: "/Boards" },
        { name: "게시판", linkto: null }
      ]
    };
  }
  render() {
    return (
      <Fragment>
        <Breadcrumbs breadcrumb={this.state.breadcrumb} />
      </Fragment>
    );
  }
}

export default Boards;
