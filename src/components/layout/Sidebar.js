import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Collapse, CardBody, Card } from "reactstrap";

class Sidebar extends Component {
  state = {
    menuData: [
      { menu: "HOME", linkto: "/", icon: "ico-home", childepth: [] },
      {
        menu: "공지사항",
        linkto: "/Notice",
        icon: "ico-bullhorn",
        childepth: []
      },
      {
        menu: "공지사항2",
        linkto: "/Notice2",
        icon: "ico-bullhorn",
        childepth: [
          {
            menu: "공지사항2-1",
            linkto: "/Notice2",
            icon: "ico-minus",
            childepth: [
              {
                menu: "공지사항3-1",
                linkto: "/Notice3",
                icon: "ico-minus",
                childepth: []
              },
              {
                menu: "공지사항3-2",
                linkto: "/Notice3",
                icon: "ico-minus",
                childepth: []
              }
            ]
          },
          {
            menu: "공지사항2-2",
            linkto: "/Notice2",
            icon: "ico-minus",
            childepth: []
          }
        ]
      },
      {
        menu: "팝업",
        linkto: "/Popup",
        icon: "ico-notification",
        childepth: []
      },
      {
        menu: "가스요금표",
        linkto: "/Charge",
        icon: "ico-bullhorn",
        childepth: []
      },
      {
        menu: "요금납부 은행",
        linkto: "/Banks",
        icon: "ico-coin-dollar",
        childepth: []
      },
      { menu: "이용안내", linkto: "/Info", icon: "ico-book", childepth: [] },
      {
        menu: "자주하는 질문",
        linkto: "/Faq",
        icon: "ico-users",
        childepth: []
      }
    ]
  };

  render() {
    return (
      <aside className="admin-sidebar">
        <ul>
          {this.state.menuData.map((menus, i) => {
            return menusMap(menus, i);
          })}
        </ul>
      </aside>
    );
  }
}

class Childepth extends Component {
  constructor(props) {
    super(props);
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false, status: "Closed" };
  }

  onEntering() {
    this.setState({ status: "Opening..." });
  }

  onEntered() {
    this.setState({ status: "Opened" });
  }

  onExiting() {
    this.setState({ status: "Closing..." });
  }

  onExited() {
    this.setState({ status: "Closed" });
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <li>
        <a href="#none" color="primary" onClick={this.toggle}>
          <i className={this.props.menu.icon + " bullet"} />
          <span>{this.props.menu.menu}</span>
          <i className="ico-circle-down downbullet" />
        </a>
        <Collapse
          isOpen={this.state.collapse}
          onEntering={this.onEntering}
          onEntered={this.onEntered}
          onExiting={this.onExiting}
          onExited={this.onExited}
          className="child-depth"
        >
          <Card>
            <CardBody>
              <ul>
                {this.props.menu.childepth.map((menus, i) => {
                  return menusMap(menus, i);
                })}
              </ul>
            </CardBody>
          </Card>
        </Collapse>
      </li>
    );
  }
}

const menusMap = (menus, i) => {
  if (menus.childepth.length > 0) {
    return <Childepth menu={menus} key={i} no={i} />;
  } else {
    return (
      <li key={i}>
        <Link to={menus.linkto}>
          <i className={menus.icon} />
          <span>{menus.menu}</span>
        </Link>
      </li>
    );
  }
};

export default Sidebar;
