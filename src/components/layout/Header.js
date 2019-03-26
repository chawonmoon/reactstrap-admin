import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HomeLogo } from "images";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="admin-header">
        <h1>
          <Link to="/">
            <img src={HomeLogo} alt="서울도시가스 모바일고객센터 관리자" />
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
