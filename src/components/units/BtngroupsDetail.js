import React, { Component } from "react";
import { Button } from "reactstrap";

class BtngroupsDetail extends Component {
  render() {
    return (
      <div className="btn-groups pages detail">
        <Button color="info">
          <i className="ico-list" />
          <span>목록</span>
        </Button>
        <div>
          <Button color="warning">
            <i className="ico-pencil2" />
            <span>수정</span>
          </Button>
          <Button color="danger">
            <i className="ico-bin" />
            <span>삭제</span>
          </Button>
        </div>
      </div>
    );
  }
}

export default BtngroupsDetail;
