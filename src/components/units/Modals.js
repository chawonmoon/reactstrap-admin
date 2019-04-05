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
    fullModal: false,
    router: null,
    path: "/Modal",
    currentPath: null,
    prevPath: null
  };

  state = {
    modalIsOpen: this.props.isOpen,
    actionButton: this.props.button,
    titles: this.props.titles,
    contents: this.props.contents,
    fullModal: this.props.fullModal,
    router: this.props.router,
    path: this.props.path,
    currentPath: this.props.router.history.location.pathname,
    prevPath: this.props.router.history.location.pathname
  };

  openModal = () => {
    console.log("열린다");
    let modalPath = this.state.currentPath + this.state.path;
    this.setState({ prevPath: this.state.currentPath });
    this.props.router.history.push(modalPath);
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.props.router.history.push(this.state.prevPath);
    this.setState({ modalIsOpen: false });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    let next = nextProps.router.history.location.pathname,
      prev = prevState.currentPath;
    console.log("event");
    if (prev !== next) {
      return { currentPath: next };
    }

    return null;
  }

  render() {
    let Buttons = this.state.actionButton,
      titles = this.state.titles,
      Contents = this.state.contents;

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
            <h2 className="title-modal">{titles}</h2>
          </div>
          <div className="contents-modal">
            <Contents.type {...Contents.props} />
          </div>
        </Modal>
      </Fragment>
    );
  }
}

export default Modals;
