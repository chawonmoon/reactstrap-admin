import React, { Component } from "react";
import Sidebar from "components/layout/Sidebar";
import Contents from "components/layout/Contents";

class ContentsWrap extends Component {
  render() {
    return (
      <div
        className={
          "admin-contentsWrap " + (this.props.onSidebar ? "active" : "")
        }
      >
        <Sidebar />
        <Contents />
      </div>
    );
  }
}

export default ContentsWrap;
