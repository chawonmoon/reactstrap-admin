import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
//import { HomeLogo } from "images";


class Header extends Component {
  render() {
    return (
      <header className="admin-header" id="admin-header">
        <h1>
          <Link to="/Main">
            <img src="https://via.placeholder.com/225x62" alt="더미 로고" />
          </Link>
        </h1>
        <a
          className="btn_snb"
          href="javascript:void(0);"
          onClick={this.props.onSidebar}
        >
          <i className="ico-menu" />
        </a>
        <Button className="btn_admin" color="pink" size="sm">
          <i className="ico-user-tie" />
          <span>관리자</span>
        </Button>
      </header>
    );
  }
}

export default Header;
