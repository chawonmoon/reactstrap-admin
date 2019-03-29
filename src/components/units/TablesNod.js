import React, { Component } from "react";
import { Table } from "reactstrap";
import PageAlerts from "components/units/PageAlerts";

class TablesNod extends Component {
  render() {
    return (
      <Table responsive bordered className="table-defaults tables-ver">
        <thead>
          <tr>
            <th scope="col">번호</th>
            <th scope="col">제목</th>
            <th scope="col">상태</th>
            <th scope="col">게시일시</th>
            <th scope="col">등록일시</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="col" colSpan="5">
              <PageAlerts />
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default TablesNod;
