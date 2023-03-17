import React, { Component } from "react";

class OddOrEven extends Component {
  render() {
    const { count } = this.props;
    return (
      <div>
        <h3>Counter : {count % 2 === 0 ? "even" : "odd"}</h3>
      </div>
    );
  }
}

export default OddOrEven;
