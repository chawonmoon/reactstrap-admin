import React, { Component, Fragment } from "react";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import ContentsWrap from "components/layout/ContentsWrap";

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <ContentsWrap />
        <Footer />
      </Fragment>
    );
  }
}

export default Main;
