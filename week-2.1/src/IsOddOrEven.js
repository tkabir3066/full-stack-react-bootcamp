// Odd or Even

import Styles from "./App.module.css";

const IsOddOrEven = (props) => {
  const { count, pickedValue } = props;
  const oddOrEven = pickedValue % 2 === 0 ? "Even" : "Odd";

  return (
    <div>
      {<h2>Number is {count % 2 === 0 ? "Even" : "Odd"}</h2>};
      {
        <h2>
          Number is{" "}
          {pickedValue && (
            <span className={oddOrEven === "Even" ? Styles.even : Styles.odd}>
              {oddOrEven}
            </span>
          )}
        </h2>
      }
      ;
    </div>
  );
};

export default IsOddOrEven;
