import React, { Component } from "react";
import { ChromePicker } from "react-color";
import { Input } from "reactstrap";

class Colorpickers extends Component {
  static defaultProps = {
    color: {
      background: "#000000"
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      color: {
        background: this.props.color.background
      }
    };
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = color => {
    this.setState({
      ...this.state.displayColorPicker,
      color: { background: color.hex }
    });
  };

  render() {
    const styles = {
      color: {
        background: this.state.color.background
      }
    };

    return (
      <div className="color-pickers">
        <div className="color-swatch" onClick={this.handleClick}>
          <div style={styles.color} />
        </div>
        <Input
          type="text"
          onFocus={this.handleClick}
          value={this.state.color.background}
          readOnly
        />
        {this.state.displayColorPicker ? (
          <div className="color-popover">
            <div className="color-cover" onClick={this.handleClose} />
            <ChromePicker
              color={this.state.color.background}
              onChange={this.handleChange}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Colorpickers;
