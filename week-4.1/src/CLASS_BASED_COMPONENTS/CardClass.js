import React, { Component } from "react";
import style from "./card.module.css";

import logo from "./logo512.png";
class Card extends Component {
  pickedCardNumber = () => {
    this.props.pickedCardParent(this.props.cardNum);
  };
  render() {
    return (
      <>
        <img src={logo} alt="logo" />
        <div className={style.cardNum} onClick={this.pickedCardNumber}>
          {this.props.cardNum}
        </div>
      </>
    );
  }
}

export default Card;
