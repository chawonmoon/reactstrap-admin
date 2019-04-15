import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
//import { HomeLogo } from "images";

class Header extends Component {
  static defaultProps = {
    adminOpen: false
  };
  state = {
    adminOpen: this.props.adminOpen
  };
  adminHandler = () => {
    this.setState(state => ({
      adminOpen: !state.adminOpen
    }));
  };
  sidebarHandler = () => {
    this.setState(state => ({
      adminOpen: false
    }));
    this.props.onSidebar();
  };

  render() {
    return (
      <header className="admin-header" id="admin-header">
        <h1>
          <Link to={`${this.props.router.match.url}Home`}>
            <img src="https://via.placeholder.com/225x62" alt="더미 로고" />
          </Link>
        </h1>
        <a
          className="btn_snb"
          href="javascript:void(0);"
          onClick={this.sidebarHandler}
        >
          <i className="ico-menu" />
        </a>
        <div className={"btn_admin" + (this.state.adminOpen ? " active" : "")}>
          <Button color="pink" size="sm" onClick={this.adminHandler}>
            <i className="ico-user-tie" />
            <span>관리자</span>
          </Button>
          <div className="btn_admin_popup">
            <Button color="pink" size="sm">
              <i className="ico-profile" />
              <span>프로필</span>
            </Button>
            <Button color="pink" size="sm">
              <i className="ico-exit" />
              <span>로그아웃</span>
            </Button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
