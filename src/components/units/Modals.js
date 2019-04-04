import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import Modal from "react-modal";

Modal.setAppElement("#root");

class Modals extends Component {
  static defaultProps = {
    isOpen: false,
    button: <Button color="info">기본버튼</Button>,
    title: "기본 타이틀",
    contents: <p>기본영역</p>,
    fullModal: false
  };

  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: this.props.isOpen,
      actionButton: this.props.button,
      titles: this.props.titles,
      contents: this.props.contents,
      fullModal: this.props.fullModal
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    let Buttons = this.state.actionButton;
    return (
      <Fragment>
        <Buttons.type onClick={this.openModal} {...Buttons.props} />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel={this.state.titles}
          className={
            "default-modal " + (this.state.fullModal ? "full-modal" : null)
          }
          overlayClassName={
            "default-overlay " + (this.state.fullModal ? "full-modal" : null)
          }
        >
          <div className="header-modal">
            <Button
              className="close-modal"
              color="link"
              onClick={this.closeModal}
            >
              <i className="ico-cross" />
            </Button>
            <h2 className="title-modal">{this.state.titles}</h2>
          </div>
          <div className="contents-modal">{this.state.contents}</div>
        </Modal>
      </Fragment>
    );
  }
}

export default Modals;
