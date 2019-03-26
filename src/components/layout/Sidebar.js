import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Collapse, CardBody, Card } from "reactstrap";

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
      linkto: "/",
      icon: "ico-home",
      childepth: []
    },
    {
      trunks: "1",
      menu: "공지사항",
      linkto: "/Notice",
      icon: "ico-bullhorn",
      childepth: [
        {
          trunks: "1",
          menu: "게시판",
          linkto: "/Boards",
          icon: "ico-bullhorn",
          childepth: []
        },
        {
          trunks: "1",
          menu: "푸시",
          linkto: "/Pushs",
          icon: "ico-bullhorn",
          childepth: []
        }
      ]
    },
    {
      trunks: "2",
      menu: "팝업",
      linkto: "/Popup",
      icon: "ico-notification",
      childepth: []
    },
    {
      trunks: "3",
      menu: "가스요금표",
      linkto: "/Charge",
      icon: "ico-bullhorn",
      childepth: []
    },
    {
      trunks: "4",
      menu: "요금납부 은행",
      linkto: "/Banks",
      icon: "ico-coin-dollar",
      childepth: []
    },
    {
      trunks: "5",
      menu: "이용안내",
      linkto: "/Info",
      icon: "ico-book",
      childepth: []
    },
    {
      trunks: "6",
      menu: "자주하는 질문",
      linkto: "/Faq",
      icon: "ico-users",
      childepth: []
    }
  ]
};

// 생성되는 메뉴컴포넌트에 접근하기 위한 해당 컴포넌트 내부의 전역 배열
const ARR_MENUS_DEPTH = [];

// 각 메뉴의 하위depth의 유무를 파악하여 하위depth 컴포넌트를 리턴하는 함수
const FN_MENUS_RENDER = (menus, i) => {
  if (menus.childepth.length > 0) {
    return <Childepth menu={menus} no={i} trunks={menus.trunks} key={i} />;
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

// 메인 컴포넌트
class Sidebar extends Component {
  state = { menuDatas: OBJ_MENUS_NAME };

  render() {
    return (
      <aside className="admin-sidebar">
        <ul>
          {this.state.menuDatas.menuData.map((menus, i) => {
            return FN_MENUS_RENDER(menus, i);
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
                  return FN_MENUS_RENDER(menus, i);
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
