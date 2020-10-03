import React, { useState } from "react";

let style = {
  height: "100px",
  width: "100px",
  border: "1px solid black",
};

const Cell = ({ row, col, handleClick, nextPlayer, content }) => {
  const onClick = () => {
    if (content === "") {
      handleClick(row, col);
    } else {
      console.log("Cell is marked");
    }
  };
  return (
    <div style={style} onClick={onClick}>
      {content}
    </div>
  );
};
export default Cell;
