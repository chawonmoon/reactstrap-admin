import React, { Component } from "react";
import {
  Button,
  Input,
  FormGroup,
  FormFeedback,
  CustomInput
} from "reactstrap";

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
                  valid={false}
                  invalid={false}
                />
                <FormFeedback>아이디를 확인 후 다시 시도해 주세요</FormFeedback>
              </FormGroup>
              <FormGroup>
                <i className="ico-lock" />
                <Input
                  type="password"
                  name="user_pwd"
                  id="user_pwd"
                  placeholder="비밀번호를 입력해주십시오."
                  title="비밀번호"
                  valid={false}
                  invalid={false}
                />
                <FormFeedback>
                  비밀번호를 확인 후 다시 시도해 주세요
                </FormFeedback>
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
