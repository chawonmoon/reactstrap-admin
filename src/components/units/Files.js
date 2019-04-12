import React, { Component } from "react";
import { FormGroup, CustomInput, Button } from "reactstrap";

class Files extends Component {
  static defaultProps = {
    inputValue: "파일을 선택해 주세요.",
    srcImg: null
  };

  state = {
    inputValue: this.props.inputValue,
    srcImg: this.props.srcImg,
    active: false
  };

  inputFile = null;
  fReader = new FileReader();

  changeHandler = () => {
    if (!this.inputFile.files[0]) return null;
    this.fReader.readAsDataURL(this.inputFile.files[0]);
    this.fReader.onloadend = this.fileLoadHandler;
  };

  deleteHandler = () => {
    if (this.inputFile.files[0]) this.inputFile.value = "";
    this.setState(state => ({ inputValue: null, srcImg: null, active: false }));
  };

  fileLoadHandler = e => {
    this.setState(state => ({
      inputValue: this.inputFile.files[0].name,
      srcImg: e.target.result,
      active: true
    }));
  };

  render() {
    return (
      <FormGroup>
        <figure className={"resultImg " + (this.state.active ? "active" : "")}>
          <img src={this.state.srcImg} alt={this.state.inputValue} />
        </figure>
        <div className="btn-images-file">
          <Button color="info">
            <i className="ico-image" />
            <span>이미지 선택</span>
            <CustomInput
              type="file"
              id=""
              className="customFile"
              name="customFile"
              innerRef={pram => {
                this.inputFile = pram;
              }}
              label={this.state.inputValue}
              onChange={this.changeHandler}
              accept=".jpg, .jpeg, .png"
            />
          </Button>
        </div>
        <Button
          className={"btn-images-del " + (this.state.active ? "active" : "")}
          color="danger"
          onClick={this.deleteHandler}
        >
          <i className="ico-bin" />
          <span>이미지 삭제</span>
        </Button>
      </FormGroup>
    );
  }
}
export default Files;
