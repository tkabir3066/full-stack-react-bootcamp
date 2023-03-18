import React, { Component } from "react";
import style from "./card.module.css";
class OddOrEven extends Component {
  render() {
    const { count, pickedValue } = this.props;
    const counter = count % 2 === 0 ? "even" : "odd";
    return (
      <div>
        <h3>Counter : {counter}</h3>
        <p>
          Card Number :{" "}
          {/* {pickedValue && (
            <span className={pickedValue % 2 === 0 ? style.even : style.odd}>
              {counter}
            </span>
          )} */}
          {pickedValue ? (
            <p className={pickedValue % 2 === 0 ? style.even : style.odd}>
              {counter}
            </p>
          ) : (
            <p>You haven't picked a number yet</p>
          )}
        </p>
      </div>
    );
  }
}

export default OddOrEven;
