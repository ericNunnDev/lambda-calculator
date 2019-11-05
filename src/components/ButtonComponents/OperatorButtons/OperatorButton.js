import React from "react";

const OperatorButton = props => {
  console.log(props);
  return (
    <>
      <button>{props.operator}</button>
    </>
  );
};

export default OperatorButton;