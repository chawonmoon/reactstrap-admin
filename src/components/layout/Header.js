import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HomeLogo } from "images";

class Header extends Component {
  render() {
    return (
      <header className="admin-header">
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
        <a className="btn_admin" href="javascript:void(0);">
          <i className="ico-user-tie" />
          <span>관리자</span>
        </a>
      </header>
    );
  }
}

export default Header;
