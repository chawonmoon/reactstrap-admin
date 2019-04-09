import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import BtngroupsModal from "components/units/BtngroupsModal";
import Modal from "react-modal";

Modal.setAppElement("#root");

class Modals extends Component {
  static defaultProps = {
    isOpen: false,
    button: <Button color="info">기본버튼</Button>,
    title: "기본 타이틀",
    contents: <p>기본영역</p>,
    fullModal: false,
    parentTag: "body",
    router: null,
    path: "/Modal",
    currentPath: null,
    prevPath: null
  };

  state = {
    modalIsOpen: this.props.isOpen, // 페이지 진입시 모달 유무 (boolen)
    actionButton: this.props.button, // 모달 작동 버튼 (jsx)
    titles: this.props.titles, // 모달 타이틀 (string)
    contents: this.props.contents, // 모달 내용 (jsx)
    fullModal: this.props.fullModal, // 전체방식 모달 유무 (boolen)
    parentTag: this.props.parentTag, // 모달의 부모 태그 (string-[#:id/.:class/없을때:dom])
    router: this.props.router, // 라우터 작업중...
    path: this.props.path, // 라우터 path 작업중...
    currentPath: this.props.router.history.location.pathname, // 라우터 path 작업중...
    prevPath: this.props.router.history.location.pathname // 라우터 path 작업중...
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

  selectModalParent = () => {
    let elements = this.state.parentTag;
    if (elements.charAt(0) === "#") {
      elements = document.getElementById(
        elements.substring(1, elements.length)
      );
    } else if (elements.charAt(0) === ".") {
      elements = document.getElementsByClassName(
        elements.substring(1, elements.length)
      )[0];
    } else {
      elements = document[elements];
    }
    return elements;
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
          parentSelector={this.selectModalParent}
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
          <BtngroupsModal />
        </Modal>
      </Fragment>
    );
  }
}

export default Modals;
