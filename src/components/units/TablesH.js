import React, { Component } from "react";
import { Table, Badge } from "reactstrap";

class TablesH extends Component {
  render() {
    return (
      <Table striped bordered className="table-defaults">
        <colgroup>
          <col style={{ width: "10%" }} />
          <col style={{ width: "auto" }} />
        </colgroup>
        <tbody>
          <tr>
            <th scope="col">
              <span>등록일시</span>
            </th>
            <td>
              <span>2019-02-22 17:46:49</span>
            </td>
          </tr>
          <tr>
            <th scope="col">
              <span>제목</span>
            </th>
            <td>
              <span>
                [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100% 당첨
                이벤트!
              </span>
            </td>
          </tr>
          <tr>
            <th scope="col">
              <span>내용</span>
            </th>
            <td>
              <span>
                [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100% 당첨
                이벤트! [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100%
                당첨 이벤트! [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한
                100% 당첨 이벤트! [이벤트안내] 가스락 "잠금화면" 신규 사용자를
                위한 100% 당첨 이벤트!
              </span>
            </td>
          </tr>
          <tr>
            <th scope="col">
              <span>최근공지 게시상태</span>
            </th>
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
          </tr>
          <tr>
            <th scope="col">
              <span>최근공지 게시일시</span>
            </th>
            <td>
              <span>2019-02-22 17:33:42 ~ 2019-02-23 17:33:42</span>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default TablesH;
