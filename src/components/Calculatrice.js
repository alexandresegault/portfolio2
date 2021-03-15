import React, { Component } from "react";
import "./Calculatrice.css";

class Calculatrice extends Component {
  state = {
    count: "0"
  };
  reset = () => {
    const { count } = this.state;
    this.setState({
      count: "0"
    });
  };
  addDot = () => {
    const { count } = this.state;

    this.setState({
      count: count + "."
    });
  };
  handle = digit => {
    const { count } = this.state;
    this.setState({
      count: count === "0" ? String(digit) : count + digit
    });
  };

  calc = () => {
    const { count } = this.state;
    this.setState({
      count: (eval(count) * 100) / 100
    });
  };
  render() {
    return (
      <div className="calculatrice">
        <input id="result" value={this.state.count} />
        <div id="btns">
          <div id="number-container">
            <button className="number" onClick={() => this.handle(1)}>
              1
            </button>
            <button className="number" onClick={() => this.handle(2)}>
              2
            </button>
            <button className="number" onClick={() => this.handle(3)}>
              3
            </button>
            <button className="number" onClick={() => this.handle(4)}>
              4
            </button>
            <button className="number" onClick={() => this.handle(5)}>
              5
            </button>
            <button className="number" onClick={() => this.handle(6)}>
              6
            </button>
            <button className="number" onClick={() => this.handle(7)}>
              7
            </button>
            <button className="number" onClick={() => this.handle(8)}>
              8
            </button>
            <button className="number" onClick={() => this.handle(9)}>
              9
            </button>
            <button className="number" id="zero" onClick={() => this.handle(0)}>
              0
            </button>
          </div>
          <div id="operator-container">
            <button className="operator" onClick={() => this.handle("+")}>
              +
            </button>
            <button className="operator" onClick={() => this.handle("-")}>
              -
            </button>

            <button className="operator" onClick={() => this.handle("*")}>
              *
            </button>
            <button className="operator" onClick={() => this.handle("/")}>
              &divide;
            </button>
            <button className="operator" onClick={() => this.handle("%")}>
              %
            </button>
          </div>
        </div>
        <div className="special-container">
          <button className="operator" onClick={() => this.calc()}>
            =
          </button>
          <button className="operator" onClick={() => this.reset()}>
            C
          </button>
          <button className="operator" onClick={() => this.addDot()}>
            .
          </button>
        </div>
      </div>
    );
  }
}
export default Calculatrice;
