import React, { Component, Fragment } from "react";
import Breadcrumbs from "components/units/Breadcrumbs";
import Selectboxs from "components/units/Selectboxs";
import SelectboxsMulti from "components/units/SelectboxsMulti";
import Searchutils from "components/units/Searchutils";
import TablesV from "components/units/TablesV";
import TablesH from "components/units/TablesH";
import BtngroupsList from "components/units/BtngroupsList";
import BtngroupsDetail from "components/units/BtngroupsDetail";
import BtngroupsModal from "components/units/BtngroupsModal";
import PageAlerts from "components/units/PageAlerts";
import Dragndroplist from "components/units/Dragndroplist";

class Home extends Component {
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
        <div className="boards-list-utils">
          <Selectboxs selectopt={this.state.selectopt} />
          <Searchutils searchopt={this.state.searchopt} />
        </div>
        <div className="boards-list-utils">
          <SelectboxsMulti selectopt={this.state.selectoptMulti} />
        </div>
        <TablesV />
        <BtngroupsList />
        <BtngroupsDetail />
        <BtngroupsModal />
        <TablesH />
        <PageAlerts />
        <Dragndroplist />
      </Fragment>
    );
  }
}

export default Home;
