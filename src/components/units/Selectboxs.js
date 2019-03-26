import React, { Component } from "react";
import Select from "react-select";

class Selectboxs extends Component {
  static defaultProps = {
    selectopt: [{ value: 0, label: "선택 항목을 입력하세요." }]
  };

  state = {
    selectedOption: null
  };

  // 셀렉트박스 onChange 핸들러 함수(인자값은 option값만 반환된)
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`선택된 옵션값:`, selectedOption);
  };

  render() {
    return (
      <div className="selectboxs-wrap">
        <Select
          defaultValue={this.props.selectopt[0]}
          onChange={this.handleChange}
          options={this.props.selectopt}
          isSearchable={false}
          className="selectboxs"
        />
      </div>
    );
  }
}

export default Selectboxs;
