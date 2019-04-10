import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import BtngroupsModal from "components/units/BtngroupsModal";
import Modal from "react-modal";

Modal.setAppElement("#root");

class Modals extends Component {
  static defaultProps = {
    button: <Button color="info">기본버튼</Button>,
    isOpen: false,
    title: "기본 타이틀",
    contents: <p>기본영역</p>,
    fullModal: false,
    parentTag: "body",
    router: null,
    path: "/modal",
    cpath: null,
    closeType: "cancel"
  };

  state = {
    modalIsOpen: false,
    actionButton: this.props.button, // 모달 작동 버튼 (jsx)
    isOpen: this.props.isOpen, // 최초 페이지 진입시 모달 유무 (boolen)
    titles: this.props.titles, // 모달 타이틀 (string)
    contents: this.props.contents, // 모달 내용 (jsx)
    fullModal: this.props.fullModal, // 전체방식 모달 유무 (boolen)
    parentTag: this.props.parentTag, // 모달의 부모 태그 (string-[#:id/.:class/없을때:dom])
    router: this.props.router, // 라우터 작업중...
    path: this.props.path,
    cpath: this.props.router.history.location.pathname, // 라우터 path 작업중...
    prevPath: null,
    closeType: this.props.closeType
  };

  openModal = prams => {
    let loc = this.props.router.history.location.pathname,
      splitloc = loc.split("/"),
      id = this.props.path,
      pathname = loc + id;

    if (prams === "init") {
      if (splitloc.length > 2) {
        this.setState(state => ({
          prevPath: JSON.parse(JSON.stringify(splitloc))
            .splice(0, 2)
            .join("/")
        }));
        this.props.router.history.push(loc);
      }
    } else {
      if (splitloc.length <= 2) {
        this.setState(state => ({ prevPath: loc }));
        this.props.router.history.push(pathname);
      }
    }
  };

  cancelModal = () => {
    this.props.router.history.goBack();
  };

  closeModal = () => {
    this.props.router.history.push(this.state.prevPath);
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
      prev = prevState.cpath,
      openBoolean = false;

    if (prev === next) {
      if (next.split("/").length > 2) {
        openBoolean = true;
        return { cpath: next, modalIsOpen: openBoolean };
      } else {
        return null;
      }
    } else {
      if (next.split("/").length > 2) {
        openBoolean = true;
      }
      return { cpath: next, modalIsOpen: openBoolean };
    }
  }

  componentDidMount() {
    this.openModal("init");
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
          onRequestClose={
            this.state.closeType === "cancel"
              ? this.cancelModal
              : this.closeModal
          }
          contentLabel={titles}
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
              onClick={
                this.state.closeType === "cancel"
                  ? this.cancelModal
                  : this.closeModal
              }
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
