import React from "react";

const NumberButton = props => {
  console.log(props.number);
  return (
    <>
      <button className="number-btn">{props.number}</button>
    </>
  );
};

export default NumberButton;