import React, { Component } from "react";
import { Table, Badge } from "reactstrap";

class TablesV extends Component {
  render() {
    return (
      <Table
        responsive
        hover
        bordered
        striped
        className="table-defaults tables-ver"
      >
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
            <th scope="row">
              <span>10</span>
            </th>
            <td className="table-ellipsis">
              <span>
                [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100% 당첨
                이벤트!
              </span>
            </td>
            <td>
              <span>
                <Badge color="primary" pill>
                  Primary
                </Badge>
                <Badge color="secondary" pill>
                  Secondary
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
          <tr>
            <th scope="row">
              <span>9</span>
            </th>
            <td className="table-ellipsis">
              <span>
                [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100% 당첨
                이벤트!
              </span>
            </td>
            <td>
              <span>
                <Badge color="success" pill>
                  Success
                </Badge>
                <Badge color="danger" pill>
                  Danger
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
          <tr>
            <th scope="row">
              <span>8</span>
            </th>
            <td className="table-ellipsis">
              <span>
                [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100% 당첨
                이벤트!
              </span>
            </td>
            <td>
              <span>
                <Badge color="warning" pill>
                  Warning
                </Badge>
                <Badge color="info" pill>
                  Info
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
          <tr>
            <th scope="row">
              <span>7</span>
            </th>
            <td className="table-ellipsis">
              <span>
                [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100% 당첨
                이벤트!
              </span>
            </td>
            <td>
              <span>
                <Badge color="light" pill>
                  Light
                </Badge>
                <Badge color="dark" pill>
                  Dark
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
          <tr>
            <th scope="row">
              <span>6</span>
            </th>
            <td className="table-ellipsis">
              <span>
                [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100% 당첨
                이벤트!
              </span>
            </td>
            <td>
              <span>
                <Badge color="primary" pill>
                  Primary
                </Badge>
                <Badge color="secondary" pill>
                  Secondary
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
          <tr>
            <th scope="row">
              <span>5</span>
            </th>
            <td className="table-ellipsis">
              <span>
                [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100% 당첨
                이벤트!
              </span>
            </td>
            <td>
              <span>
                <Badge color="success" pill>
                  Success
                </Badge>
                <Badge color="danger" pill>
                  Danger
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
          <tr>
            <th scope="row">
              <span>4</span>
            </th>
            <td className="table-ellipsis">
              <span>
                [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100% 당첨
                이벤트!
              </span>
            </td>
            <td>
              <span>
                <Badge color="warning" pill>
                  Warning
                </Badge>
                <Badge color="info" pill>
                  Info
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
          <tr>
            <th scope="row">
              <span>3</span>
            </th>
            <td className="table-ellipsis">
              <span>
                [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100% 당첨
                이벤트!
              </span>
            </td>
            <td>
              <span>
                <Badge color="light" pill>
                  Light
                </Badge>
                <Badge color="dark" pill>
                  Dark
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
          <tr>
            <th scope="row">
              <span>2</span>
            </th>
            <td className="table-ellipsis">
              <span>
                [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100% 당첨
                이벤트!
              </span>
            </td>
            <td>
              <span>
                <Badge color="primary" pill>
                  Primary
                </Badge>
                <Badge color="secondary" pill>
                  Secondary
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
          <tr>
            <th scope="row">
              <span>1</span>
            </th>
            <td className="table-ellipsis">
              <span>
                [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100% 당첨
                이벤트!
              </span>
            </td>
            <td>
              <span>
                <Badge color="success" pill>
                  Success
                </Badge>
                <Badge color="danger" pill>
                  Danger
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
