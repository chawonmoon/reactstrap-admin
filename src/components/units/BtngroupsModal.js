import React, { Component } from "react";
import { Button } from "reactstrap";

class BtngroupsModal extends Component {
  render() {
    return (
      <div className="btn-groups modals list">
        <div>
          <Button color="info">
            <i className="ico-checkmark" />
            <span>확인</span>
          </Button>
          <Button color="secondary">
            <i className="ico-cross" />
            <span>취소</span>
          </Button>
        </div>
      </div>
    );
  }
}

export default BtngroupsModal;
