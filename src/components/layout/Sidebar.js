import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <aside>
        <ul>
          <li>
            <Link to="/">Default</Link>
          </li>
          <li>
            <Link to="/Notice">공지사항</Link>
          </li>
          <li>
            <Link to="/Popup">팝업</Link>
          </li>
          <li>
            <Link to="/Charge">가스요금표</Link>
          </li>
          <li>
            <Link to="/Banks">요금납부 은행</Link>
          </li>
          <li>
            <Link to="/Info">이용안내</Link>
          </li>
          <li>
            <Link to="/Faq">자주하는 질문</Link>
          </li>
        </ul>
      </aside>
    );
  }
}

export default Sidebar;
