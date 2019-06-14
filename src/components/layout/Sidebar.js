import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Collapse, CardBody, Card } from "reactstrap";
import Modals from "components/units/Modals";
import Toasts from "components/units/Toasts";

/* 
// 메뉴 정보 상수 //
{
  trunks: 대메뉴 순서 번호 
  ※ 하위 생성되는 childepth객체들도 부모의 trunks번호와 똑같아야한다
  menu: 메뉴명
  linkto: 라우터 링크 정보
  icon: 아이콘 모양 클래스 정보
  childepth: 하위depth메뉴 정보 확장 배열(없을땐 비운다)
  ※ childepth는 화면이 허용하는 한 무한대로 추가 가능
}
 */
const OBJ_MENUS_NAME = {
  menuData: [
    {
      trunks: "0",
      menu: "HOME",
      linkto: "Home",
      icon: "ico-home",
      directmodal: false,
      childepth: []
    },
    {
      trunks: "1",
      menu: "Table",
      linkto: "Tables",
      icon: "ico-bullhorn",
      directmodal: false,
      childepth: [
        {
          trunks: "1",
          menu: "HOME",
          linkto: "Home",
          icon: "ico-home",
          directmodal: false,
          childepth: []
        },
        {
          trunks: "1",
          menu: "HOME",
          linkto: "Home",
          icon: "ico-home",
          directmodal: false,
          childepth: []
        }
      ]
    },
    {
      trunks: "2",
      menu: "Utilitys",
      linkto: "Utilitys",
      icon: "ico-bullhorn",
      directmodal: false,
      childepth: []
    },
    {
      trunks: "3",
      menu: "Badges",
      linkto: "Badges",
      icon: "ico-bullhorn",
      directmodal: false,
      childepth: []
    },
    {
      trunks: "4",
      menu: "Buttons",
      linkto: "Buttons",
      icon: "ico-bullhorn",
      directmodal: false,
      childepth: []
    },
    {
      trunks: "5",
      menu: "Logins",
      linkto: "Logins",
      icon: "ico-bullhorn",
      directmodal: false,
      childepth: []
    },
    {
      trunks: "6",
      menu: "Modal",
      linkto: "Modals",
      icon: "ico-bullhorn",
      directmodal: true,
      childepth: []
    },
    {
      trunks: "7",
      menu: "Toast",
      linkto: "Toast",
      icon: "ico-bullhorn",
      directmodal: true,
      childepth: []
    }
  ]
};

// 생성되는 메뉴컴포넌트에 접근하기 위한 해당 컴포넌트 내부의 전역 배열
const ARR_MENUS_DEPTH = [];

// 각 메뉴의 하위depth의 유무를 파악하여 하위depth 컴포넌트를 리턴하는 함수

class FN_MENUS_RENDER extends Component {
  state = {
    menus: this.props.menus,
    router: this.props.router
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    let next = nextProps.router,
      prev = prevState.router;

    if (prev !== next) {
      return { router: next };
    }

    return null;
  }

  render() {
    let resultJsx = null;
    if (this.state.menus.childepth.length > 0) {
      resultJsx = (
        <Childepth
          menu={this.state.menus}
          trunks={this.state.menus.trunks}
          router={this.state.router}
        />
      );
    } else {
      if (this.state.menus.directmodal) {
        if (this.state.menus.menu === "Modal") {
          resultJsx = (
            <Modals
              button={
                <li>
                  <a href="javascript:void(0);">
                    <i className={this.state.menus.icon} />
                    <span>{this.state.menus.menu}</span>
                  </a>
                </li>
              }
              isOpen={false}
              titles="관리자메뉴"
              contents={<p>기본 컨탠츠 영역</p>}
              fullModal={false}
              parentTag="body"
              path="/Modal"
              pathDepth={2}
              router={this.state.router}
              closeType="close"
              redirect="/NoMatch"
            />
          );
        } else {
          resultJsx = (
            <Toasts
              button={
                <li>
                  <a href="javascript:void(0);">
                    <i className={this.state.menus.icon} />
                    <span>{this.state.menus.menu}</span>
                  </a>
                </li>
              }
              msg="기본토스트"
              lifeTime={5000}
            />
          );
        }
      } else {
        console.log(this.state.router);
        resultJsx = (
          <li>
            <NavLink
              to={`${this.state.router.match.url}` + this.state.menus.linkto}
              activeClassName="active"
            >
              <i className={this.state.menus.icon} />
              <span>{this.state.menus.menu}</span>
            </NavLink>
          </li>
        );
      }
    }
    return resultJsx;
  }
}

// 메인 컴포넌트
class Sidebar extends Component {
  state = {
    menuDatas: OBJ_MENUS_NAME,
    router: this.props.router
  };

  render() {
    return (
      <aside className="admin-sidebar">
        <ul>
          {this.state.menuDatas.menuData.map((menus, i) => {
            return (
              <FN_MENUS_RENDER
                key={i}
                menus={menus}
                router={this.state.router}
              />
            );
          })}
        </ul>
      </aside>
    );
  }
}

// 2depth이상일때 출력되는 컴포넌트(상위 FN_MENUS_RENDER 함수에서 사용)
class Childepth extends Component {
  constructor(props) {
    super(props);
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
    this.closeCollapse = this.closeCollapse.bind(this);
    this.openCollapse = this.openCollapse.bind(this);
    this.state = { collapse: false, status: "Closed" };
    ARR_MENUS_DEPTH.push(this);
  }

  onEntering() {
    this.setState({ status: "Opening" });
  }

  onEntered() {
    this.setState({ status: "Opened" });
  }

  onExiting() {
    this.setState({ status: "Closing" });
  }

  onExited() {
    this.setState({ status: "Closed" });
  }

  toggle() {
    ARR_MENUS_DEPTH.forEach((obj, i) => {
      if (obj.props.trunks !== this.props.trunks) obj.closeCollapse();
      if (obj === this) {
        if (this.state.status === "Opened") obj.closeCollapse();
        else obj.openCollapse();
      }
    });
  }

  openCollapse() {
    this.setState(state => ({ collapse: true }));
  }

  closeCollapse() {
    this.setState(state => ({ collapse: false }));
  }

  render() {
    return (
      <li>
        <a
          href="javascript:void(0);"
          color="primary"
          onClick={this.toggle}
          className={"sidebar-collapse-button " + this.state.status}
        >
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
                  return (
                    <FN_MENUS_RENDER
                      key={i}
                      menus={menus}
                      match={this.props.router.match}
                    />
                  );
                })}
              </ul>
            </CardBody>
          </Card>
        </Collapse>
      </li>
    );
  }
}

export default Sidebar;
