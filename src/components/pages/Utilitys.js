import React, { Component, Fragment } from "react";
import Breadcrumbs from "components/units/Breadcrumbs";
import Selectboxs from "components/units/Selectboxs";
import SelectboxsMulti from "components/units/SelectboxsMulti";
import Searchutils from "components/units/Searchutils";
import Colorpickers from "components/units/Colorpickers";
import Dragndroplist from "components/units/Dragndroplist";
import Chatbot from "components/units/Chatbot";

class Utilitys extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // 브레드크럼 데이터 입력값 (defaultprops 있음)
      breadcrumb: [{ name: "Utilitys", linkto: "/Utilitys" }],
      // 보이는 목록 개수선택 셀렉트박스 옵션값 (defaultprops 있음)
      selectopt: [
        { value: 10, label: "목록 10개" },
        { value: 20, label: "목록 20개" },
        { value: 50, label: "목록 50개" }
      ],
      // 멀티 셀렉트 옵션값 (defaultprops 있음)
      selectoptMulti: [
        { value: "guestBlock", label: "guestBlock", badge: "v1" },
        { value: "memberBlock", label: "memberBlock", badge: "v2" },
        { value: "contractBlock", label: "contractBlock", badge: "v3" }
      ],
      // 검색항목 옵션값
      searchopt: [
        { value: "title", label: "제목" },
        { value: "contents", label: "내용" }
      ]
    };
  }
  render() {
    return (
      <Fragment>
        <Breadcrumbs breadcrumb={this.state.breadcrumb} />
        <h2>테이블 검색영역</h2>
        <div className="boards-list-utils">
          <Selectboxs selectopt={this.state.selectopt} />
          <Searchutils searchopt={this.state.searchopt} />
        </div>
        <br />
        <h2>멀티 콤보 셀렉트 메뉴</h2>
        <div className="boards-list-utils">
          <SelectboxsMulti selectopt={this.state.selectoptMulti} />
        </div>
        <h2>컬러피커</h2>
        <Colorpickers />
        <br />
        <h2>드래그 앤 드롭 리스트</h2>
        <Dragndroplist />
        <br />
        <h2>챗봇</h2>
        <Chatbot />
      </Fragment>
    );
  }
}

export default Utilitys;
