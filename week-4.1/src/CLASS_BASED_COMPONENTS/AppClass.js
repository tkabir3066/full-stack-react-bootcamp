// class based component
// comparing class based component with functional component
// image import (card)

import React, { Component } from "react";
import BdCard from "./BdCard";
import Card from "./CardClass";
import OddOrEven from "./OddOrEvenClass";

const bdCards = [
  {
    img: "./logo192.png",
    title: "Sample title 1",
    description: "Description 1",
  },
  {
    img: "./logo192.png",
    title: "Sample title 1",
    description: "Description 1",
  },
  {
    img: "./logo192.png",
    title: "Sample title 1",
    description: "Description 1",
  },
];

class AppClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      cardNumbers: [10, 25, 45, 74, 88],
      pickedValue: null,
    };
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  handleReset = () => {
    this.setState({
      count: this.state.count - this.state.count,
    });
  };

  pickedCardParent = (cardNum) => {
    this.setState({
      pickedValue: cardNum,
    });
  };
  render() {
    const { count, cardNumbers, pickedValue } = this.state;
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button>

        <OddOrEven count={count} pickedValue={pickedValue} />
        {cardNumbers.map((cardNum, index) => (
          <Card
            key={index}
            cardNum={cardNum}
            pickedCardParent={this.pickedCardParent}
          />
        ))}

        {bdCards.map((card, index) => (
          <BdCard key={index} card={card} />
        ))}
      </div>
    );
  }
}

export default AppClass;
