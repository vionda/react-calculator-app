import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div className={`column-${this.props.cols}`}>
        <button
          onClick={() => this.props.action(this.props.symbol)}
          className="calc-button"
        >
          {this.props.symbol}
        </button>
      </div>
    );
  }
}

export default Button;
