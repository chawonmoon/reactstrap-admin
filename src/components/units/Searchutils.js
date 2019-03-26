import React, { Component } from "react";
import Selectboxs from "components/units/Selectboxs";
import {
  InputGroup,
  InputGroupAddon, 
  Input,
  Button 
} from "reactstrap";

class Searchutils extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-utils">
        <InputGroup>
          <Selectboxs selectopt={this.props.searchopt} />
          <Input
            type="search"
            placeholder="검색어를 입력하세요."
            className="search-text"
          />
          <InputGroupAddon addonType="append">
            <Button color="pink">
              <i className="ico-search" />
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}

export default Searchutils;
