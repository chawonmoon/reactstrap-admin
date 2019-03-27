import React, { Component } from "react";
import { Table, Badge } from "reactstrap";

class TablesH extends Component {
  render() {
    return (
      <Table bordered className="table-defaults tables-hor">
        <tbody>
          <tr>
            <th scope="row">
              <span>등록일시</span>
            </th>
            <td>
              <span>2019-02-22 17:46:49</span>
            </td>
          </tr>
          <tr>
            <th scope="row">
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
            <th scope="row">
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
            <th scope="row">
              <span>최근공지 게시상태</span>
            </th>
            <td>
              <span>
                <Badge color="primary" pill>
                  Primary
                </Badge>
                <Badge color="secondary" pill>
                  Secondary
                </Badge>
                <Badge color="success" pill>
                  Success
                </Badge>
                <Badge color="danger" pill>
                  Danger
                </Badge>
                <Badge color="warning" pill>
                  Warning
                </Badge>
                <Badge color="info" pill>
                  Info
                </Badge>
                <Badge color="light" pill>
                  Light
                </Badge>
                <Badge color="dark" pill>
                  Dark
                </Badge>
              </span>
            </td>
          </tr>
          <tr>
            <th scope="row">
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
