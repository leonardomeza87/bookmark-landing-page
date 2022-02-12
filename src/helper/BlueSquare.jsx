import React from "react";

const BlueSquare = (inverted) => {
  return (
    <div className={`blue-square ${inverted === true ? "inverted" : ""}`}></div>
  );
};

export default BlueSquare;
