import React from "react";

const SpecialButton = props => {
  console.log(props);
  return (
    <>
      <button className="specials-btn">{props.special}</button>
    </>
  );
};

export default SpecialButton;