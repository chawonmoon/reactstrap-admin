import React, { Component } from "react";
import Select from "react-select";

// const CustomOption = ({ innerProps, isDisabled }) =>
//   !isDisabled ? (
//     <div {...innerProps}>
//       1
//       {/* your component internals */
//       console.log(innerProps)}
//     </div>
//   ) : null;
class CustomOption extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <i className="ico-minus" /> 테스트
      </div>
    );
  }
}

class SelectboxsMulti extends Component {
  static defaultProps = {
    selectopt: [{ value: 0, label: "선택 항목을 입력하세요." }]
  };

  state = {
    selectedOption: null
  };

  // 셀렉트박스 onChange 핸들러 함수(인자값은 option형식의 값만 반환된)
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`선택된 옵션값:`, selectedOption);
  };

  renderOption = option => {
    return (
      <div searchWords={[this._inputValue]} textToHighlight={option.label} />
    );
  };
  renderValue = option => {
    return <strong style={{ color: option.color }}>{option.label}</strong>;
  };

  render() {
    return (
      <div className="selectboxsMulti-wrap">
        <Select
          defaultValue={this.props.selectopt[0]}
          onChange={this.handleChange}
          options={this.props.selectopt}
          isSearchable={true}
          placeholder="실행함수를 입력하세요."
          className="selectboxs "
          isMulti
          components={{ Option: CustomOption }}
          menuIsOpen
        />
      </div>
    );
  }
}

export default SelectboxsMulti;
