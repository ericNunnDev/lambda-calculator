import React, { useState } from "react";
import SpecialButton from "./SpecialButton";
import { specials } from "../../../data";


const Specials = () => {
  const [specialsState, setSpecialsState] = useState(specials);

  return (
    <div>
      {specialsState.map((index, special) => {
       return <SpecialButton key={index} special={special} />
      })}
    </div>
  );
};

export default Specials;