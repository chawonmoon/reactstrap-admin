import React, { Component, Fragment } from "react";
import Breadcrumbs from "components/units/Breadcrumbs";
import TablesV from "components/units/TablesV";
import TablesH from "components/units/TablesH";
import TablesNod from "components/units/TablesNod";

class Tables extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // 브레드크럼 데이터 입력값 (defaultprops 있음)
      breadcrumb: [{ name: "Tables", linkto: "/Tables" }]
    };
  }
  render() {
    return (
      <Fragment>
        <Breadcrumbs breadcrumb={this.state.breadcrumb} />
        <h2>세로형 테이블</h2>
        <TablesV />
        <br />
        <h2>가로형 테이블</h2>
        <TablesH />
        <br />
        <h2>세로형 검색결과 없을때</h2>
        <TablesNod />
      </Fragment>
    );
  }
}

export default Tables;
