import React, { Component } from "react";
import style from "./card.module.css";
class Card extends Component {
  pickedCardNumber = () => {
    this.props.pickedCardParent(this.props.cardNum);
  };
  render() {
    return (
      <div className={style.cardNum} onClick={this.pickedCardNumber}>
        {this.props.cardNum}
      </div>
    );
  }
}

export default Card;
