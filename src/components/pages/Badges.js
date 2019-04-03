import React, { Component, Fragment } from "react";
import Breadcrumbs from "components/units/Breadcrumbs";
import { Badge } from "reactstrap";

class Badges extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // 브레드크럼 데이터 입력값 (defaultprops 있음)
      breadcrumb: [{ name: "Badges", linkto: "/Badges" }]
    };
  }
  render() {
    return (
      <Fragment>
        <Breadcrumbs breadcrumb={this.state.breadcrumb} />
        <h2>뱃지</h2>
        <div>
          <Badge color="primary">Primary</Badge>
          <Badge color="secondary">Secondary</Badge>
          <Badge color="success">Success</Badge>
          <Badge color="danger">Danger</Badge>
          <Badge color="warning">Warning</Badge>
          <Badge color="info">Info</Badge>
          <Badge color="light">Light</Badge>
          <Badge color="dark">Dark</Badge>
        </div>
        <br />
        <h2>모서리 라운드 뱃지</h2>
        <div>
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
        </div>
        <br />
        <h2>링크 뱃지</h2>
        <div>
          <Badge href="#" color="primary">
            Primary
          </Badge>
          <Badge href="#" color="secondary">
            Secondary
          </Badge>
          <Badge href="#" color="success">
            Success
          </Badge>
          <Badge href="#" color="danger">
            Danger
          </Badge>
          <Badge href="#" color="warning">
            Warning
          </Badge>
          <Badge href="#" color="info">
            Info
          </Badge>
          <Badge href="#" color="light">
            Light
          </Badge>
          <Badge href="#" color="dark">
            Dark
          </Badge>
        </div>
      </Fragment>
    );
  }
}

export default Badges;
