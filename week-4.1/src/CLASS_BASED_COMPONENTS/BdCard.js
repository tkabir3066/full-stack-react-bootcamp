import React, { Component } from "react";

class BdCard extends Component {
  render() {
    const { card } = this.props;
    const { img, title, description } = card;
    return (
      <div>
        <img src={img} alt="logo" />
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    );
  }
}

export default BdCard;
