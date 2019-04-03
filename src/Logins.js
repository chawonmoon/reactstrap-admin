import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Input, FormGroup } from "reactstrap";

class Logins extends Component {
  render() {
    return (
      <main className="admin-login">
        <div className="admin-login-inner">
          <h1>
            <img
              src="https://via.placeholder.com/217x215"
              alt="로그인 더미 로고"
            />
          </h1>
          <section>
            <div>
              <FormGroup>
                <i className="ico-users" />
                <Input
                  type="text"
                  name="user_id"
                  id="user_id"
                  placeholder="아이디를 입력해주십시오."
                  title="아이디"
                />
              </FormGroup>
              <FormGroup>
                <i className="ico-lock" />
                <Input
                  type="password"
                  name="user_pwd"
                  id="user_pwd"
                  placeholder="비밀번호를 입력해주십시오."
                  title="비밀번호"
                />
              </FormGroup>
            </div>
            <div>
              <Button href="#/" color="info" size="lg" block>
                <i className="ico-user-check" />
                <span>로그인</span>
              </Button>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default Logins;
