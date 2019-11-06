import React from "react";
import SpecialButton from "./SpecialButton";
import { specials } from "../../../data";


const Specials = () => {
  return (
    <div>
      {specials.map(special => {
       return <SpecialButton special={special} />
      })}
    </div>
  );
};

export default Specials;