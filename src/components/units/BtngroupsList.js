import React, { Component } from "react";
import { Button } from "reactstrap";
import Paginations from "components/units/Paginations";

class BtngroupsList extends Component {
  render() {
    return (
      <div className="btn-groups pages list">
        <Button color="info">
          <i className="ico-plus" />
          <span>등록</span>
        </Button>
        <Paginations />
      </div>
    );
  }
}

export default BtngroupsList;
