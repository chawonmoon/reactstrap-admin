import React, { Component, Fragment } from "react";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import ContentsWrap from "components/layout/ContentsWrap";

class Main extends Component {
  state = { isSideBar: true };

  sidebarToggle = () => {
    this.setState(state => ({
      isSideBar: !state.isSideBar
    }));
  };

  render() {
    return (
      <Fragment>
        <Header onSidebar={this.sidebarToggle} router={this.props.router} />
        <ContentsWrap
          onSidebar={this.state.isSideBar}
          router={this.props.router}
        />
        <Footer />
      </Fragment>
    );
  }
}

export default Main;
