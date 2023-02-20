const RandomCard = (props) => {
  const { cardValues, setPickedValue } = props;

  return (
    <div>
      <h1>
        {cardValues.map((cardValue, index) => {
          return (
            <div
              key={index}
              style={{
                display: "inline-block",
                width: "150px",
                height: "150px",
                backgroundColor: "palevioletred",
                color: "#fff",
                lineHeight: "90px",
                fontWeight: "bolder",
                fontSize: "30px",
                marginRight: 10,
                textAlign: "center",
                borderRadius: "100%",
              }}
              onClick={() => setPickedValue(cardValue)}
            >
              <h3>{cardValue}</h3>
            </div>
          );
        })}
      </h1>
    </div>
  );
};

export default RandomCard;
