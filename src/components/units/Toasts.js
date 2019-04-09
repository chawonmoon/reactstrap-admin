import React, { Component, Fragment } from "react";
import { ToastContainer, toast } from "react-toastify";

class Toasts extends Component {
  static defaultProps = {
    button: null,
    msg: "기본 토스트 팝업입니다.",
    lifeTime: 5000
  };
  state = {
    actionButton: this.props.button,
    msg: this.props.msg,
    lifeTime: this.props.lifeTime
  };
  notify = () => {
    toast(this.state.msg);
  };
  render() {
    let Btn = this.state.actionButton;
    if (Btn) {
      Btn = <Btn.type onClick={this.notify} {...Btn.props} />;
    } else {
      Btn = toast(this.state.msg);
    }
    return (
      <Fragment>
        {Btn}
        <ToastContainer autoClose={this.state.lifeTime} />
      </Fragment>
    );
  }
}
export default Toasts;
