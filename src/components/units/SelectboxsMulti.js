import React, { Component } from "react";
import Select, { components } from "react-select";
import { Badge } from "reactstrap";

class SelectboxsMulti extends Component {
  static defaultProps = {
    selectopt: [{ value: 0, label: "선택 항목을 입력하세요.", badge: "v1" }]
  };

  state = {
    selectedOption: null
  };

  // 셀렉트박스 onChange 핸들러 함수(인자값은 option형식의 값만 반환된)
  changeHandler = selectedOption => {
    this.setState({ selectedOption });
    console.log("선택된 옵션값:", selectedOption);
  };
  keydownHandler = () => {
    // 필요없을때는 삭제
    console.log("이벤트: keydownHandler");
  };

  render() {
    const props = this.props;
    return (
      <div className="selectboxsMulti-wrap">
        <Select
          defaultValue={props.selectopt[0]}
          onChange={this.changeHandler}
          onKeyDown={this.keydownHandler}
          options={props.selectopt}
          isSearchable={true}
          placeholder="실행함수를 입력하세요."
          noOptionsMessage={() => {
            return "유효한 함수가 아닙니다.";
          }}
          className="selectboxs "
          isMulti
          components={{
            Option: CustomSelectOpt,
            MultiValue: CustomSelectValue
          }}
        />
      </div>
    );
  }
}

// 셀렉트박스 옵션 커스텀
class CustomSelectOpt extends Component {
  render() {
    const props = this.props;
    return (
      <components.Option {...props}>
        {props.children}
        <Badge color="danger" pill>
          {props.data.badge}
        </Badge>
      </components.Option>
    );
  }
}

// 셀렉트박스 값 아이콘 커스텀
class CustomSelectValue extends Component {
  render() {
    const props = this.props;
    return (
      <components.MultiValue {...props}>
        {props.children}
        <Badge color="danger" pill>
          {props.data.badge}
        </Badge>
      </components.MultiValue>
    );
  }
}

export default SelectboxsMulti;
