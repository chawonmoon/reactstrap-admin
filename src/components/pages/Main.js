import React, { Component, Fragment } from "react";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import ContentsWrap from "components/layout/ContentsWrap";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { isSideBar: true };

    this.sidebarToggle = this.sidebarToggle.bind(this);
  }

  sidebarToggle() {
    this.setState(state => ({
      isSideBar: !state.isSideBar
    }));
  }

  render() {
    return (
      <Fragment>
        <Header onSidebar={this.sidebarToggle} />
        <ContentsWrap onSidebar={this.state.isSideBar} />
        <Footer />
      </Fragment>
    );
  }
}

export default Main;
