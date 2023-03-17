import React, { Component } from "react";
import style from "./card.module.css";
class Card extends Component {
  pickedCardNumber = () => {
    this.props.pickedCardParent(this.props.cardNum);
  };
  render() {
    const { cardNumbers } = this.props;

    return (
      <div>
        {cardNumbers.map((cardNum, index) => {
          return (
            <p
              className={style.cardNum}
              key={index}
              onClick={this.pickedCardNumber}
            >
              {cardNum}
            </p>
          );
        })}
      </div>
    );
  }
}

export default Card;
