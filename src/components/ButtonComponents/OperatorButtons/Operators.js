import React from "react";
import OperatorButton from "./OperatorButton";
import { operators } from "../../../data";

const Operators = () => {
  return (
    <div>
      {operators.map(operator => {
        return <OperatorButton operator={operator} />
      })}
    </div>
  );
};

export default Operators;