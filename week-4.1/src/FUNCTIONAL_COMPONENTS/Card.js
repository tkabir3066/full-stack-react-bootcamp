import React from "react";
import style from "./card.module.css";
const Card = ({ cardNumbers }) => {
  return (
    <div>
      {cardNumbers.map((cardNum, index) => (
        <p className={style.cardNum} key={index}>
          {cardNum}
        </p>
      ))}
    </div>
  );
};

export default Card;
