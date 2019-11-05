import React, { useState } from "react";
import NumberButton from "./NumberButton";
import { numbers } from "../../../data";

const Numbers = () => {
  const [numberState, setNumberState] = useState(numbers);

  return (
    <div>
      {numberState.map((index, number) => {
       return <NumberButton key={index} number={number} />
      })}
    </div>
  );
};

export default Numbers;