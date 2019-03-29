import React, { Component, Fragment } from "react";
import { Button, Input } from "reactstrap";
import Breadcrumbs from "components/units/Breadcrumbs";
import BtngroupsList from "components/units/BtngroupsList";
import BtngroupsDetail from "components/units/BtngroupsDetail";
import BtngroupsModal from "components/units/BtngroupsModal";
import Paginations from "components/units/Paginations";

class Buttons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // 브레드크럼 데이터 입력값 (defaultprops 있음)
      breadcrumb: [{ name: "Buttons", linkto: "/Buttons" }]
    };
  }
  render() {
    return (
      <Fragment>
        <Breadcrumbs breadcrumb={this.state.breadcrumb} />
        <h2>리스트 페이지 버튼그룹</h2>
        <BtngroupsList />
        <br />
        <h2>상세 페이지 버튼그룹</h2>
        <BtngroupsDetail />
        <br />
        <h2>모달팝업 버튼그룹</h2>
        <BtngroupsModal />
        <br />
        <br />
        <h2>버튼 모음</h2>
        <br />
        <h4>기본크기 버튼</h4>
        <div>
          <Button color="info">
            <i className="ico-list" />
            <span>목록</span>
          </Button>
          &nbsp;
          <Button color="info">
            <i className="ico-plus" />
            <span>등록</span>
          </Button>
          &nbsp;
          <Button color="warning">
            <i className="ico-pencil2" />
            <span>수정</span>
          </Button>
          &nbsp;
          <Button color="danger">
            <i className="ico-bin" />
            <span>삭제</span>
          </Button>
          &nbsp;
          <Button color="info">
            <i className="ico-checkmark" />
            <span>확인</span>
          </Button>
          &nbsp;
          <Button color="secondary">
            <i className="ico-cross" />
            <span>취소</span>
          </Button>
          &nbsp;
          <Button color="info">
            <i className="ico-image" />
            <span>이미지 선택</span>
          </Button>
        </div>
        <br />
        <h4>작은크기 버튼</h4>
        <div>
          <Button color="info" size="sm">
            <i className="ico-plus" />
            <span>추가</span>
          </Button>
          &nbsp;
          <Button color="danger" size="sm">
            <i className="ico-bin" />
            <span>삭제</span>
          </Button>
          &nbsp;
          <Button color="info" size="sm">
            <i className="ico-image" />
            <span>이미지 선택</span>
          </Button>
        </div>
        <br />
        <h4>리스트 페이지네이션</h4>
        <div>
          <Paginations />
        </div>
      </Fragment>
    );
  }
}

export default Buttons;
