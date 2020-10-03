import React, { useState } from "react";

const Cell = ({ row, col, handleClick, content }) => {
  const [blink, setBlink] = useState("");
  const onClick = () => {
    if (content === "") {
      handleClick(row, col);
    } else {
      setBlink("blink");
      setTimeout(() => {
        setBlink("");
      }, 500);
    }
  };
  const renderContent = () => {
    switch (content) {
      case "X":
        return <i className="fas fa-times"></i>;
      case "0":
        return <i className="far fa-circle"></i>;
      default:
        return;
    }
  };
  return (
    <div className={`cell ${blink}`} onClick={onClick}>
      {renderContent()}
    </div>
  );
};
export default Cell;
