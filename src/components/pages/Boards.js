import React, { Component, Fragment } from "react";
import Breadcrumbs from "components/units/Breadcrumbs";
import Selectboxs from "components/units/Selectboxs";
import Searchutils from "components/units/Searchutils";
import TablesV from "components/units/TablesV";
import TablesH from "components/units/TablesH";

class Boards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // 브레드크럼 데이터 입력값 (defaultprops 있음)
      breadcrumb: [
        { name: "공지사항", linkto: "/Boards" },
        { name: "게시판", linkto: null }
      ],
      // 보이는 목록 개수선택 셀렉트박스 옵션값 (defaultprops 있음)
      selectopt: [
        { value: 10, label: "목록 10개" },
        { value: 20, label: "목록 20개" },
        { value: 50, label: "목록 50개" }
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
        <div className="boards-list-utils">
          <Selectboxs selectopt={this.state.selectopt} />
          <Searchutils searchopt={this.state.searchopt} />
        </div>
        <TablesV />
        <TablesH />
      </Fragment>
    );
  }
}

export default Boards;
