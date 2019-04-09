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

  resizeHandler = e => {
    if (window.innerWidth > 767) {
      this.setState(state => ({
        isSideBar: true
      }));
    } else {
      this.setState(state => ({
        isSideBar: false
      }));
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.resizeHandler);
  }

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
