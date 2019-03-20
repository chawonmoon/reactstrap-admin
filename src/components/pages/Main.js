import React, { Component } from "react";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import ContentsWrap from "components/layout/ContentsWrap";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <ContentsWrap />
        <Footer />
      </div>
    );
  }
}

export default Main;
