import React, { Component } from "react";

class UsingClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: 0,
      num2: 0,
      result: 0,
    };
  }
  handleNum1Change = (event) => {
    this.setState({ num1: Number(event.target.value) }); //The Number function is used to convert the input string to a number.
  };
  handleNum2Change = (event) => {
    this.setState({ num2: Number(event.target.value) });
  };
  addNumbers = () => {
    const result = this.state.num1 + this.state.num2;
    this.setState({ result });
  };
  render() {
    return (
      <div>
        <input
          type="number"
          value={this.state.num1}
          onChange={this.handleNum1Change}
        />
        <input
          type="number"
          value={this.state.num2}
          onChange={this.handleNum2Change}
        />
        <button onClick={this.addNumbers}>Addition operation</button>
        <p>Result: {this.state.result}</p>
      </div>
    );
  }
}
export default UsingClass;
