import React, { Component } from "react";
import { Table, Badge } from "reactstrap";

class TablesV extends Component {
  render() {
    return (
      <Table striped hover bordered className="table-defaults">
        <colgroup>
          <col style={{ width: "5%" }} />
          <col style={{ width: "40%" }} />
          <col style={{ width: "10%" }} />
          <col style={{ width: "25%" }} />
          <col style={{ width: "auto" }} />
        </colgroup>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>상태</th>
            <th>게시일시</th>
            <th>등록일시</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <span>10</span>
            </th>
            <td>
              <span className="table-contents">
                [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100% 당첨
                이벤트!
              </span>
            </td>
            <td>
              <span>
                <Badge color="danger" pill>
                  만료
                </Badge>
                <Badge color="secondary" pill>
                  사용정지
                </Badge>
              </span>
            </td>
            <td>
              <span>2019-02-12 10:04:00 ~ 2019-02-15 14:04:00</span>
            </td>
            <td>
              <span>2019-01-28 16:18:05</span>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default TablesV;
