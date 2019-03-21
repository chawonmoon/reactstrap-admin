import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="admin-footer">
        <div className="admin-copyright">
          <strong>
            Copyright © 2019&nbsp;
            <a href="http://www.seoulgas.co.kr">Seoul City Gas</a>.&nbsp;
          </strong>
          <span>All rights reserved.</span>
        </div>
        <div className="admin-version">
          <b>Version</b> 1.0.0
        </div>
      </footer>
    );
  }
}

export default Footer;
